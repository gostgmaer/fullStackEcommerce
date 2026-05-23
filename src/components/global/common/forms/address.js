"use client"

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MdArrowForward } from 'react-icons/md';
import Input from '@/components/global/fields/input';
import { Select } from '../../../global/fields/SelectField';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
import { useParams, useRouter } from 'next/navigation';

const addressSchema = z.object({
  firstName: z.string().min(1, 'First Name is required!'),
  lastName: z.string().min(1, 'Last Name is required!'),
  phone: z.string().min(1, 'Phone number is required!'),
  email: z.string().min(1, 'Email address is required!').email('Invalid email address'),
  address: z.string().min(1, 'Address is required!'),
  country: z.string().min(1, 'Country is required!'),
  state: z.string().min(1, 'State is required!'),
  city: z.string().min(1, 'City is required!'),
  postalCode: z.string().min(1, 'Pin Code is required!'),
  type: z.enum(['Shipping', 'Billing'], {
    errorMap: () => ({ message: 'Address type is required!' }),
  }),
});

const AddressForm = ({ currAddress }) => {
    const [csc, setCsc] = useState(null);
    const { data: session } = useSession();
    const params = useParams();
    const route = useRouter();

    useEffect(() => {
        import('country-state-city').then((mod) => {
            setCsc(mod);
        });
    }, []);

    const addressType = [
        { key: "Shipping", value: "Shipping" },
        { key: "Billing", value: "Billing" }
    ];

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            firstName: currAddress ? currAddress.firstName : "",
            lastName: currAddress ? currAddress.lastName : "",
            phone: currAddress ? currAddress.phone : "",
            email: currAddress ? currAddress.email : "",
            address: currAddress ? currAddress.address : "",
            country: currAddress ? currAddress.country : "",
            state: currAddress ? currAddress.state : "",
            city: currAddress ? currAddress.city : "",
            postalCode: currAddress ? currAddress.postalCode : "123456",
            type: currAddress ? currAddress.type : "Shipping",
        }
    });

    const countryVal = watch("country");
    const stateVal = watch("state");

    // Reset state/city when country changes
    useEffect(() => {
        if (countryVal && currAddress?.country !== countryVal) {
            setValue("state", "");
            setValue("city", "");
        }
    }, [countryVal, setValue, currAddress]);

    // Reset city when state changes
    useEffect(() => {
        if (stateVal && currAddress?.state !== stateVal) {
            setValue("city", "");
        }
    }, [stateVal, setValue, currAddress]);

    const onSubmit = async (values) => {
        try {
            let response;
            if (params.id) {
                response = await CustomerServices.updateCustomerAddress(
                    { "Authorization": `Bearer ${session["accessToken"]}` }, values, params
                );
            } else {
                response = await CustomerServices.addCustomerAddress(
                    { "Authorization": `Bearer ${session["accessToken"]}` }, values
                );
            }

            if (response["statusCode"] === 201 || response["statusCode"] === 200) {
                notifySuccess(response["message"]);
                route.push('/user/my-account/profile');
            } else {
                notifyerror(response["message"]);
            }
        } catch (error) {
            notifyerror(error?.message || "Something went wrong.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-background text-foreground transition-colors duration-200">
            <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">

                <div>
                    <Input label={"First name"} type={"text"} additionalAttrs={{
                        ...register("firstName"),
                        placeholder: "John",
                        required: true
                    }} id={"firstName"} />
                    {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.firstName.message}</p>
                    )}
                </div>

                <div>
                    <Input label={"Last name"} type={"text"} additionalAttrs={{
                        ...register("lastName"),
                        placeholder: "Doe",
                        required: true
                    }} id={"lastName"} />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.lastName.message}</p>
                    )}
                </div>

                <div>
                    <Input label={"Phone Number"} type={"text"} additionalAttrs={{
                        ...register("phone"),
                        placeholder: "1234567890",
                    }} id={"phone"} />
                    {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <Input label={"Email Address"} type={"email"} additionalAttrs={{
                        ...register("email"),
                        placeholder: "john@example.com",
                        required: true
                    }} id={"email"} />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>
                    )}
                </div>

                <div className="md:col-span-2">
                    <Input label={"Address"} type={"text"} additionalAttrs={{
                        ...register("address"),
                        placeholder: "123 Main St",
                        required: true
                    }} id={"address"} />
                    {errors.address && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.address.message}</p>
                    )}
                </div>

                <div>
                    <Select label={"Country"} additionalAttrs={{
                        ...register("country"),
                    }} id={"country"} options={csc ? csc.Country.getAllCountries() : []} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"Country"} />
                    {errors.country && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.country.message}</p>
                    )}
                </div>

                <div>
                    <Select label={"State"} additionalAttrs={{
                        ...register("state"),
                    }} id={"state"} options={csc && countryVal ? csc.State.getStatesOfCountry(countryVal) : []} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"State"} />
                    {errors.state && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.state.message}</p>
                    )}
                </div>

                <div>
                    <Select label={"City"} additionalAttrs={{
                        ...register("city"),
                    }} id={"city"} options={csc && countryVal && stateVal ? csc.City.getCitiesOfState(countryVal, stateVal) : []} optionkeys={{ key: "name", value: "name" }} placeholder={"City"} />
                    {errors.city && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.city.message}</p>
                    )}
                </div>

                <div>
                    <Input label={"Pin Code"} type={"text"} additionalAttrs={{
                        ...register("postalCode"),
                        placeholder: "123456",
                        required: true
                    }} id={"postalCode"} />
                    {errors.postalCode && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.postalCode.message}</p>
                    )}
                </div>

                <div>
                    <Select label={"Address type"} additionalAttrs={{
                        ...register("type"),
                    }} id={"type"} options={addressType} optionkeys={{ key: "key", value: "value" }} placeholder={"Select"} />
                    {errors.type && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.type.message}</p>
                    )}
                </div>

                <div className="col-span-full flex justify-end mt-4">
                    <button
                        className="inline-flex font-bold items-center bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-200 px-6 py-3.5 text-sm h-12 rounded-lg border border-transparent shadow-sm hover:shadow"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <span>{isSubmitting ? "Saving..." : 'Save Address'}</span>
                        <MdArrowForward className="ms-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddressForm;
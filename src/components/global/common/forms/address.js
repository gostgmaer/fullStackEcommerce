"use client"
import React from 'react'
import { useFormik } from 'formik';
import { contactUsValidation } from '@/utils/validation/validation';
import { MdArrowForward } from 'react-icons/md';
import Label from '@/components/global/fields/Label';
import Input from '@/components/global/fields/input';
import Textarea from '@/components/global/fields/textArea';
import { post } from '@/helper/network';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { Select } from '../../../global/fields/SelectField';
import { Country,State,City } from 'country-state-city';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
const AddressForm = () => {

    const { data: session, status } = useSession();

    const handleSubmit = async (values) => {
        try {
            const addAddress = await CustomerServices.addCustomerAddress(
                { "Authorization": `Bearer ${session["accessToken"]}`  },values
            );
            if (addAddress.status == "OK") {
                notifySuccess(addAddress.message)
            }else{
                notifyerror(addAddress.message)
            }
        } catch (error) {
            console.log(error);
            
            notifyerror(error?.["message"])
           

        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            state: "",
            email: "",
            country: "",
            city: "",
            postalCode: "false",
            type: "Shipping",
        },
        // validationSchema: contactUsValidation,
        onSubmit: async (values, { setSubmitting, resetForm, setValues }) => {
            setSubmitting(true)
            console.log(values);
            
            const res = await handleSubmit(values)

            const messages = {
                start: "Starting API call...",
                inProgress: "API call in progress...",
                success: "API call successful!",
                failure: "API call failed",
            };

            // const    res = await useApiWithToaster(handleSubmit,values,messages)

            if (res["statusCode"] === 201) {

                notifySuccess('Your message sent successfully. We will contact you shortly.')
                // resetForm()
                setSubmitting(false)


            } else {
                setSubmitting(false)
                notifyerror(res["message"])
            }
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">

                    <div className=" ">
                        <Input label={"First name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("firstName"),
                            placeholder: "First name", required: true
                        }} classes={undefined} icon={undefined} id={"firstName"} />


                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Last name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("lastName"),
                            placeholder: "Last name", required: true
                        }} classes={undefined} icon={undefined} id={"lastName"} />


                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Phone Number"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("phone"),
                            placeholder: "Phone Number",
                        }} classes={undefined} icon={undefined} id={"phone"} />



                    </div>

                    <div className=" ">
                        <Input label={"Email Address"} type={"email"} additionalAttrs={{
                            ...formik.getFieldProps("email"),
                            placeholder: "infomil@mil.com", required: true
                        }} classes={undefined} icon={undefined} id={"email"} />


                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="">
                        <Select label={"Country"} additionalAttrs={{
                            ...formik.getFieldProps("country"),

                        }} id={"country"} options={Country.getAllCountries()} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"Country"}></Select>
                        {formik.errors.country &&
                            formik.touched.country && (
                                <div className="text-red-500 text-sm">
                                    {formik.errors.country}
                                </div>
                            )}
                    </div>


                    <div className=" ">
                        <Select label={"State"} additionalAttrs={{
                            ...formik.getFieldProps("state"),

                        }} id={"state"} options={State.getStatesOfCountry(formik.values.country)} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"State"}></Select>
                        {formik.errors.state &&
                            formik.touched.state && (
                                <div className="text-red-500 text-sm">
                                    {formik.errors.state}
                                </div>
                            )}


                    </div>
                    <div className="  ">
                        <Select label={"City"} additionalAttrs={{
                            ...formik.getFieldProps("city"),

                        }} id={"city"} options={City.getCitiesOfState(formik.values.country,formik.values.state)} optionkeys={{ key: "name", value: "name" }} placeholder={"city"}></Select>
                        {formik.errors.city &&
                            formik.touched.city && (
                                <div className="text-red-500 text-sm">
                                    {formik.errors.city}
                                </div>
                            )}
                    </div>

                    <div className=''>
                        <Input label={"Pin Code"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("postalCode"),
                            placeholder: "121313", required: true
                        }} classes={undefined} icon={undefined} id={"postalCode"} />


                        {formik.touched.postalCode && formik.errors.postalCode && (
                            <div className="text-red-500 text-sm">{formik.errors.postalCode}</div>
                        )}
                    </div>


                   <div className=' col-span-full flex justify-end'>
                   <button
                        className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30 "
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        <span>{formik.isSubmitting ? "Saving..." : 'Save'}</span>{" "}
                        <MdArrowForward className="ms-2 mt-0.5 h-5 w-5" />
                    </button>
                   </div>
                </div>
            </form>
        </>
    )
}

export default AddressForm
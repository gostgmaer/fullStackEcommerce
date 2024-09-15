"use client"
import { useFormik } from 'formik';
import { MdArrowForward } from 'react-icons/md';
import Input from '@/components/global/fields/input';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { Select } from '../../../global/fields/SelectField';
import { Country, State, City } from 'country-state-city';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
import { useParams, useRouter } from 'next/navigation';
const AddressForm = ({ currAddress }) => {


    const { data: session, status } = useSession();
    const params = useParams()
    const route = useRouter()

    const addressType = [{
        key: "Shipping",
        value: "Shipping"
    }, {
        key: "Billing",
        value: "Billing"
    }]

    const handleSubmit = async (values) => {
        var response
        try {
            if (params.id) {
                response = await CustomerServices.updateCustomerAddress(
                    { "Authorization": `Bearer ${session["accessToken"]}` }, values, params
                );
            } else {
                response = await CustomerServices.addCustomerAddress(
                    { "Authorization": `Bearer ${session["accessToken"]}` }, values
                );
            }

        } catch (error) {
            notifyerror(error?.["message"])
        }
        return response
    };

    const formik = useFormik({
        initialValues: {
            firstName: currAddress ? currAddress.firstName : "",
            lastName: currAddress ? currAddress.lastName : "",
            phone: currAddress ? currAddress.phone : "",

            email: currAddress ? currAddress.email : "",
            state: currAddress ? currAddress.state : "",
            address: currAddress ? currAddress.address : "",
            country: currAddress ? currAddress.country : "",
            city: currAddress ? currAddress.city : "",
            postalCode: currAddress ? currAddress.postalCode : "123456",
            type: currAddress ? currAddress.type : "Shipping",
        },
        // validationSchema: contactUsValidation,
        onSubmit: async (values, { setSubmitting, resetForm, setValues }) => {
            setSubmitting(true)
            const res = await handleSubmit(values)
            if (res["statusCode"] === 201 || res["statusCode"] === 200) {
                notifySuccess(res["message"])
                setSubmitting(false)
                route.push('/user/my-account/profile')
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



                    </div>
                    <div className=" ">
                        <Input label={"Last name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("lastName"),
                            placeholder: "Last name", required: true
                        }} classes={undefined} icon={undefined} id={"lastName"} />



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


                    </div>


                    <div className=" ">
                        <Input label={"Address"} type={"address"} additionalAttrs={{
                            ...formik.getFieldProps("address"),
                            placeholder: "34 suit ", required: true
                        }} classes={undefined} icon={undefined} id={"address"} />


                    </div>
                    <div className="">
                        <Select label={"Country"} additionalAttrs={{
                            ...formik.getFieldProps("country"),

                        }} id={"country"} options={Country.getAllCountries()} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"Country"}></Select>

                    </div>
                    <div className=" ">
                        <Select label={"State"} additionalAttrs={{
                            ...formik.getFieldProps("state"),

                        }} id={"state"} options={State.getStatesOfCountry(formik.values.country)} optionkeys={{ key: "isoCode", value: "name" }} placeholder={"State"}></Select>



                    </div>
                    <div className="  ">
                        <Select label={"City"} additionalAttrs={{
                            ...formik.getFieldProps("city"),

                        }} id={"city"} options={City.getCitiesOfState(formik.values.country, formik.values.state)} optionkeys={{ key: "name", value: "name" }} placeholder={"city"}></Select>

                    </div>
                    <div className=''>
                        <Input label={"Pin Code"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("postalCode"),
                            placeholder: "121313", required: true
                        }} classes={undefined} icon={undefined} id={"postalCode"} />



                    </div>
                    <div className="  ">
                        <Select label={"Address type"} additionalAttrs={{
                            ...formik.getFieldProps("type"),

                        }} id={"type"} options={addressType} optionkeys={{ key: "key", value: "value" }} placeholder={"Select"}></Select>

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
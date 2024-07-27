"use client"
import React from 'react'
import { useFormik } from 'formik';
import { contactUsValidation } from '@/utils/validation/validation';
import PasswordField from '@/components/global/fields/PasswordField';
import { MdArrowForward } from 'react-icons/md';
import Label from '@/components/global/fields/Label';
import Input from '@/components/global/fields/input';
import Textarea from '@/components/global/fields/textArea';
import { post } from '@/helper/network';
import { notifyerror, notifySuccess, useApiWithToaster } from '@/utils/notify/notice';
const Contact = () => {


    const handleSubmit = async (values) => {
        try {
            const res = await post("/contact", values);
            if (res) {
                return res
            }
        } catch (error) {
            notifyerror("Error", 5000)
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
            email: "",
            subject: "",
            message: "",
            isAgreed: "false",
        },
        validationSchema: contactUsValidation,
        onSubmit: async (values, { setSubmitting, resetForm, setValues }) => {
            setSubmitting(true)
            const res = await handleSubmit(values)

            const messages = {
                start: "Starting API call...",
                inProgress: "API call in progress...",
                success: "API call successful!",
                failure: "API call failed",
            };

            // const    res = await useApiWithToaster(handleSubmit,values,messages)

            if (res.statusCode === 201) {

                notifySuccess('Your message sent successfully. We will contact you shortly.')
               // resetForm()
                setSubmitting(false)


            } else {
                setSubmitting(false)
                notifyerror(res.message)
            }
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
                    <div className=" col-span-full text-black ">

                        <Label type={"h2"} className='text-lg font-semibold'>For any suppoort just send your query</Label>
                        <Label type={"p"} className='text-sm'>Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures.</Label>
                    </div>
                    <div className=" ">
                        <Input label={"First name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("firstName"),
                            placeholder: "First name", required: true
                        }} classes={undefined} icon={undefined} id={"firstName"} formik />


                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Last name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("lastName"),
                            placeholder: "Last name", required: true
                        }} classes={undefined} icon={undefined} id={"lastName"} formik />


                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Phone Number"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("phone"),
                            placeholder: "Phone Number",
                        }} classes={undefined} icon={undefined} id={"phone"} formik />



                    </div>
                    <div className=" ">
                        <Input label={"Company"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("company"),
                            placeholder: "Company",
                        }} classes={undefined} icon={undefined} id={"company"} formik />



                    </div>
                    <div className=" col-span-full ">
                        <Input label={"Email Address"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("email"),
                            placeholder: "email", required: true
                        }} classes={undefined} icon={undefined} id={"email"} formik />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className=" col-span-full ">
                        <Input label={"Subject"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("subject"),
                            placeholder: "Your Subject", required: true
                        }} classes={undefined} icon={undefined} id={"subject"} formik />
                        {formik.errors.subject && formik.touched.subject && (
                            <div className="text-red-500 text-sm">{formik.errors.subject}</div>
                        )}
                    </div>
                    <div className=" col-span-full ">
                        <Textarea label={"Message"} additionalAttrs={{
                            ...formik.getFieldProps("message"),
                            placeholder: "Write Your message", required: true
                        }} classes={undefined} id={"message"} />
                        {formik.errors.message && formik.touched.message && (
                            <div className="text-red-500 text-sm">{formik.errors.message}</div>
                        )}
                    </div>
                  
                    <button
                        className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        <span>{formik.isSubmitting ? "Submitting..." : 'Send Message'}</span>{" "}
                        <MdArrowForward className="ms-2 mt-0.5 h-5 w-5" />
                    </button>
                </div>
            </form>
        </>
    )
}

export default Contact
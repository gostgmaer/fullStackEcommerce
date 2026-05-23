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
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const res = await handleSubmit(values);

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
                <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
                <div className="col-span-full">

                        <Label type={"h2"} className='text-lg font-semibold'>For any suppoort just send your query</Label>
                        <Label type={"p"} className='text-sm'>Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures.</Label>
                    </div>
                    <div className=" ">
                        <Input label={"First name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("firstName"),
                            placeholder: "First name", required: true
                        }} classes={undefined} icon={undefined} id={"firstName"}  />


                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Last name"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("lastName"),
                            placeholder: "Last name", required: true
                        }} classes={undefined} icon={undefined} id={"lastName"}  />


                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div className=" ">
                        <Input label={"Phone Number"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("phone"),
                            placeholder: "Phone Number",
                        }} classes={undefined} icon={undefined} id={"phone"}  />



                    </div>
                    <div className=" ">
                        <Input label={"Company"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("company"),
                            placeholder: "Company",
                        }} classes={undefined} icon={undefined} id={"company"}  />



                    </div>
                    <div className=" col-span-full ">
                        <Input label={"Email Address"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("email"),
                            placeholder: "email", required: true
                        }} classes={undefined} icon={undefined} id={"email"}  />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className=" col-span-full ">
                        <Input label={"Subject"} type={"text"} additionalAttrs={{
                            ...formik.getFieldProps("subject"),
                            placeholder: "Your Subject", required: true
                        }} classes={undefined} icon={undefined} id={"subject"}  />
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
                        className="col-span-2 inline-flex font-bold items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 px-5 py-2 text-base h-12 rounded-lg border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 w-full"
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
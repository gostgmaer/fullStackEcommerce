"use client"
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { contactUsValidation } from '@/utils/validation/validation';
import { MdArrowForward, MdCheckCircle } from 'react-icons/md';
import Label from '@/components/global/fields/Label';
import Input from '@/components/global/fields/input';
import Textarea from '@/components/global/fields/textArea';
import { post } from '@/helper/network';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';

const CATEGORIES = [
    { value: '', label: 'Select a category' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Order Issue', label: 'Order Issue' },
    { value: 'Shipping & Delivery', label: 'Shipping & Delivery' },
    { value: 'Returns & Refunds', label: 'Returns & Refunds' },
    { value: 'Payment Issue', label: 'Payment Issue' },
    { value: 'Product Question', label: 'Product Question' },
    { value: 'Account Support', label: 'Account Support' },
    { value: 'Technical Support', label: 'Technical Support' },
    { value: 'Feedback', label: 'Feedback' },
    { value: 'Other', label: 'Other' },
];

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (values) => {
        try {
            const res = await post("/contact", values);
            if (res) {
                return res
            }
        } catch (error) {
            notifyerror("Failed to send message. Please try again.", 5000)
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
            category: "",
            orderNumber: "",
            isAgreed: "false",
        },
        validationSchema: contactUsValidation,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const res = await handleSubmit(values);

            if (res && res.statusCode === 201) {
                notifySuccess('Your message sent successfully. We will contact you shortly.')
                resetForm()
                setSubmitted(true)
                setSubmitting(false)
            } else {
                setSubmitting(false)
                notifyerror(res?.message || "Something went wrong. Please try again.")
            }
        },
    });

    const showOrderField = ['Order Issue', 'Shipping & Delivery', 'Returns & Refunds', 'Payment Issue'].includes(formik.values.category);

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <MdCheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md">
                    Thank you for reaching out. Our support team will review your message and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
                <div className="col-span-full">
                        <Label type={"h2"} className='text-lg font-semibold'>How can we help you?</Label>
                        <Label type={"p"} className='text-sm text-muted-foreground'>Fill out the form below and our support team will get back to you within 24 hours.</Label>
                    </div>

                    {/* Category Dropdown */}
                    <div className="col-span-full">
                        <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                            Issue Category
                        </label>
                        <select
                            id="category"
                            {...formik.getFieldProps("category")}
                            className="flex w-full rounded-xl border border-border bg-card h-11 px-3.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200"
                        >
                            {CATEGORIES.map((cat) => (
                                <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Order Number — conditional */}
                    {showOrderField && (
                        <div className="col-span-full animate-fade-in">
                            <Input label={"Order Number (optional)"} type={"text"} additionalAttrs={{
                                ...formik.getFieldProps("orderNumber"),
                                placeholder: "e.g. ORD-123456",
                            }} classes={undefined} icon={undefined} id={"orderNumber"} />
                        </div>
                    )}

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
                        className="btn-primary col-span-2 inline-flex font-bold items-center justify-center transition-colors duration-200 px-5 py-2 text-base h-12 rounded-xl w-full disabled:opacity-50"
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
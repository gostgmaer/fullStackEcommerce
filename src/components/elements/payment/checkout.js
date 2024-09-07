"use client"

import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { checkoutValidation } from '@/utils/validation/validation';
import { Field, Formik, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../global/fields/input';
import { Select } from '../../global/fields/SelectField';
import OrderSummary from '@/components/elements/product/orderSummary/OrderSummary';
import { Country, State, City } from 'country-state-city';
import Link from 'next/link';
import { MdCreditCard, MdWallet } from 'react-icons/md';
import { IoArrowForward, IoLogoPaypal, IoReturnUpBack } from 'react-icons/io5';
import Payment from './Payment';
import OrderServices from '@/helper/network/services/OrderServices';
import { authToken } from '@/helper/functions';

const CheckoutBlock = ({params}) => {
    const paymentMethod = [
        { key: "creditCard", value: "Credit Card/Debit Card/NetBanking" },
        { key: "paypal", value: "PayPal" },
        { key: "cashOnDelivery", value: "Cash on Delivery" },
    ];
    const initialValues = {

        firstName: "kishor",
        lastName: 'SARKAR',
        email: "IFO@MAIL.com",
        phone: "1111111111",
        address: "asd asdk askdj jkasd ",
        city: 'abuja',
        country: 'Nigeria',
        zipCode: '900101',
        accountCreate: false,
        additionalNotes: "",
        payment_method: "",
        couponcode: "",
    };


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: checkoutValidation,
        onSubmit: async (values, { setSubmitting }) => {
            // Handle form submission logic here

            //  ///console.log(values);
            setSubmitting(false);
            onchangeSubmit(values);
        }
    },
    );


    let [isPayment, setIsPayment] = useState(false);
    let [order, setOrder] = useState('');
    let [isloading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let navigate = useRouter();
    var Id = uuidv4()
    const { cartTotalAmount } = useSelector((state) => state['cart']);
    const { ...item } = useSelector((state) => state["cart"]);
    // const { user } = useSelector((state) => state['user']);
    const [shippingPrice, setShippingPrice] = useState(50);


    const onchangeSubmit = async (value, e) => {
        ///console.log(cartTotalAmount);
        // e.preventDefault()

        if (cartTotalAmount < 100) {
            return notifyerror('Order Items must worth more than $100');
        }

        if (value.shippingOption === 'fedx') {
            setShippingPrice(50);
        } else {
            setShippingPrice(60);
        }
        const data = {

            invoice: Id,
            shippingPrice,
            // userId: user?.user?._id,
            id: Id,
            products: item.cartItems,
            ...value,
            cartTotalAmount,
            totalPrice: Number(cartTotalAmount + shippingPrice),
        };

        if (data.payment_method === 'COD') {


            try {


                
                const requests = await OrderServices.addOrder(data, {"Authorization":`Bearer ${params?.value}`})
                notifySuccess(requests.message)
                if (requests.statusCode===201) {
                    navigate.push(`/order/${requests.result._id}`)
                }


            } catch (error) {
                notifyerror(error)
                setIsError(
                    error
                        ? error?.response?.data?.error ||
                        error?.response?.data?.message ||
                        error?.response?.data?.error.message ||
                        error?.message
                        : error?.message
                );
            }


        } else {
            setIsPayment(true);
            setOrder(data);
        }
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
                    <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <FormikProvider value={formik}>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <h2 className="font-semibold  text-base text-gray-700 dark:text-gray-50 pb-3">
                                            01. Personal Details
                                        </h2>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <Input label={"First Name"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("firstName"),
                                                    placeholder: "Kishor...",
                                                }} classes={undefined} icon={undefined} id={"firstName"}></Input>
                                                {formik.errors.firstName &&
                                                    formik.touched.firstName && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.firstName}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <Input label={"Last Name"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("lastName"),
                                                    placeholder: "Sarkar...",
                                                }} classes={undefined} icon={undefined} id={"lastName"}></Input>
                                                {formik.errors.lastName &&
                                                    formik.touched.lastName && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.lastName}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <Input label={"Email"} type={"email"} additionalAttrs={{
                                                    ...formik.getFieldProps("email"),
                                                    placeholder: "info@email.com",
                                                }} classes={undefined} icon={undefined} id={"email"}></Input>
                                                {formik.errors.email &&
                                                    formik.touched.email && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.email}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <Input label={"Phone"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("phone"),
                                                    placeholder: "1111111111",
                                                }} classes={undefined} icon={undefined} id={"phone"}></Input>
                                                {formik.errors.phone &&
                                                    formik.touched.phone && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.phone}
                                                        </div>
                                                    )}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <h2 className="font-semibold  text-base text-gray-700 dark:text-gray-50 pb-3">
                                            02. Shipping Details
                                        </h2>
                                        <div className="grid grid-cols-6 gap-6 mb-8">
                                            <div className="col-span-6 ">
                                                <Input label={"Shipping Address"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("address"),
                                                    placeholder: "18 lane",
                                                }} classes={undefined} icon={undefined} id={"address"}></Input>
                                                {formik.errors.address &&
                                                    formik.touched.address && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.address}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <Input label={"City"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("city"),
                                                    placeholder: "1111111111",
                                                }} classes={undefined} icon={undefined} id={"city"}></Input>
                                                {formik.errors.city &&
                                                    formik.touched.city && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.city}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <Select label={"Country"} additionalAttrs={{
                                                    ...formik.getFieldProps("country"),

                                                }} id={"country"} options={Country.getAllCountries()} optionkeys={{ key: "name", value: "name" }} placeholder={"Country"}></Select>
                                                {formik.errors.country &&
                                                    formik.touched.country && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.country}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <Input label={"zipCode"} type={"text"} additionalAttrs={{
                                                    ...formik.getFieldProps("zipCode"),
                                                    placeholder: "123451",
                                                }} classes={undefined} icon={undefined} id={"zipCode"}></Input>
                                                {formik.errors.zipCode &&
                                                    formik.touched.zipCode && (
                                                        <div className="text-red-500 text-sm">
                                                            {formik.errors.zipCode}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-12">
                                        <h2 className="font-semibold  text-base text-gray-700 pb-3">
                                            03. Payment Details
                                        </h2>
                                        <div className="mb-3">Stripe is Payment</div>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-2">
                                                <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                                                    <label className="cursor-pointer flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <span className="text-xl mr-3 text-gray-400">
                                                                <MdWallet />
                                                            </span>
                                                            <h6 className=" font-medium text-sm text-gray-600">
                                                                Cash On Delivery
                                                            </h6>
                                                        </div>
                                                        <Field
                                                            type="radio"
                                                            name="payment_method"
                                                            value="COD"
                                                            className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                        />

                                                    </label>
                                                </div>
                                                {formik.errors.payment_method && formik.touched.payment_method && (
                                                    <span className="text-red-400 text-sm mt-2">
                                                        {formik.errors.payment_method}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                                                    <label className="cursor-pointer flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <span className="text-xl mr-3 text-gray-400">
                                                                <IoLogoPaypal />
                                                            </span>
                                                            <h6 className=" font-medium text-sm text-gray-600">
                                                                Paypal
                                                            </h6>
                                                        </div>
                                                        <Field
                                                            type="radio"
                                                            name="payment_method"
                                                            value="paypal"
                                                            className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                        />

                                                    </label>
                                                </div>
                                                {formik.errors.payment_method && formik.touched.payment_method && (
                                                    <span className="text-red-400 text-sm mt-2">
                                                        {formik.errors.payment_method}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                                                    <label className="cursor-pointer flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <span className="text-xl mr-3 text-gray-400">
                                                                <MdCreditCard />
                                                            </span>
                                                            <h6 className=" font-medium text-sm text-gray-600">
                                                                RazorPay
                                                            </h6>
                                                        </div>
                                                        <Field
                                                            type="radio"
                                                            name="payment_method"
                                                            value="RazorPay"
                                                            className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                        />

                                                    </label>
                                                </div>
                                                {formik.errors.payment_method && formik.touched.payment_method && (
                                                    <span className="text-red-400 text-sm mt-2">
                                                        {formik.errors.payment_method}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                               
                                    <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                                        <div className="col-span-6 sm:col-span-3">
                                            <Link
                                                className="bg-indigo-50 border !no-underline border-indigo-100 rounded py-3 text-center text-sm font-medium !text-gray-700  hover:!text-gray-800 hover:border-gray-300 transition-all flex justify-center w-full"
                                                href="/"
                                            >
                                                <span className="text-xl mr-2">
                                                    <IoReturnUpBack />
                                                </span>
                                                Continue Shopping
                                            </Link>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <button
                                                type="submit"
                                                disabled={formik.isSubmitting}
                                                className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm  font-medium text-white flex justify-center w-full"
                                            >
                                                Confirm Order{' '}
                                                <span className="text-xl ml-2">
                                                    {' '}
                                                    <IoArrowForward />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </FormikProvider>
                        </div>
                    </div>
                    <OrderSummary />
                </div>
            </div>
            <Payment isOpen={isPayment} setIsPayment={setIsPayment} order={order} />
        </div>
    )
}

export default CheckoutBlock
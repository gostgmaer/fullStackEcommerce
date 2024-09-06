"use client"
// import Payment from '@/components/elements/payment/Payment';
import { notifyerror } from '@/utils/notify/notice';
import { checkoutValidation } from '@/utils/validation/validation';
import { Formik, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../fields/input';
import { Select } from '../../fields/SelectField';
import OrderSummary from '@/components/elements/product/orderSummary/OrderSummary';

import { Country, State, City }  from 'country-state-city';
import Link from 'next/link';

const CheckoutBlock = () => {
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


    const onchangeSubmit = (value) => {
        ///console.log(cartTotalAmount);
        
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
            cart: item.cartItems,
            ...value,
            cartTotalAmount,
            totalPrice: Number(cartTotalAmount + shippingPrice),
        };

        ///console.log(data);
        
        // if (data.paymentMethod === 'COD') {
        //     axios
        //         .post(`${process.env.REACT_APP_BASE_API_URL}/order/create`, data)
        //         .then((res) => res.data)
        //         .then((data) => {
        //             setIsLoading(false);
        //             toast.success(data.message);
        //             navigate(`./order/${Id}`);
        //         })
        //         .catch((error) => {
        //             toast.error(
        //                 error
        //                     ? error?.response?.data?.error ||
        //                             error?.response?.data?.message ||
        //                             error?.response?.data?.error.message ||
        //                             error?.message
        //                     : error?.message
        //             );
        //             setIsError(
        //                 error
        //                     ? error?.response?.data?.error ||
        //                             error?.response?.data?.message ||
        //                             error?.response?.data?.error.message ||
        //                             error?.message
        //                     : error?.message
        //             );
        //             setTimeout(() => {
        //                 setIsError(false);
        //             }, 2000);
        //         });
        // } else {
        //     setIsPayment(true);
        //     setOrder(data);
        // }
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
                    <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
                        <div className="mt-5 md:mt-0 md:col-span-2">
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

                                            }} id={"country"} options={Country.getAllCountries()}  optionkeys={{ key: "name", value: "name" }} placeholder={"Country"}></Select>
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
                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                                        Shipping Cost
                                    </label>
                                    {/* <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <div>
                                                <div className="p-3 border border-gray-200 bg-white rounded-md ">
                                                    <label className="cursor-pointer label">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <span className="text-2xl mr-3 text-gray-400">
                                                                    <svg
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        strokeWidth="2"
                                                                        viewBox="0 0 24 24"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        height="1em"
                                                                        width="1em"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x="1"
                                                                            y="3"
                                                                            width="15"
                                                                            height="13"
                                                                        ></rect>
                                                                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                                                        <circle
                                                                            cx="5.5"
                                                                            cy="18.5"
                                                                            r="2.5"
                                                                        ></circle>
                                                                        <circle
                                                                            cx="18.5"
                                                                            cy="18.5"
                                                                            r="2.5"
                                                                        ></circle>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <h6 className=" font-medium text-sm text-gray-600">
                                                                        FedEx
                                                                    </h6>
                                                                    <p className="text-xs text-gray-500 font-medium">
                                                                        Delivery: Today{' '}
                                                                        <span className="font-medium text-gray-600">
                                                                            Cost : $60.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <Field
                                                                type="radio"
                                                                name="shippingOption"
                                                                value="FedEx"
                                                                className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                            />
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            {errors.shippingOption &&
                                                touched.shippingOption && (
                                                    <span className="text-red-400 text-sm mt-2">
                                                        {errors.shippingOption}
                                                    </span>
                                                )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <div>
                                                <div className="p-3 border border-gray-200 bg-white rounded-md ">
                                                    <label className="cursor-pointer label">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <span className="text-2xl mr-3 text-gray-400">
                                                                    <svg
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        strokeWidth="2"
                                                                        viewBox="0 0 24 24"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        height="1em"
                                                                        width="1em"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x="1"
                                                                            y="3"
                                                                            width="15"
                                                                            height="13"
                                                                        ></rect>
                                                                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                                                        <circle
                                                                            cx="5.5"
                                                                            cy="18.5"
                                                                            r="2.5"
                                                                        ></circle>
                                                                        <circle
                                                                            cx="18.5"
                                                                            cy="18.5"
                                                                            r="2.5"
                                                                        ></circle>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <h6 className=" font-medium text-sm text-gray-600">
                                                                        UPS
                                                                    </h6>
                                                                    <p className="text-xs text-gray-500 font-medium">
                                                                        Delivery: 7 Days{' '}
                                                                        <span className="font-medium text-gray-600">
                                                                            Cost : $20.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <Field
                                                                type="radio"
                                                                name="shippingOption"
                                                                value="UPS"
                                                                className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                            />
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            {errors.shippingOption &&
                                                touched.shippingOption && (
                                                    <span className="text-red-400 text-sm mt-2">
                                                        {errors.shippingOption}
                                                    </span>
                                                )}
                                        </div>
                                    </div> */}
                                </div>

                                {/* <div className="mt-12">
                                    <h2 className="font-semibold  text-base text-gray-700 pb-3">
                                        03. Payment Details
                                    </h2>
                                    <div className="mb-3">Stripe is Payment</div>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                                                <label className="cursor-pointer">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <span className="text-xl mr-3 text-gray-400">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth="0"
                                                                    viewBox="0 0 512 512"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                                                                    <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                                                                </svg>
                                                            </span>
                                                            <h6 className=" font-medium text-sm text-gray-600">
                                                                Cash On Delivery
                                                            </h6>
                                                        </div>
                                                        <Field
                                                            type="radio"
                                                            name="paymentMethod"
                                                            value="COD"
                                                            className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                            {errors.paymentMethod && touched.paymentMethod && (
                                                <span className="text-red-400 text-sm mt-2">
                                                    {errors.paymentMethod}
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <div className="px-3 py-4 border border-gray-200 bg-white rounded-md">
                                                <label className="cursor-pointer">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <span className="text-xl mr-3 text-gray-400">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth="0"
                                                                    viewBox="0 0 512 512"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                                                                    <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                                                                </svg>
                                                            </span>
                                                            <h6 className=" font-medium text-sm text-gray-600">
                                                                Credit Card
                                                            </h6>
                                                        </div>
                                                        <Field
                                                            type="radio"
                                                            name="paymentMethod"
                                                            value="Card"
                                                            className="form-radio outline-none focus:ring-0 text-emerald-500"
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                            {errors.paymentMethod && touched.paymentMethod && (
                                                <span className="text-red-400 text-sm mt-2">
                                                    {errors.paymentMethod}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div> */}
                                {isError && (
                                    <p className="text-red-500 text-sm my-1">{isError}</p>
                                )}
                                <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                                    <div className="col-span-6 sm:col-span-3">
                                        <Link
                                            className="bg-indigo-50 border !no-underline border-indigo-100 rounded py-3 text-center text-sm font-medium !text-gray-700  hover:!text-gray-800 hover:border-gray-300 transition-all flex justify-center w-full"
                                            href="/"
                                        >
                                            <span className="text-xl mr-2">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="32"
                                                        d="M112 160l-64 64 64 64"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="32"
                                                        d="M64 224h294c58.76 0 106 49.33 106 108v20"
                                                    ></path>
                                                </svg>
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
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="48"
                                                        d="M268 112l144 144-144 144m124-144H100"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <OrderSummary />
                </div>
            </div>
            {/* <Payment isOpen={isPayment} setIsPayment={setIsPayment} order={order} /> */}
        </div>
    )
}

export default CheckoutBlock
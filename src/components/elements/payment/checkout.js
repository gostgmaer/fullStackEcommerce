"use client"

import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../global/fields/input';
import { Select } from '../../global/fields/SelectField';
import OrderSummary from '@/components/elements/product/orderSummary/OrderSummary';
import Link from 'next/link';
import { MdCreditCard, MdWallet } from 'react-icons/md';
import { IoArrowForward, IoReturnUpBack } from 'react-icons/io5';
import OrderServices from '@/helper/network/services/OrderServices';
import { emptyCart } from '@/store/reducers/cartSlice';
import { useSession } from 'next-auth/react';
import { RazorpayPayment } from './service';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const checkoutSchema = z.object({
  firstName: z.string().min(1, 'First Name is required!'),
  lastName: z.string().min(1, 'Last name is required!'),
  email: z.string().min(1, 'Email address is required!').email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required!'),
  address: z.string().min(1, 'Street address is required!'),
  city: z.string().min(1, 'City is required!'),
  country: z.string().min(1, 'Country is required!'),
  zipCode: z.string().min(1, 'ZIP / Postal is required!'),
  payment_method: z.enum(['COD', 'RazorPay'], {
    errorMap: () => ({ message: 'Payment Method is required!' }),
  }),
  additionalNotes: z.string().optional(),
});

const CheckoutBlock = () => {
    const { data: session } = useSession();
    const [code, setCode] = useState("");
    const [csc, setCsc] = useState(null);
    const [activeStep, setActiveStep] = useState(1);

    const router = useRouter();
    const dispatch = useDispatch();
    const { cartTotalAmount } = useSelector((state) => state['cart']);
    const { ...item } = useSelector((state) => state["cart"]);
    const Id = uuidv4();

    const isFreeShipCoupon = code?.toUpperCase().trim() === "FREESHIP";
    const shippingPrice = (cartTotalAmount >= 500 || isFreeShipCoupon) ? 0 : 50;

    useEffect(() => {
        import('country-state-city').then((mod) => {
            setCsc(mod);
        });
        window.scrollTo(0, 0);
        
        const storedCoupon = localStorage.getItem('cartCouponCode');
        if (storedCoupon) {
            setCode(storedCoupon);
        }
    }, []);

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            zipCode: "",
            payment_method: "",
            additionalNotes: "",
        }
    });

    useEffect(() => {
        if (session?.user) {
            reset({
                firstName: session.user.name ? session.user.name.split(" ")[0] : "",
                lastName: session.user.name ? session.user.name.split(" ").slice(1).join(" ") : "",
                email: session.user.email || "",
                phone: "",
                address: "",
                city: "",
                country: "",
                zipCode: "",
                payment_method: "",
                additionalNotes: "",
            });
        }
    }, [session, reset]);

    const handleNextStep1 = async () => {
        const isValid = await trigger(["firstName", "lastName", "email", "phone"]);
        if (isValid) {
            setActiveStep(2);
        }
    };

    const handleNextStep2 = async () => {
        const isValid = await trigger(["address", "city", "country", "zipCode"]);
        if (isValid) {
            setActiveStep(3);
        }
    };

    const onchangeSubmit = async (values) => {
        if (cartTotalAmount < 50) {
            return notifyerror('Order Items must worth more than ₹50');
        }

        const shPrice = shippingPrice; // Dynamic shipping price
        const data = {
            invoice: Id,
            shippingPrice: shPrice,
            id: Id,
            products: item.cartItems,
            ...values,
            couponcode: code,
            cartTotalAmount,
            totalPrice: Number(cartTotalAmount + shPrice),
        };

        const { payment_method } = data;

        try {
            const requests = await OrderServices.addOrder(data, { "Authorization": `Bearer ${session?.["accessToken"]}` });

            switch (payment_method) {
                case 'RazorPay':
                    const response = await RazorpayPayment(requests, session);
                    notifySuccess(response["message"]);
                    router.push(`/order/${response["result"]._id}`);
                    dispatch(emptyCart());
                    break;

                case 'COD':
                    notifySuccess(requests.message);
                    router.push(`/order/${requests.result._id}`);
                    dispatch(emptyCart());
                    break;

                default:
                    notifyerror("Invalid payment method");
            }
        } catch (error) {
            notifyerror(error?.response?.data?.message || error?.message || "Something went wrong.");
        }
    };

    return (
        <div className="bg-background text-foreground transition-colors duration-200">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="py-10 lg:py-12 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/5 flex flex-col space-y-6">
                        
                        {/* Step 1: Personal Details */}
                        <div className="border border-border/40 rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-200">
                            <button
                                type="button"
                                onClick={() => activeStep > 1 && setActiveStep(1)}
                                className="w-full flex items-center justify-between p-5 text-left border-b border-border/20 hover:bg-muted/10 transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                                        activeStep === 1 
                                            ? "bg-primary text-primary-foreground" 
                                            : activeStep > 1 
                                                ? "bg-emerald-500 text-white" 
                                                : "bg-muted text-muted-foreground"
                                    }`}>
                                        {activeStep > 1 ? "✓" : "1"}
                                    </span>
                                    <span className="font-bold text-foreground text-sm uppercase tracking-wide">01. Personal Details</span>
                                </div>
                                {activeStep > 1 && (
                                    <span className="text-xs text-primary font-semibold hover:underline">Edit</span>
                                )}
                            </button>
                            
                            {activeStep === 1 && (
                                <div className="p-6 space-y-6 animate-fade-in">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Input label={"First Name"} type={"text"} additionalAttrs={{
                                                ...register("firstName"),
                                                placeholder: "John",
                                                autoComplete: "given-name",
                                            }} id={"firstName"} />
                                            {errors.firstName && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Input label={"Last Name"} type={"text"} additionalAttrs={{
                                                ...register("lastName"),
                                                placeholder: "Doe",
                                                autoComplete: "family-name",
                                            }} id={"lastName"} />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Input label={"Email"} type={"email"} additionalAttrs={{
                                                ...register("email"),
                                                placeholder: "john@example.com",
                                                autoComplete: "email",
                                            }} id={"email"} />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Input label={"Phone"} type={"text"} additionalAttrs={{
                                                ...register("phone"),
                                                placeholder: "1234567890",
                                                autoComplete: "tel",
                                            }} id={"phone"} />
                                            {errors.phone && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={handleNextStep1}
                                            className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg text-sm flex items-center space-x-2 transition-colors duration-200"
                                        >
                                            <span>Continue to Shipping</span>
                                            <IoArrowForward />
                                        </button>
                                    </div>
                                </div>
                            )}
                            
                            {activeStep > 1 && (
                                <div className="px-14 pb-5 text-sm text-muted-foreground font-medium">
                                    <p>{watch("firstName")} {watch("lastName")} • {watch("email")} • {watch("phone")}</p>
                                </div>
                            )}
                        </div>

                        {/* Step 2: Shipping Details */}
                        <div className="border border-border/40 rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-200">
                            <button
                                type="button"
                                onClick={() => activeStep > 2 && setActiveStep(2)}
                                className="w-full flex items-center justify-between p-5 text-left border-b border-border/20 hover:bg-muted/10 transition-colors"
                                disabled={activeStep < 2}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                                        activeStep === 2 
                                            ? "bg-primary text-primary-foreground" 
                                            : activeStep > 2 
                                                ? "bg-emerald-500 text-white" 
                                                : "bg-muted text-muted-foreground"
                                    }`}>
                                        {activeStep > 2 ? "✓" : "2"}
                                    </span>
                                    <span className="font-bold text-foreground text-sm uppercase tracking-wide">02. Shipping Details</span>
                                </div>
                                {activeStep > 2 && (
                                    <span className="text-xs text-primary font-semibold hover:underline">Edit</span>
                                )}
                            </button>
                            
                            {activeStep === 2 && (
                                <div className="p-6 space-y-6 animate-fade-in">
                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <Input label={"Shipping Address"} type={"text"} additionalAttrs={{
                                                ...register("address"),
                                                placeholder: "123 Main St",
                                                autoComplete: "street-address",
                                            }} id={"address"} />
                                            {errors.address && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.address.message}</p>
                                            )}
                                        </div>
                                        <div className="col-span-6 md:col-span-2">
                                            <Input label={"City"} type={"text"} additionalAttrs={{
                                                ...register("city"),
                                                placeholder: "New York",
                                                autoComplete: "address-level2",
                                            }} id={"city"} />
                                            {errors.city && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.city.message}</p>
                                            )}
                                        </div>
                                        <div className="col-span-6 md:col-span-2">
                                            <Select label={"Country"} additionalAttrs={{
                                                ...register("country"),
                                                autoComplete: "country-name",
                                            }} id={"country"} options={csc ? csc.Country.getAllCountries() : []} optionkeys={{ key: "name", value: "name" }} placeholder={"Country"} />
                                            {errors.country && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.country.message}</p>
                                            )}
                                        </div>
                                        <div className="col-span-6 md:col-span-2">
                                            <Input label={"Zip Code"} type={"text"} additionalAttrs={{
                                                ...register("zipCode"),
                                                placeholder: "10001",
                                                autoComplete: "postal-code",
                                            }} id={"zipCode"} />
                                            {errors.zipCode && (
                                                <p className="text-red-500 text-xs mt-1 font-medium">{errors.zipCode.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <button
                                            type="button"
                                            onClick={() => setActiveStep(1)}
                                            className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center space-x-1"
                                        >
                                            <span>Back</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNextStep2}
                                            className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg text-sm flex items-center space-x-2 transition-colors duration-200"
                                        >
                                            <span>Continue to Payment</span>
                                            <IoArrowForward />
                                        </button>
                                    </div>
                                </div>
                            )}
                            
                            {activeStep > 2 && (
                                <div className="px-14 pb-5 text-sm text-muted-foreground font-medium">
                                    <p>{watch("address")}, {watch("city")}, {watch("country")} - {watch("zipCode")}</p>
                                </div>
                            )}
                        </div>

                        {/* Step 3: Payment Details */}
                        <div className="border border-border/40 rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-200">
                            <div className="w-full flex items-center justify-between p-5 text-left border-b border-border/20 bg-muted/5">
                                <div className="flex items-center space-x-3">
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                                        activeStep === 3 
                                            ? "bg-primary text-primary-foreground" 
                                            : "bg-muted text-muted-foreground"
                                    }`}>
                                        3
                                    </span>
                                    <span className="font-bold text-foreground text-sm uppercase tracking-wide">03. Payment Details</span>
                                </div>
                            </div>
                            
                            {activeStep === 3 && (
                                <div className="p-6 space-y-6 animate-fade-in">
                                    <form onSubmit={handleSubmit(onchangeSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            
                                            {/* COD Option */}
                                            <div className="relative border border-border/40 hover:border-primary rounded-xl p-4 bg-muted/10 transition-all">
                                                <label className="cursor-pointer flex items-center justify-between h-full">
                                                    <div className="flex items-center space-x-3">
                                                        <MdWallet className="text-2xl text-muted-foreground" />
                                                        <div>
                                                            <h4 className="font-bold text-sm text-foreground">Cash On Delivery</h4>
                                                            <p className="text-xs text-muted-foreground mt-0.5">Pay with cash when delivered</p>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        value="COD"
                                                        {...register("payment_method")}
                                                        className="form-radio text-primary focus:ring-primary/20"
                                                    />
                                                </label>
                                            </div>

                                            {/* RazorPay Option */}
                                            <div className="relative border border-border/40 hover:border-primary rounded-xl p-4 bg-muted/10 transition-all">
                                                <label className="cursor-pointer flex items-center justify-between h-full">
                                                    <div className="flex items-center space-x-3">
                                                        <MdCreditCard className="text-2xl text-muted-foreground" />
                                                        <div>
                                                            <h4 className="font-bold text-sm text-foreground">RazorPay Secure</h4>
                                                            <p className="text-xs text-muted-foreground mt-0.5">Cards, NetBanking, UPI</p>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        value="RazorPay"
                                                        {...register("payment_method")}
                                                        className="form-radio text-primary focus:ring-primary/20"
                                                    />
                                                </label>
                                            </div>

                                        </div>
                                        
                                        {errors.payment_method && (
                                            <p className="text-red-500 text-xs font-semibold">{errors.payment_method.message}</p>
                                        )}
                                        
                                        {/* Action buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/40">
                                            <button
                                                type="button"
                                                onClick={() => setActiveStep(2)}
                                                className="bg-indigo-50 dark:bg-zinc-900 border border-border rounded-xl py-3.5 text-center text-sm font-bold text-foreground hover:bg-muted transition-colors flex justify-center items-center w-full sm:w-1/2 space-x-2"
                                            >
                                                <IoReturnUpBack className="text-lg" />
                                                <span>Back to Shipping</span>
                                            </button>
                                            
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl py-3.5 text-center text-sm transition-all flex justify-center items-center w-full sm:w-1/2 space-x-2 shadow-sm hover:shadow"
                                            >
                                                <span>Confirm Order</span>
                                                <IoArrowForward className="text-lg" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Order Summary Sidebar */}
                    <OrderSummary code={code} setCode={setCode} shippingPrice={shippingPrice} />

                </div>
            </div>
        </div>
    )
}

export default CheckoutBlock
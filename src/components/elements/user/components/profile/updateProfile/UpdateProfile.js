"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
import { IoArrowForward } from 'react-icons/io5';
import Input from '@/components/global/fields/input';
import ImageUpload from '@/components/global/fields/ImageUpload';

const profileSchema = z.object({
  username: z.string().min(1, 'Username is required!'),
  firstName: z.string().min(1, 'First Name is required!'),
  lastName: z.string().min(1, 'Last Name is required!'),
  phoneNumber: z.string().min(1, 'Phone number is required!'),
});

const UpdateProfile = ({ user }) => {
	const [selectedImage, setSelectedImage] = useState(user?.profilePicture || user?.image || "");
	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			username: user?.username || "",
			firstName: user?.firstName || "",
			lastName: user?.lastName || "",
			phoneNumber: user?.phoneNumber || "",
		}
	});

	const onSubmit = async (values) => {
		try {
			const reset = await CustomerServices.updateCustomer(
				{ "Authorization": `Bearer ${session["accessToken"]}` }, 
				{ profilePicture: selectedImage, ...values }
			);
			if (reset.status == "OK") {
				notifySuccess(reset.message)
			} else {
				notifyerror(reset.message)
			}
		} catch (error) {
			notifyerror(error?.message || "Profile update failed.")
		}
	};

	return (
		<div className="bg-background text-foreground transition-colors duration-200">
			<div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
				<div className="h-full relative col-span-2">
					<h2 className="text-xl font-bold text-foreground">Profile Info</h2>
				</div>
				
				<div className="h-full relative col-span-2">
					<ImageUpload imagePreview={selectedImage} setImagePreview={setSelectedImage} label={"Image"} />
				</div>
				
				<div className="h-full relative col-span-2 grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1">
					<form onSubmit={handleSubmit(onSubmit)} className="w-full col-span-full">
						<div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
							<div className="col-span-1">
								<Input label={"Email Address"} type={"email"} additionalAttrs={{
									value: session?.user?.email, 
									readOnly: true, 
									autoComplete: 'email', 
									disabled: true
								}} id={"email"} />
							</div>
							
							<div className="col-span-1">
								<Input label={"User Name"} type={"text"} additionalAttrs={{
									...register("username"), 
									autoComplete: "off",
									placeholder: "username", 
									required: true
								}} id={"username"} />
								{errors.username && (
									<div className="text-red-500 text-sm mt-1 font-semibold">{errors.username.message}</div>
								)}
							</div>
							
							<div className="col-span-1">
								<Input label={"First Name"} type={"text"} additionalAttrs={{
									...register("firstName"), 
									autoComplete: "off",
									placeholder: "John", 
									required: true
								}} id={"firstName"} />
								{errors.firstName && (
									<div className="text-red-500 text-sm mt-1 font-semibold">{errors.firstName.message}</div>
								)}
							</div>
							
							<div className="col-span-1">
								<Input label={"Last Name"} type={"text"} additionalAttrs={{
									...register("lastName"), 
									autoComplete: "off",
									placeholder: "Doe", 
									required: true
								}} id={"lastName"} />
								{errors.lastName && (
									<div className="text-red-500 text-sm mt-1 font-semibold">{errors.lastName.message}</div>
								)}
							</div>
							
							<div className="col-span-1">
								<Input label={"Phone Number"} type={"text"} additionalAttrs={{
									...register("phoneNumber"), 
									autoComplete: "off",
									placeholder: "1234567890", 
									required: true
								}} id={"phoneNumber"} />
								{errors.phoneNumber && (
									<div className="text-red-500 text-sm mt-1 font-semibold">{errors.phoneNumber.message}</div>
								)}
							</div>
						</div>
						
						<div className="col-span-full text-right mt-6">
							<button
								className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-bold text-center justify-center border-0 border-transparent rounded-lg bg-primary text-primary-foreground px-6 py-3.5 hover:bg-primary/90 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto shadow-sm hover:shadow"
								type="submit"
							>
								<span>Update Profile</span> <IoArrowForward className="ml-2" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;

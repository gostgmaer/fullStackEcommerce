"use client";
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
import { profileUpdateSchema } from '@/utils/validation/validation';
import { IoArrowForward } from 'react-icons/io5';
import Input from '@/components/global/fields/input';
import ImageUpload from '@/components/global/fields/ImageUpload';



const UpdateProfile = ({ user }) => {

	// const { user } = useSelector((state) => state.user);
	const [selectedImage, setSelectedImage] = useState(user["profilePicture"]);

	const { username,
		firstName,
		lastName,
		phoneNumber
	} = user
	const { data: session, status } = useSession();

	const handleSubmit = async (values) => {
		try {
			console.log(selectedImage);

			const reset = await CustomerServices.updateCustomer(
				{ "Authorization": `Bearer ${session["accessToken"]}` }, { profilePicture: selectedImage, ...values }
			);
			if (reset.status == "OK") {
				notifySuccess(reset.message)
			} else {
				notifyerror(reset.message)
			}
		} catch (error) {
			console.log(error);

			notifyerror(error?.["message"])


		}
	};


	const formik = useFormik({
		initialValues: {
			username: username,
			firstName: firstName,
			lastName: lastName,
			// gender,
			phoneNumber: phoneNumber
		},
		validationSchema: profileUpdateSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values, setSubmitting) => {

			handleSubmit(values);
		},
	});





	return (
		<div className="">
			<div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
				<div className=" h-full relative col-span-2">
					<h2>Profile Info</h2>

				</div>
				<div className=" h-full relative col-span-2">

					<ImageUpload imagePreview={selectedImage} setImagePreview={setSelectedImage} label={"Image"} />

				</div>
				<div className=" h-full relative col-span-2 grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1 ">

					<form onSubmit={formik.handleSubmit} className="w-full col-span-full">
						<div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">
							<div className="col-span-1">
								<Input label={"Email Address"} type={"email"} additionalAttrs={{
									value: session?.user?.email, readOnly: true, autoComplete: 'email', disabled: true
								}} classes={undefined} icon={undefined} id={"email"} />

							</div>
							<div className="col-span-1">
								<Input label={"User Name"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("username"), autoComplete: "false",
									placeholder: "User0001", required: true
								}} classes={undefined} icon={undefined} id={"username"} />
								{formik.errors.username && formik.touched.username && (
									<div className="text-red-500 text-sm">{formik.errors.username}</div>
								)}
							</div>
							<div className="col-span-1">
								<Input label={"First Name"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("firstName"), autoComplete: "false",
									placeholder: "John", required: true
								}} classes={undefined} icon={undefined} id={"firstName"} />
								{formik.errors.firstName && formik.touched.firstName && (
									<div className="text-red-500 text-sm">{formik.errors.firstName}</div>
								)}
							</div>
							<div className="col-span-1">
								<Input label={"Last Name"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("lastName"), autoComplete: "false",
									placeholder: "Sarkar", required: true
								}} classes={undefined} icon={undefined} id={"lastName"} />
								{formik.errors.lastName && formik.touched.lastName && (
									<div className="text-red-500 text-sm">{formik.errors.lastName}</div>
								)}
							</div>
							<div className="col-span-1">
								<Input label={"Phone Number"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("phoneNumber"), autoComplete: "false",
									placeholder: "1111111111", required: true
								}} classes={undefined} icon={undefined} id={"phoneNumber"} />
								{formik.errors.phoneNumber && formik.touched.phoneNumber && (
									<div className="text-red-500 text-sm">{formik?.errors?.["phoneNumber"]}</div>
								)}
							</div>
							{/* <div className="col-span-1">
								<Input label={"DOB"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("dateOfBirth"), autoComplete: "false",
									placeholder: "DOB", required: true
								}} classes={undefined} icon={undefined} id={"dateOfBirth"} />
								{formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
									<div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div>
								)}
							</div> */}
							{/* <div className="col-span-1">
								<Input label={"Gender"} type={"text"} additionalAttrs={{
									...formik.getFieldProps("gender"), autoComplete: "false",
									placeholder: "M", required: true
								}} classes={undefined} icon={undefined} id={"gender"} />
								{formik.errors.gender && formik.touched.gender && (
									<div className="text-red-500 text-sm">{formik.errors.gender}</div>
								)}
							</div> */}


						</div>
						<div className="col-span-full text-right mt-5">
							<button
								className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto disabled:bg-gray-500"
								type="submit"
								disabled={!formik.isValid}
							>
								<span>Change Password</span> <IoArrowForward />
							</button>
						</div>

					</form>

				</div>

			</div>
		</div>
	);
};

export default UpdateProfile;

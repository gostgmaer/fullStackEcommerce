import { FiLock, FiMail, FiUser } from "react-icons/fi";

//internal import

import { registerValidationSchema } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { post } from "@/helper/network";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import Input from "@/components/global/fields/input";

const Register = ({ setShowResetPassword, setModalOpen }) => {
  // const { handleSubmit, submitHandler, register, errors, loading } =
  //   useLoginSubmit(setModalOpen);


  const handleSubmit = async (values) => {
    try {
      const res = await post("/contact", values);
      if (res) {
        return res
      }
    } catch (error) {
      notifyerror("Error")
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",

    },
    validationSchema: registerValidationSchema,
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

      if (res.statusCode === 200) {

        notifySuccess('Login Success...')
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
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Signing Up</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Create an account with email
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">

          <div className="col-span-full ">
            <Input label={"First name"} type={"text"} additionalAttrs={{
              ...formik.getFieldProps("firstName"),
              placeholder: "First name", required: true
            }} classes={undefined} icon={undefined} id={"firstName"}  />


            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="col-span-full ">
            <Input label={"Last name"} type={"text"} additionalAttrs={{
              ...formik.getFieldProps("lastName"),
              placeholder: "Last name", required: true
            }} classes={undefined} icon={undefined} id={"lastName"}  />


            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            )}
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
            <Input label={"Password"} type={"password"} additionalAttrs={{
              ...formik.getFieldProps("password"),
              placeholder: "********", required: true
            }} classes={undefined} icon={undefined} id={"password"}  />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>
          <div className="col-span-full">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <button
            className=" disabled:text-gray-400 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            <span>{formik.isSubmitting ? "" : 'Register'}</span>{" "}

          </button>
        </div>
      </form>
    </>
  );
};

export default Register;

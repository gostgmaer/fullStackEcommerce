import { FiLock, FiMail } from "react-icons/fi";

import Input from "@/components/global/fields/input";
import { post } from "@/helper/network";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/validation/validation";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Login = ({ setShowResetPassword, setModalOpen }) => {


  const handleSubmit = async (values) => {
    try {
      const res = await post("/contact", values);
      if (res) {
        return res
      }
    } catch (error) {
      notifyerror("Error", 300)
    }
  };

  const formik = useFormik({
    initialValues: {
    
      password: "",
      email: ""
      
    },
    validationSchema: loginValidationSchema,
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
        <h2 className="text-3xl font-bold font-serif">Login</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Login with your email and password
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">

          <div className="col-span-full ">
            <Input label={"Email"} type={"text"} additionalAttrs={{
              ...formik.getFieldProps("email"),
              placeholder: "Email", required: true
            }} classes={undefined} icon={undefined} id={"email"}  />


            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="col-span-full ">
            <Input label={"Password"} type={"text"} additionalAttrs={{
              ...formik.getFieldProps("password"),
              placeholder: "Password", required: true
            }} classes={undefined} icon={undefined} id={"password"}  />


            {formik.touched.password && formik.errors.password && (
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
            <span>{formik.isSubmitting ? "Submitting..." : 'Login'}</span>{" "}

          </button>

          <div className="before:content-[' '] relative  mt-0.5 flex items-center  before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-gray-100 mb-5 2xl:mb-7 justify-center">
              <span className="relative z-10 inline-block bg-white text-sm font-medium text-gray-500 dark:bg-gray-50 2xl:text-base p-2.5">
                Or
              </span>
            </div>
          <div className="col-span-full">
              <button
                className="rizzui-button inline-flex font-medium items-center text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 h-11 w-full"
                type="button"
                onClick={async () => await signIn("google")}
              >
                <FaGoogle className="h-4 w-4 mr-1 text-yellow-400" />
                <span className="truncate">Signin with Google</span>
              </button>
              </div>
              <div className="col-span-full">
                
              <button
                className="rizzui-button inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue-600 hover:enabled:bg-blue-dark focus-visible:ring-blue/30 text-white h-11 w-full"
                type="button"
                onClick={async () => await signIn("github")}
              >
                <FaFacebook className="h-4 w-4 mr-1" />
                <span className="truncate">Signin with Github</span>
              </button>
              </div>

        </div>
      </form>

   
    </>
  );
};

export default Login;

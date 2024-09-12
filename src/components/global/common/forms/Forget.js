"use client";

import { forgetPasswordValidation } from "@/utils/validation/validation";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import Input from "../../fields/input";
import { post } from "@/helper/network";
import { notifyerror, notifySuccess } from "@/utils/notify/notice";
import CustomerServices from "@/helper/network/services/CustomerServices";
const ForgetForm = () => {
  // const { handleLoginAuth, user, userId } = useAuthContext();
  // const [axios, spinner] = useAxios();
  // const [error, setError] = useState(undefined);
  const router = useRouter();


  const handleSubmit = async (values) => {
    try {
      const res = await CustomerServices.forgetPassword( values);
     
      if (res) {
        notifySuccess(res.message)
        return res
      }
    } catch (error) {
      ///console.log(error);
      notifyerror(error.message, 300)
    }
  };

  const formik = useFormik({
    initialValues: {

      email: ""

    },
    validationSchema: forgetPasswordValidation,
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

      
        setSubmitting(false)


      } else {
        setSubmitting(false)
        notifyerror(res.message)
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5 text-black">

        <div className="col-span-full ">
          <Input label={"Email"} type={"text"} additionalAttrs={{
            ...formik.getFieldProps("email"),
            placeholder: "Email", required: true
          }} classes={undefined} icon={undefined} id={"email"} />


          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>



        <button
          className=" disabled:text-gray-500 disabled:bg-gray-300 col-span-2 inline-flex font-medium items-center bg-gray-700 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0  text-white justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-5 py-2 text-base h-12 rounded-md border border-transparent focus-visible:ring-offset-2 bg-blue hover:enabled:bg-gray-900 focus-visible:ring-blue/30  w-full"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <span>{formik.isSubmitting ? "Submitting....." : 'Recover password'}</span>

        </button>
      </div>
    </form>
  );
};

export default ForgetForm;

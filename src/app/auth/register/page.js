
import RegisterForm from "@/components/global/common/forms/register";
import Layout from "@/components/global/layout/Layout";
import Link from "next/link";

const Register = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col justify-center  sm:p-5 lg:p-8">
        <div className="mx-auto text-left justify-center  w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex flex-col items-center mb-8">

            <h2 className="rizzui-title-h2  text-center text-[22px] font-bold leading-snug md:text-2xl md:!leading-normal  lg:text-3xl">
              Signing Up!
            </h2>
            <p className=" text-gray-700"> Create an account by sign up with provider..</p>
          </div>
     

          <RegisterForm />
          <p className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
            Already have an account?
            <Link
              className="font-semibold text-gray-700 transition-colors hover:text-primary ml-1"
              href="/auth/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

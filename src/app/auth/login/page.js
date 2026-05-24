
import Link from "next/link";
import Layout from "@/components/global/layout/Layout";
import LoginForm from "@/components/global/common/forms/login";
import { cookies, headers } from "next/headers";
// import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Ecommerce | Login",
  description: "Created by kishor sarkar",
};

const Index = async (params) => {
//  const headersList = await headers()
    
//   }));
  

  // cookies
  



  return (
    <>
      <Layout>
        <div className="flex w-full flex-col justify-center min-h-[70vh] sm:p-5 lg:p-8 bg-background">
          <div className="mx-auto text-left justify-center w-full max-w-lg px-6 py-10 sm:p-10 overflow-hidden align-middle transition-all transform bg-card border border-border/50 shadow-premium rounded-2xl">
            <div className="flex flex-col items-center mb-8">

              <h2 className="text-center text-[22px] font-bold leading-snug md:text-2xl md:!leading-normal lg:text-3xl font-serif text-foreground">
                Welcome Back!
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Sign in with your credentials.</p>
            </div>


            <LoginForm />
            <p className="mt-6 text-center text-sm leading-loose text-muted-foreground md:mt-7 lg:mt-9">
              Don&apos;t have an account?
              <Link
                className="font-semibold text-foreground transition-colors hover:text-primary ml-1"
                href="/auth/register"
              >
                Sign Up
              </Link>
            </p>
          </div>

        </div>
      </Layout>
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>

  );
};

export default Index;

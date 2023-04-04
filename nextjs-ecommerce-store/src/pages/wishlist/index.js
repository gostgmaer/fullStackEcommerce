import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";
import { appBaseUrl } from "@/utils/config";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

const Index = () => {

  const { protectedRouteCheck, pageLoading } = useAuthContext();
  useEffect(() => {
    protectedRouteCheck();
  }, []);

  return (
    <Userlayout>
      <div>wishlist</div>
    </Userlayout>
  );
};

export default Index;



export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}${ctx.resolvedUrl}`,
        parmanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session,
    },
  };
};

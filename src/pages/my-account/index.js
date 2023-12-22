import Userlayout from "@/layout/user";
import { getSession } from "next-auth/react";

const Index = () => {
  return (
    <Userlayout>
     <div></div>
    </Userlayout>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }else{
    return {
      redirect: {
        destination: `/my-account/${session.user["id"]}`,
        permanent: false,
      },
    };
  }


}



import Layout from "@/layout";
import Userlayout from "@/layout/user";
import { appBaseUrl } from "@/utils/config";
import { getSession } from "next-auth/react";

const Dashboard = ({ data }) => {
  return (
    <Userlayout>
      <div>This is a Dashboard page</div>
      <span>{data}</span>
    </Userlayout>
  );
};

export default Dashboard;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}/dashboard`,
        parmanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 pro blog" : "list of free blogs",
    },
  };
};
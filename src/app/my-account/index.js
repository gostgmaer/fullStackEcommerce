
import { getSession } from "next-auth/react";

const Index = () => {
  return (
    <div></div>
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
  } else {
    return {
      redirect: {
        destination: `/my-account/${session.user["id"]}`,
        permanent: false,
      },
    };
  }
}



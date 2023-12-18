import Userlayout from "@/layout/user";

const Index = () => {
  return (
    <Userlayout>
     <div></div>
    </Userlayout>
  );
};

export default Index;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/signin',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user: session.user },
//   };
// }



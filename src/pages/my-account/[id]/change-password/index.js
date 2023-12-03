import ChangePassword from "@/components/forms/auth/changePassword";
import Userlayout from "@/layout/user";

import { Person, ShoppingBag } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Orders = () => {
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        width={'100%'}
        gap={3}
      >
        <Typography
          fontWeight={600}
          width={"100%"}
          fontSize={20}
          sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
        >
        
        Changed Password
        </Typography>
        <ChangePassword/>
      </Box>
    </Userlayout>
  );
};

export default Orders;

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   // console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: `/auth/signin?callbackUrl=${appBaseUrl}/order`,
//         parmanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "List of 100 pro blog" : "list of free blogs",
//     },
//   };
// };

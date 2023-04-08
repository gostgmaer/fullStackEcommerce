import AddressAddForm from "@/components/Usermodule/AddressAddForm";
import Addresslist from "@/components/Usermodule/Addresslist";
import { useGlobalContext } from "@/context/globalContext";
import MuiModal from "@/layout/modal";
import Userlayout from "@/layout/user";
import { invokeExternalAPI } from "@/lib/http";
import { appBaseUrl } from "@/utils/config";
import { Close, LocationOn, Person, ShoppingBag } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { getSession } from "next-auth/react";

const Address = ({ data }) => {
  console.log(data);
  const { openModal, setOpenModal } = useGlobalContext();
  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
          >
            <LocationOn color="error" />
            <span>My Address</span>
          </Typography>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            color="error"
            onClick={() => setOpenModal(true)}
          >
            Add New Address
          </Button>
        </Stack>
        <MuiModal
          heading={{ title: "Please add a Address", icon: <Close /> }}
          Content=<AddressAddForm />
          classes={undefined}
          maxWidth={"sm"}
        />
        <Addresslist addresses={data?.data} />
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination count={10} variant="outlined" />
        </Box>
      </Box>
    </Userlayout>
  );
};

export default Address;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  console.log(session);

  const param = {
    "filters[user][$eq]": session.user.name,
  };
  const data = await invokeExternalAPI("addresses", "get", {}, {}, param);

  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}/address`,
        parmanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data
    },
  };
};

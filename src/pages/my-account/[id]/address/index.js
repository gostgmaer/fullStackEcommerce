import AddressAddForm from "@/components/Usermodule/AddressAddForm";
import Addresslist from "@/components/Usermodule/Addresslist";
import { baseurl } from "@/config/setting";
import { useGlobalContext } from "@/context/globalContext";
import MuiModal from "@/layout/modal";
import Userlayout from "@/layout/user";
import { fetcher, useFetcher, useGetFetcher } from "@/lib/helper";
import { get } from "@/lib/network/http";

import { Close, LocationOn } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Address = ({  }) => {
  // const session = useSession();

  const [openModal, setOpenModal] = useState(false);



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
          Content=<AddressAddForm
            address={undefined}
            setOpenModal={setOpenModal}
          />
          classes={undefined}
          maxWidth={"sm"}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Addresslist  />
    
      </Box>
    </Userlayout>
  );
};

export default Address;

// export const getServerSideProps = async (ctx) => {
//   const { id } = ctx.params;
//   console.log(id);
//   const resData = await fetch(`${baseurl}/address`);
//   const data = await resData.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

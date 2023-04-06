import { orders } from "@/assets/mock/moreData";
import App from "@/components/Usermodule/OrderSteaper";
import Orderlist from "@/components/Usermodule/Orderlist";
import Userlayout from "@/layout/user";
import { appBaseUrl } from "@/utils/config";
import {
  DeliveryDining,
  Inventory,
  Inventory2,
  LocalShipping,
  Person,
  ShoppingBag,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  colors,
  makeStyles,
} from "@mui/material";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const OrderDetails = () => {
  const route = useRouter();
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
            <ShoppingBag color="error" />
            <span>Order Details</span>
          </Typography>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            color="error"
            onClick={() => route.push(`/`)}
          >
            Order Again
          </Button>
        </Stack>

        <OrderSteaper />
        <OrderedItems />
      </Box>
    </Userlayout>
  );
};

export default OrderDetails;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${appBaseUrl}/order`,
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

const OrderSteaper = (params) => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {
      id: 1,
      stepicon: (
        <IconButton>
          <Inventory sx={{ width: "75px", height: "75px", p: 1 }} />
        </IconButton>
      ),
      text: "Nunns",
    },
    {
      id: 2,
      stepicon: (
        <IconButton>
          <LocalShipping sx={{ width: "75px", height: "75px", p: 1 }} />
        </IconButton>
      ),
      text: "Snoddon",
    },
    {
      id: 3,
      stepicon: (
        <IconButton>
          <Inventory2 sx={{ width: "75px", height: "75px", p: 1 }} />
        </IconButton>
      ),
      text: "Helks",
    },
  ];

  return (
    <Paper sx={{ width: "100%", py: 8, borderRadius: "10px" }}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label.id}>
              <StepLabel>{label.stepicon}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: "100%", textAlign: "end", px: 14 }}>
        <Typography
          sx={{
            p: "5px 15px",
            backgroundColor: colors.red[50],
            color: colors.red[400],
            borderRadius: "15px",
            fontSize: "14px",
          }}
          variant="caption"
        >
          Estimated Delivery Date <strong>4th October</strong>
        </Typography>
      </Box>
    </Paper>
  );
};

const OrderedItems = (params) => {
  const Item = (params) => {
    return (
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <Image
            width={50}
            height={50}
            alt="product"
            src="/assets/images/nike-black.png"
          ></Image>
          <Typography fontSize={"14px"}  sx={{
            display: "flex",
            gap: 0,
            alignItems: "center",
            flexDirection: "column",
          }}>
            Budi 2017
            <span style={{ fontWeight: 500 }}>$226.00 x 4</span>
          </Typography>
        </Box>
        <Typography fontSize={"14px"}>Product properties: Black, L</Typography>
        <Button variant="text">Write a Review</Button>
      </Stack>
    );
  };

  return (
    <Paper sx={{ width: "100%", borderRadius: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#F3F5F9",
          display: "flex",
          justifyContent: "space-between",
          p: "10px 10px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Typography fontSize={"14px"} color={colors.grey[700]}>
            Order ID:{" "}
            <span style={{ fontWeight: 600 }}>
              753deee0-56b3-40a7-85d4-346b3647c8f8
            </span>
          </Typography>
          <Typography fontSize={"14px"} color={colors.grey[700]}>
            Placed on: <span style={{ fontWeight: 600 }}>14 Dec, 2020</span>
          </Typography>
        </Stack>
        <Typography fontSize={"14px"}>
          Delivered on: <span style={{ fontWeight: 500 }}>06 Apr, 2023</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap:2,
          p: "10px 10px",
        }}
      >
        {orders[0].items.map((data) => (
          <Item key={data.id}></Item>
        ))}
      </Box>
    </Paper>
  );
};

const AddressAndSummery = (params) => {
  
}
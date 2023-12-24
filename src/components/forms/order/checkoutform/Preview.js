import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";

import { useSelector } from "react-redux";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review({ formik }) {
  const cartData = useSelector((state) => state["data"].cartItems);

  return (
    <Fragment>
      <List disablePadding>
        {cartData.map((product, index) => (
          <PreviewProductcard key={index} data={product} />
        ))}
      </List>
      <Grid container spacing={2}>
        {ShippingAddress()}
        {BillingAddress()}
        {PaymentDetails()}
      </Grid>
    </Fragment>
  );

  function ShippingAddress() {
    return (
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Shipping Address
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses.join(", ")}</Typography>
      </Grid>
    );
  }

  function BillingAddress() {
    return (
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Billing Address
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses.join(", ")}</Typography>
      </Grid>
    );
  }

  function PaymentDetails() {
    return (
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Payment details
        </Typography>
        <Grid container>
          {payments.map((payment) => (
            <Fragment key={payment.name}>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.detail}</Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    );
  }
}

const PreviewProductcard = ({ data }) => {
 // console.log(data);
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: 1,
        "&.MuiPaper-root:hover": {
          backgroundColor: colors.blue[50],
        },
      }}
    >
      <Box display={"flex"} gap={1} alignItems={"flex-start"} width={"100%"}>
        <Stack gap={0.5} alignItems={"flex-start"} flex={0.5}>
          <Image
            className=" w-20 h-20 object-contain"
            width={100}
            height={100}
            // style={{ objectFit: "contain" }}
            alt={data?.["product"]["images"]?.[0]?.["name"]}
            src={data?.["product"]["images"]?.[0]?.["url"]}
          ></Image>
        </Stack>

        <Stack gap={0.5} alignItems={"flex-start"} flex={2}>
          <Typography>{data?.["product"]["title"]}</Typography>
          <Typography className="flex gap-1">
            <span>${data["product"].price.toFixed(2)}</span> *
            <span>{data["quantity"]}</span>
          </Typography>
        </Stack>
        <Stack
          fontSize={14}
          direction={"row"}
          textAlign={"right"}
          gap={20}
          flex={0.8}
          className="text-right"
        >
          <Typography color={colors.red[500]} width={"100%"}>
            <span>Subtotal: </span> <span>$ {data["subtotal"].toFixed(2)}</span>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

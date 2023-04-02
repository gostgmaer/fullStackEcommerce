import {
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import PreviewProductcard from "./PreviewProductCard";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  return (
    <Fragment>
     
      <List disablePadding>
        {products.map((product) => (
          <PreviewProductcard />
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
    return <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Shipping Address
      </Typography>
      <Typography gutterBottom>John Smith</Typography>
      <Typography gutterBottom>{addresses.join(", ")}</Typography>
    </Grid>;
  }

  function BillingAddress() {
    return <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Billing Address
      </Typography>
      <Typography gutterBottom>John Smith</Typography>
      <Typography gutterBottom>{addresses.join(", ")}</Typography>
    </Grid>;
  }

  function PaymentDetails() {
    return <Grid item container direction="column" xs={12} sm={6}>
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
    </Grid>;
  }
}



const ShippingAddressblock = (params) => {
  
}


const Billingaddressblock = (params) => {
  
}
import { addressData, orders } from "@/assets/mock/moreData";
import { ArrowForward, ArrowRight, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import moment from "moment/moment";
import { useRouter } from "next/router";
const Addresslist = ({addresses}) => {
  console.log(addresses);
  return (
    <Box width={"100%"}>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          width: "100%",
          fontSize: 2,
          py: 1,
          px: 1,
        }}
      >
        {addresses.data.map((item) => (
          <AddressItem key={item.id} data={item.attributes} />
        ))}
      </Stack>
    </Box>
  );
};

export default Addresslist;

const AddressItem = ({ data }) => {
  const router = useRouter();
  // console.log(data);

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",

        py: 1,
        px: 2,
      }}
    >
      <Typography variant="body2" sx={{ flex: 0.5 }}>
        {data.name}
      </Typography>
      <Typography sx={{ flex: 1.5 }} variant="body2">
       {data.city}, {data.country}
      </Typography>
      <Typography sx={{ flex: 0.5 }} variant="body2">
        {data.pincode}
      </Typography>
      <Typography sx={{ flex: 0.5 }} variant="body2">
        {data.phone}
      </Typography>


      <Stack
        sx={{ flex: 0.5 }}
        direction={"row"}
        justifyContent={"flex-end"}
        gap={1}
      >
        <IconButton onClick={() => router.push(`/address/${data.uuid}`)}>
          <Edit />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </Stack>
    </Paper>
  );
};




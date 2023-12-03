import { addressData, orders } from "@/assets/mock/moreData";
import MuiModal from "@/layout/modal";
import {
  ArrowForward,
  ArrowRight,
  Close,
  Delete,
  Edit,
  TroubleshootSharp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import moment from "moment/moment";
import { useRouter } from "next/router";
import AddressAddForm from "./AddressAddForm";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/network/http";
import { useAuthContext } from "@/context/AuthContext";
import { Country } from "country-state-city";
import { useAxios } from "@/lib/network/interceptors";
const Addresslist = ({}) => {
  const { userId } = useAuthContext();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [address, setAddress] = useState(undefined);
  const [axios, spinner] = useAxios();
  const fetchAddress = async (params) => {
    const query = {
      filter: JSON.stringify({
        user: userId?.user_id,
      }),
      page: page,
      limit: limit,
      sort: undefined,
    };

    const data = await get("/address", query);
    console.log(data);
    setAddress(data);
  };

  useEffect(() => {
    fetchAddress();
  }, [limit, page]);
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
        {address ? (
          address.results?.map((item) => (
            <AddressItem key={item._id} data={item} alldata={fetchAddress} />
          ))
        ) : (
          <div>NO address Saved</div>
        )}
      </Stack>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          gap: 0.5,
          alignItems: "center",
          justifyContent: "space-between",
          mt:"10px",
          p: "8px",
        }}
      >
        <div>
          <span>Total:{address?.total} </span>
        </div>
        <Pagination
          page={page}
          onChange={(event, value) => setPage(value)}
          count={address?.total/limit}
          variant="outlined"
        />
      </Box>
      {spinner}
    </Box>
  );
};

export default Addresslist;

const AddressItem = ({ data, alldata }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    const request = await del("/address", data._id);
    if (request["status"] === "OK") {
      alldata();
    }
  };

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
        {data.addressname}
      </Typography>
      <Typography sx={{ flex: 1.5 }} variant="body2">
        {data.apartment} , {data.street} , {data.city}, {data.state},{" "}
        {Country.getCountryByCode(data.country).name} - {data.postalCode}
      </Typography>
      <Typography sx={{ flex: 0.5 }} variant="body2">
        {data.firstName} , {data.lastName}
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
        <IconButton onClick={() => setOpen(true)}>
          <Edit />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Stack>
      <MuiModal
        heading={{ title: "Please Update a Address", icon: <Close /> }}
        Content=<AddressAddForm address={data} setOpenModal={setOpen} />
        classes={undefined}
        maxWidth={"sm"}
        openModal={open}
        setOpenModal={setOpen}
      />
    </Paper>
  );
};

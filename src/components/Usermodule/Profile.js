import { Box, Paper, Stack, Typography, colors } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const UserCard = ({ data }) => {

  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "45%",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            width={75}
            height={75}
            style={{ borderRadius: "50%" }}
            src={data.profilePicture}
            className=" w-20 h-20"
            alt=""
          />
          <Stack>
            <strong>
              {data.firstName} {data.lastName}
            </strong>
            <span>Balance: $5421</span>
          </Stack>
        </Box>
        <Link href={`/my-account/${data._id}/change-password`} >
       Change Password
        </Link>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Total order
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 14,
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Delivared
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          fontSize: 14,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Cancel
      </Paper>
    </Stack>
  );
};

export const ProfileDetails = ({ data }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          py: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          First Name: <span>{data.firstName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Last Name: <span>{data.lastName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Email: <span>{data.email}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Phone: <span>{data.phoneNumber}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Date of Birth:{" "}
          <span>{moment(data.dateOfBirth).format("YYYY-MM-DD")}</span>
        </Typography>
      </Paper>
    </Stack>
  );
};

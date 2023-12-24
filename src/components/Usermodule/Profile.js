import { Box, Paper, Stack, Typography, colors } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const UserCard = ({ data }) => {

  //console.log(data);
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} className="h-32">
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "65%",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            width={75}
            height={100}
            style={{ borderRadius: "50%" }}
            src={data.profilePicture}
            className=" w-20 h-20"
            alt=""
          />
          <Stack>
            <strong className="text-3xl">
              {data.firstName} {data.lastName}
            </strong>
            <span className="font-semibold">{data.username}</span>
          </Stack>
        </Box>
       <div className=" flex flex-col gap-2">
       <Link className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 text-center px-3 rounded" href={`/my-account/${data._id}/change-password`} >
       Change Password
        </Link>
        <Link className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 text-center px-3 rounded" href={`/my-account/${data._id}/profile/edit`} >
       Update Profile
        </Link>
       </div>
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
     
    </Stack>
  );
};

export const ProfileDetails = ({ data }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} className="h-24">
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

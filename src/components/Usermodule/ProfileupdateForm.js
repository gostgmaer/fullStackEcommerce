import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageUpload from "../global/fields/ImageUpload";
import { get, patch } from "@/lib/network/http";
import { useParams } from "next/navigation";
import { useFormik } from "formik";

const ProfileupdateForm = () => {
  const [profileData, setProfileData] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  const getUserData = async () => {
    const request = await get(`/user/auth/profile`);
    setUserData(request.result);
   // console.log(request.result);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const params = useParams();

  const formik = useFormik({
    initialValues: userData,

    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission logic here

      handleSubmit(values);
      setSubmitting(false);
    },
  });

  const [image, setImage] = useState(userData?.profilePicture);

  const handleSubmit = async (values) => {
    const body = {
      ...values,
      profilePicture: image,
    };
    const request = await patch("/users", body, userData._id);
   // console.log(request);
  };
  return (
    <Box width={"100%"}>
      <Paper
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          py: 1,
          gap: 1,
          width: "100%",
          p: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            m: "0!important",
            gap: 3,
            width: "100%",
            p: 1,
          }}
          alignItems="center"
          spacing={2}
        >
          <TextField
            id="email"
            name="email"
            label="Email Address"
            className="border-none  outline-none rounded-md w-full focus:outline-none focus:ring "
            size="small"
            fullWidth
            {...formik.getFieldProps("email")}
            disabled
            type="email"
            variant="outlined"
          />
          <TextField
            id="username"
            name="username"
            label="User Name"
            {...formik.getFieldProps("username")}
            size="small"
            fullWidth
            // sx={{maxWidth:'40%'}}
            disabled
            type="email"
            variant="outlined"
          />
        </Stack>
        <Grid
          container
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
            "&>.MuiGrid-item": {
              p: 0,

              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
          }}
          spacing={2}
          columns={17}
        >
          <Grid item xs={8}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              {...formik.getFieldProps("firstName")}
              fullWidth
              size="small"
              variant="outlined"
            />

            <TextField
              id="dateOfBirth"
              label="Date of birth"
              name="dateOfBirth"
              {...formik.getFieldProps("dateOfBirth")}
              type="date"
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="lastName"
              name="lastName"
              {...formik.getFieldProps("lastName")}
              fullWidth
              size="small"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              size="small"
              name="phoneNumber"
              fullWidth
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
          }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <ImageUpload
            imagePreview={image}
            setImagePreview={setImage}
            label={"Upload Profile Picture"}
          />
        </Stack>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
          }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <button type="submit" className="bg-red-500 px-5 py-2">
            Save Changes
          </button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ProfileupdateForm;

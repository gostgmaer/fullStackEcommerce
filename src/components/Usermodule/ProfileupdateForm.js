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
import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import { profileValidationSchema } from "@/utils/validation/validation";
import { notifySuccess } from "@/lib/notify/notification";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  contactNumber: "",
  profilePicture: "",
  phoneNumber: "",
  dateOfBirth: "",
};

const ProfileupdateForm = ({ userData }) => {
  const [user, setUser] = useState(undefined)
  const params = useParams();
  const route = useRouter();
  const formik = useFormik({
    initialValues: userData ? userData : initialValues,
    validationSchema: profileValidationSchema,

    onSubmit: (values, { setSubmitting }) => {
      saveSubmit();
      setSubmitting(false);
    },
  });

  const [image, setImage] = useState(userData?.profilePicture);

  const saveSubmit = async () => {
    console.log(formik.values);
    const body = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      phoneNumber: formik.values.phoneNumber,
      dateOfBirth: formik.values.dateOfBirth,
      profilePicture: image,
    };
    const request = await patch("/users", body, params.id);
    if (request["status"] === "OK") {
      // route.push(`/my-account/${params.id}/profile`);
      notifySuccess(request["message"],3000)
    }
  };

  const getprofile = async () => {
    const request = await get('/user/auth/profile')
    setImage(request.result.profilePicture)
    setUser(request.result)
    console.log(request);
  }
  useEffect(() => {

    // getprofile()

  }, []);

  return (
    <Box width={"100%"}>
      <Box
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
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileupdateForm;

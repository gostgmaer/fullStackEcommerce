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
import React, { useState } from "react";
import ImageUpload from "../global/fields/ImageUpload";
import { useAuthContext } from "@/context/AuthContext";
import moment from "moment";
import { patch } from "@/lib/network/http";

const ProfileupdateForm = () => {
  const { user, userId } = useAuthContext();

  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    username: user?.username,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    dateOfBirth: user?.dateOfBirth,
  });
  const [image, setImage] = useState(user?.profilePicture);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const body = {
      ...formData,profilePicture:image
    }
    const req= await patch('/users',body,userId?.user_id)
    console.log(req);
  }
  return (
    <Box width={"100%"}>
      <Paper
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
            value={formData.email}
            onChange={handleChange}
            disabled
            type="email"
            variant="outlined"
          />
          <TextField
            id="username"
            name="username"
            label="User Name"
            value={formData.username}
            onChange={handleChange}
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
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              size="small"
              variant="outlined"
            />

            <TextField
              id="dateOfBirth"
              label="Date of birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              size="small"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
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
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            color="error"
            className="bg-red-500"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ProfileupdateForm;

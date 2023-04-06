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
import React from "react";

const ProfileupdateForm = () => {
  return (
    <Box width={"100%"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          py: 2,
          gap: 2.5,
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
            gap: 2.5,
            width: "100%",
            p: 1,
          }}
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained" sx={{textTransform:'capitalize'}} color="error" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
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
              id="firstname"
              name="firstname"
              label="First Name"
              fullWidth
              size="small"
              variant="outlined"
            />
            <TextField
              id="emailaddress"
              name="emailaddress"
              label="Email Address"
              size="small"
              fullWidth
              type="email"
              variant="outlined"
            />
            <TextField
              id="dateof birth"
              label="Date of birth"
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
              id="lastname"
              name="lastname"
              fullWidth
              size="small"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="phonenumber"
              size="small"
              name="phonenumber"
              fullWidth
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Stack sx={{
            alignItems: "center",
            justifyContent: "space-between",
            m: "0!important",
            gap: 2.5,
            width: "100%",
            p: 1,
           
          }} direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" sx={{textTransform:'capitalize'}} color="error">
            Save Changes
          </Button>
        </Stack>
      </Paper>{" "}
    </Box>
  );
};

export default ProfileupdateForm;

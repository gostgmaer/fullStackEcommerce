import { countries } from "@/assets/mock/staticData";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function AddressForm() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4.5}>
      <ShippingAddress></ShippingAddress>
      <Billingaddress></Billingaddress>
    </Box>
  );
}

const ShippingAddress = (params) => {
  return (
    <Paper variant='outlined' sx={{ p: "1.5rem",boxShadow:'rgba(3, 0, 71, 0.09) 0px 1px 3px' }}>
    <Stack gap={2}>
    <Typography variant="h6" mb={0} gutterBottom>
       Shipping Address
     </Typography>
    
     <Grid container gap={5} justifyContent={'space-between'} spacing={3} columns={12.6}>
       <Grid
         item
         xs={12}
         sm={6}
         sx={{ display: "flex", flexDirection: "column" }}
         gap={2}
       >
         <TextField
           required
           id="firstName"
           name="firstName"
           label="First name"
           size="small"
           fullWidth
           autoComplete="given-name"
           variant="outlined"
         />
         <TextField
           required
           id="emailaddress"
           name="emailaddress"
           label="Email Address"
           placeholder="info@mail.com"
           size="small"
           fullWidth
           autoComplete="email-address"
           variant="outlined"
         />
         <TextField
           required
           id="company"
           name="company"
           label="Company"
           size="small"
           fullWidth
           autoComplete="company-name"
           variant="outlined"
         />
         <TextField
           required
           id="address1"
           name="address1"
           label="Address 1"
           size="small"
           fullWidth
           autoComplete="address-name"
           variant="outlined"
         />
         <Autocomplete
           id="country-select-autocomplete"
           size="small"
           options={countries}
           autoHighlight
           getOptionLabel={(option) => option.label}
           renderOption={(props, option) => (
             <Box component="li" {...props}>
               {option.label}
             </Box>
           )}
           renderInput={(params) => (
             <TextField
               {...params}
               required
               label="Country"
               id="countru"
               name="country"
               inputProps={{
                 ...params.inputProps,
                 autoComplete: "new-country", // disable autocomplete and autofill
               }}
             />
           )}
         />

       
       </Grid>

       <Grid
         item
         xs={12}
         sm={6}
         sx={{ display: "flex", flexDirection: "column" }}
         gap={2}
       >
         <TextField
           required
           id="lastname"
           name="lastname"
           label="Last name"
           size="small"
           fullWidth
           autoComplete="family-name"
           variant="outlined"
         />
         <TextField
           required
           type="text"
           id="phonenumber"
           name="phonenumber"
           label="Phone Number"
           placeholder="811424511"
           size="small"
           fullWidth
           autoComplete="phonenumber"
           variant="outlined"
         />
           <TextField
           required
           id="zipcode"
           name="zipcode"
           label="Zip Code"
           size="small"
           fullWidth
           autoComplete="address-name"
           variant="outlined"
         />
         <TextField
           required
           id="address2"
           name="address2"
           label="Address 2"
           size="small"
           fullWidth
           autoComplete="address-two-name"
           variant="outlined"
         />
          <Autocomplete
           id="state-select-autocomplete"
           size="small"
           options={countries}
           autoHighlight
           getOptionLabel={(option) => option.label}
           renderOption={(props, option) => (
             <Box component="li" {...props}>
               {option.label}
             </Box>
           )}
           renderInput={(params) => (
             <TextField
               {...params}
               required
               label="State"
               id="state"
               name="state"
               inputProps={{
                 ...params.inputProps,
                 autoComplete: "new-state", // disable autocomplete and autofill
               }}
             />
           )}
         />
       
        

        
       </Grid>
     </Grid>
    </Stack>
   </Paper>
  );
};

const Billingaddress = (params) => {
  return (
    <Paper variant="outlined" sx={{ p: "1.5rem",boxShadow:'rgba(3, 0, 71, 0.09) 0px 1px 3px' }}>
     <Stack gap={2}>
     <Typography variant="h6" mb={0} gutterBottom>
        Billing Address
      </Typography>
      <FormControlLabel control={<Checkbox/>} label="Same as shipping address" />
      <Grid container gap={5} justifyContent={'space-between'} spacing={3} columns={12.6}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", flexDirection: "column" }}
          gap={2}
        >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            size="small"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
          <TextField
            required
            id="emailaddress"
            name="emailaddress"
            label="Email Address"
            placeholder="info@mail.com"
            size="small"
            fullWidth
            autoComplete="email-address"
            variant="outlined"
          />
          <TextField
            required
            id="company"
            name="company"
            label="Company"
            size="small"
            fullWidth
            autoComplete="company-name"
            variant="outlined"
          />
          <TextField
            required
            id="address1"
            name="address1"
            label="Address 1"
            size="small"
            fullWidth
            autoComplete="address-name"
            variant="outlined"
          />
          <Autocomplete
            id="country-select-autocomplete"
            size="small"
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Country"
                id="countru"
                name="country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-country", // disable autocomplete and autofill
                }}
              />
            )}
          />

        
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", flexDirection: "column" }}
          gap={2}
        >
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            size="small"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
          <TextField
            required
            type="text"
            id="phonenumber"
            name="phonenumber"
            label="Phone Number"
            placeholder="811424511"
            size="small"
            fullWidth
            autoComplete="phonenumber"
            variant="outlined"
          />
            <TextField
            required
            id="zipcode"
            name="zipcode"
            label="Zip Code"
            size="small"
            fullWidth
            autoComplete="address-name"
            variant="outlined"
          />
          <TextField
            required
            id="address2"
            name="address2"
            label="Address 2"
            size="small"
            fullWidth
            autoComplete="address-two-name"
            variant="outlined"
          />
           <Autocomplete
            id="state-select-autocomplete"
            size="small"
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="State"
                id="state"
                name="state"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-state", // disable autocomplete and autofill
                }}
              />
            )}
          />
        
         

         
        </Grid>
      </Grid>
     </Stack>
    </Paper>
  );
};

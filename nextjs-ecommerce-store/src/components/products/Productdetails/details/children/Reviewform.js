import { Star } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import {
  Box,
  Rating,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  colors,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
// @ts-ignore
import { object, string } from "yup";

const initialValues = {
  reviewField: "",
};

const userSchema = object().shape({
  reviewField: string().required('Review is required'),
});

const Reviewform = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleFormSubmit = (values) => {
    if (value === 0) {
      setOpen(true);
    } else {
      // console.log(values, value);
    }
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}`;
  }
  return (
    <Box
      className="elements"
      sx={{
        width: "60%",
        my: 3,
        py:3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography variant="h4">Write a Review for this product</Typography>
      </Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // @ts-ignore
          isSubmitting,
        }) => (
          <Box
            component={"form"}
            display={"flex"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            width={"100%"}
            gap={1}
            onSubmit={handleSubmit}
          >
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              width={"100%"}
              gap={1}
            >
              <Typography variant="h6">
                Your Rating <span style={{ color: colors.red[900] }}>*</span>
              </Typography>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                // @ts-ignore
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                // @ts-ignore

                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              width={"100%"}
              gap={1}
            >
              <Typography variant="h6">
                Your Rating <span style={{ color: colors.red[900] }}>*</span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                style={{ borderColor: "Background" }}
                minRows={10}
                multiline
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.reviewField}
                name="reviewField"
                error={!!touched.reviewField && !!errors.reviewField}
                // @ts-ignore
                helperText={touched.reviewField && errors.reviewField}
                sx={{ gridColumn: "span 4" }}
              ></TextField>
            </Box>

            <Box display={"flex"} justifyContent="end" mt={"20px"}>
              <Button
                type="submit"
                color="primary"
                disabled={values.reviewField===''?true:false}
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please Choose a rating then Submit
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Reviewform;

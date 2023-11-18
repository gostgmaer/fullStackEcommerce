import {
  Alert,
  Avatar,
  Box,
  Button,
  Rating,
  Snackbar,
  Typography,
  colors,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { Star } from "@mui/icons-material";
import { get, post } from "@/lib/network/http";
import TextField from "@/components/global/fields/TextField";
import MultiImageUploadr from "@/components/global/fields/multiImageUploadr";

const ReviewBlock = ({ data }) => {
  const route = useRouter();
  const [review, setReview] = useState(null);

  const getReview = async () => {
    const req = await get(`/products/${data["_id"]}/reviews`);
    setReview(req);
  };

  useEffect(() => {
    getReview();
  }, []);

  // console.log(session);
  return (
    <Box
      className="elements"
      sx={{
        width: "100%",
        p: 5,
      }}
    >
      {<Reviewform product={data} />}
      {review?.data?.data && (
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={2}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {review?.data?.data?.map((item) => (
            <Reviews data={item} key={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ReviewBlock;

// export async function getStaticProps(ctx) {

//   return {
//     props: { reviews: data },
//     // will be passed to the page component as props
//   };
// }

export const Reviewform = ({ product }) => {
  const initialValues = {
    comments: "",
    rating: 0,
    title: "",
  };
  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  const route = useRouter();

  const handleFormSubmit = async (values) => {
    const body = {
      title: values.title,
      rating: values.rating,
      review: values.comments,
      product: product._id,
      user: "user.id",
    };
   // console.log(body);
    //  const req = post('reviews',body)
    // console.log(req);
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
        py: 3,
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
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
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
                name="rating"
                precision={0.5}
                getLabelText={getLabelText}
                // @ts-ignore
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rating}
                //   error={!!touched.rating && !!errors.rating}
                // @ts-ignore

                // helperText={touched.rating && errors.rating}
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
                Your Review <span style={{ color: colors.red[900] }}>*</span>
              </Typography>

              <TextField
                label={"Title"}
                type={"text"}
                placeholder={"Title.."}
                value={values.title}
                onChange={handleChange}
                classes={"w-full"}
                icon={undefined}
                id={"title"}
                additionalAttrs={{ onBlur: handleBlur, required: true }}
              />

              <div className=" flex w-full flex-col">
                {" "}
                <span className=" block  mb-1.5 text-lg">
                  Your Review Details
                </span>{" "}
                <textarea
                  rows={10}
                  id="comments"
                  required
                  placeholder="your review Details "
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comments}
                  name="comments"
                  className="resize-none border rounded-md placeholder:capitalize p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <MultiImageUploadr
                selectedFiles={value}
                setSelectedFiles={setValue}
                label={"Images"}
              />
            </Box>

            <Box display={"flex"} justifyContent="end" mt={"20px"}>
              <Button
                type="submit"
                color="primary"
                disabled={values.reviewField === "" ? true : false}
                className=" bg-gray-900"
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
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {"Has Been Added"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export const Reviews = ({ data }) => {
  return (
    <Box
      className="elements"
      sx={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Avatar
          alt="Remy Sharp"
          src={
            data.attributes.userimage
              ? data.attributes.userimage
              : "/assets/images/pexels-wendy-wei-14411099.jpg"
          }
          sx={{ width: 56, height: 56 }}
        />

        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={1}
          flexDirection={"column"}
        >
          <Typography variant="subtitle1">
            {data.attributes.username ? data.attributes.username : "Kishor"}
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={1.5}>
            <Rating
              name="half-rating-read"
              defaultValue={
                data.attributes.rating ? data.attributes.rating : 4.0
              }
              precision={0.5}
              readOnly
            />{" "}
            <span>
              {data.attributes.rating ? data.attributes.rating : "4.0"}
            </span>{" "}
            <span>
              {data.attributes.publishedAt
                ? moment(data.attributes.publishedAt).fromNow()
                : "2.2 years ago"}
            </span>
          </Box>
        </Box>
      </Box>
      <Typography>
        {data.attributes.title
          ? data.attributes.title
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum commodi possimus beatae vero, animi odio eligendi, suscipit ipsa soluta quasi assumenda et quo at libero enim! Sed, beatae quae!"}
      </Typography>
    </Box>
  );
};

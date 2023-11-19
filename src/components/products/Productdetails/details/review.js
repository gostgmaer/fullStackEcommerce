import {
  Alert,
  Avatar,
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Rating,
  Snackbar,
  Typography,
  colors,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { Star, StarBorderTwoTone, Stars } from "@mui/icons-material";
import { get, post } from "@/lib/network/http";
import TextField from "@/components/global/fields/TextField";
import MultiImageUploadr from "@/components/global/fields/multiImageUploadr";
import Image from "next/image";
import MuiModal from "@/layout/modal";
import { apiUrl } from "@/utils/config";

const ReviewBlock = ({ data }) => {
  const route = useRouter();
  const [review, setReview] = useState(null);

  // console.log(data);
  // const getReview = async () => {
  //   const req = await get(`/products/${data["_id"]}/reviews`);
  //   setReview(req);
  // };

  const getRelated = async (second) => { 
    const filter = JSON.stringify({ categories: "Man" });
    const relatedProducts = await fetch(`${apiUrl}/products?filter=${filter}`);
    console.log(relatedProducts);
   }

  useEffect(() => {
    getRelated()
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
      {data?.reviews && (
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={1}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {data?.reviews?.map((item) => (
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
      images: value,
    };
    console.log(body);
    const req = post(`/products/${product._id}/reviews`, body);
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
  const [openModal, setOpenModal] = useState(false);
  const [imageData, setImageData] = useState({});

  const setImageIndex = (index) => {
    setImageData(index);
    setOpenModal(true);
  };

  return (
    <Box
      className="elements border p-2"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width:"60%"
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={1}
          flexDirection={"column"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1.5}>
            <IconButton className=" bg-green-700 rounded-xl h-8 text-white text-lg w-max">
              <span className=" font-thin text-sm"> {data?.rating}</span>{" "}
              <Star className="h-4 w-4" />
            </IconButton>
            <span className=" text-sm font-semibold capitalize">
              {data?.title}
            </span>
          </Box>
          {data?.images.length != 0 && (
            <ImageList
              sx={{ width: "auto", height: "auto" }}
              className="flex flex-wrap"
              cols={3}
            >
              {data?.images.map((item) => (
                <ImageListItem key={item.url} className=" h-auto">
                  <Image
                    src={`${item.url}?w=96&h=96&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                    className=" w-24 h-24 object-cover"
                    width={100}
                    height={100}
                    onClick={() => setImageIndex(item)}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          <div className=" whitespace-pre-line ">
            <div
              dangerouslySetInnerHTML={{ __html: data?.review }}
              className="  whitespace-pre-line"
            />
          </div>
        </Box>
      </Box>
      <div className=" flex gap-1">
        <Avatar
          alt={data?.username}
          src={data?.profilePicture}
          sx={{ width: 24, height: 24 }}
        />
        <div className=" flex gap-2">
          <span>{data?.firstName}</span>,
          <span>{moment(data?.date).format("ll")}</span>
        </div>
      </div>
      <MuiModal
        heading={undefined}
        Content={<OpenImageModal img={imageData} />}
        classes={"undefined"}
        maxWidth={"auto"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></MuiModal>
    </Box>
  );
};

const OpenImageModal = ({ img }) => {
  return (
    <div className="w-max">
      <Image
        loading="lazy"
        alt={img.name}
        src={img.url}
        objectFit="cover"
        width={360}
        height={420}
      />
    </div>
  );
};

import { Box, Rating, Avatar, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";

const Reviews = ({ data }) => {
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

export default Reviews;

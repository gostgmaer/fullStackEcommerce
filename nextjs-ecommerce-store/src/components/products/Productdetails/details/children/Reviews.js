import { Box, Rating,Avatar, Typography } from "@mui/material";
import Image from "next/image";

const Reviews = () => {
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
        src={"/assets/images/pexels-wendy-wei-14411099.jpg"}
        sx={{ width: 56, height: 56 }}
      />
       
        <Box display={"flex"} alignItems={"flex-start"} gap={1} flexDirection={'column'}>
          <Typography variant="subtitle1">Kishor Sarkar</Typography>
          <Box display={"flex"} alignItems={"center"} gap={1.5}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />{" "}
            <span>4.5</span> <span>2.2 years ago</span>
          </Box>
        </Box>
      </Box>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum
        commodi possimus beatae vero, animi odio eligendi, suscipit ipsa soluta
        quasi assumenda et quo at libero enim! Sed, beatae quae!
      </Typography>
    </Box>
  );
};

export default Reviews;

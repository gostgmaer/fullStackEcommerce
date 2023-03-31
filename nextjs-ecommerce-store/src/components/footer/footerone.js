import { Iso, PlayLessonSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Footerone = () => {
  return (
    <Box flex={1.8}  sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}>
      <Typography variant="h3" >Logo</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor
        maiores ipsam repellendus perferendis, repudiandae mollitia ducimus id
        architecto voluptatum odit aperiam? Iusto perspiciatis repudiandae
        incidunt minus quis soluta ipsum.
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }} >
        <PlayLessonSharp />
        <Iso></Iso>
      </Box>
    </Box>
  );
};

export default Footerone;

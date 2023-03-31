import {
  Facebook,
  FacebookOutlined,
  FacebookRounded,
} from "@mui/icons-material";
import { Box, colors, IconButton, Typography } from "@mui/material";

const Footerfour = () => {
  return (
    <Box
      flex={1.2}
      sx={{
        "&.MuiTypography-body2": { fontSize: "16px !important" },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="h4">Contact Us</Typography>
      <Box
        sx={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="body2">
          70 Washington Square South, New York, NY 10012, United States
        </Typography>
        <Typography variant="body2">Email: uilib.help@gmail.com</Typography>
        <Typography variant="body2">Phone: +1 1123 456 780</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {Array.from(Array(5).keys()).map((item) => (
          <IconButton size="small"  key={item}>
            <FacebookOutlined
              sx={{ "&.MuiSvgIcon-root": { color: colors.grey[500],"&:hover":{
                color: colors.grey[100],
              } } }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Footerfour;

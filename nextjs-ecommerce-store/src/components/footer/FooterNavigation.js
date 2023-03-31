import { Box, colors, Typography } from "@mui/material";
const FooterNavigation = ({ title, data }) => {
  return (
    <Box
      flex={0.8}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography fontSize={24} variant="h4">
        {title}
      </Typography>
      <Box
        sx={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        {data?.map((item) => (
          <Typography
            sx={{
              color: colors.grey[400],cursor:'pointer',
              "&.MuiTypography-body1:hover": {
                color: colors.grey[100],
              },
            }}
            key={item}
          >
            Privacy {item+1}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FooterNavigation;

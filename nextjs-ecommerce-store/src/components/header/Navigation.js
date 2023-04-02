import { Box, Stack } from "@mui/material";
import React from "react";

const Navigation = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        overflow="hidden"
        width={"100%"}
      ></Stack>
    </Box>
  );
};

export default Navigation;

import { Box, Stack } from '@mui/material'
import React from 'react'

const TopHeader = () => {
  return (
    <Box>
    <Stack
      direction="row"
      justifyContent={"space-between"}
      overflow="hidden"
      width={"100%"}
    ></Stack>
  </Box>)
}

export default TopHeader
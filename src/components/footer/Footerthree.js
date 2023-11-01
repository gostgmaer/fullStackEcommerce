import { Box, Typography } from '@mui/material'
import React from 'react'

const Footerthree = () => {
  return (
    <Box flex={1}>
    <Typography variant="h4">About us</Typography>
    <Box>
      <ul>
        {Array.from(Array(5).keys()).map((item) => (
          <li key={item}>Privacy</li>
        ))}
      </ul>
    </Box>
  </Box>
  )
}

export default Footerthree
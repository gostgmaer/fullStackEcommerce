import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, IconButton, Paper, Stack, TextField } from '@mui/material'
import React from 'react'

const ProfileupdateForm = () => {
  return (
   <Box><Paper>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
   </Paper> </Box>
  )
}

export default ProfileupdateForm
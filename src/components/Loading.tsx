import React from 'react'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress />
  </Box>
  )
}

export default Loading
import React from "react";
import loadImage from "../../images/loading.gif";
import { Box } from "@mui/material";
const Loading = () => {
  return (
    <Box>
      <Box>
        <img alt="Loading...." src={loadImage}></img>
      </Box>
    </Box>
  );
};

export default Loading;

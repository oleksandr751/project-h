import React from "react";
import loadImage from "../../images/loading.gif";
import loadImage2 from "../../images/loading2.gif";
import { Box } from "@mui/material";
interface ILoading {
  type: string;
}
const Loading: React.FC<ILoading> = ({ type }) => {
  return (
    <Box>
      <Box>
        <img
          alt="Loading...."
          src={type === "primary" ? loadImage : loadImage2}
        ></img>
      </Box>
    </Box>
  );
};

export default Loading;

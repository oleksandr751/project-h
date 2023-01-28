import React from "react";
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
          src={
            type === "primary" ? "/images/loading.gif" : "/images/loading2.gif"
          }
        ></img>
      </Box>
    </Box>
  );
};

export default Loading;

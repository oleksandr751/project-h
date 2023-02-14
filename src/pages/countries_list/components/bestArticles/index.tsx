import React from "react";
import { Box } from "@mui/material";
import LeftChild from "./leftChild";
import RightChild from "./rightChild";

const BestArticles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "70%",
        }}
      >
        <LeftChild />
        <RightChild />
      </Box>
    </Box>
  );
};

export default BestArticles;

import React from "react";
import Slider from "../../../../components/slider";
import { Box } from "@mui/material";
import { cardStyles } from "../../../../components/articleCard/styles";
import { articleData } from "../../../../data/articleCardsData";
const RightChild = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={cardStyles.contentDiv}>
        <Slider slidesData={articleData} />
      </Box>
    </Box>
  );
};

export default RightChild;

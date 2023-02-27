import React from "react";
import Slider from "../../../../components/slider";
import { Box, Typography } from "@mui/material";
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
      <Box>
        <Typography variant="h4">Best rated articles</Typography>
      </Box>
      <Box sx={cardStyles.contentDiv}>
        <Slider slidesData={articleData} />
      </Box>
    </Box>
  );
};

export default RightChild;

import React from "react";
import { cardStyles } from "../../../components/articleCard/styles";
import { Box, Typography } from "@mui/material";
import Slider from "../../../components/slider";
import { articleData } from "../../../data/articleCardsData";

const BestArticles = () => {
  return (
    <Box sx={cardStyles.mainDiv}>
      <Box>
        <Typography sx={{ fontSize: "48px" }}>Best rated articles</Typography>
      </Box>
      <Box sx={cardStyles.contentDiv}>
        <Slider slidesData={articleData} />
      </Box>
    </Box>
  );
};

export default BestArticles;

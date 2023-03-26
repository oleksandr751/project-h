import React from "react";
import { listData } from "../../data/listData";
import ListWithIcons from "../../../../components/list";
import { Box, Typography } from "@mui/material";
const LeftChild = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ marginTop: "20px", userSelect: "none" }}>
        More information for you
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "20px",
          userSelect: "none",
          color: "#8C99AD",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam velit
        repellendus sit! Assumenda asperiores libero ab tenetur rerum
      </Typography>
      <ListWithIcons data={listData} />
    </Box>
  );
};

export default LeftChild;

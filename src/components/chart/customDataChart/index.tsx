import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { data } from "./data";
import RatioBar from "./RatioBar";

const CustomDataChart = () => {
  return (
    <Box width="100%">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            paddingRight: "20px",
            borderRight: "2px solid",
            borderColor: "#FA496E",
          }}
        >
          Side 1
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingLeft: "20px",
          }}
        >
          Side 2
        </Typography>
      </Box>
      <Box>
        {data.map((element) => (
          <RatioBar data={element} key={element.id} />
        ))}
      </Box>
    </Box>
  );
};

export default CustomDataChart;

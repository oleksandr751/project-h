import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { data } from "./data";
import RatioBar from "./RatioBar";

const CustomDataChart = () => {
  return (
    <Box width={"400px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            paddingRight: "20px",
            borderRight: "2px solid",
            borderColor: "divider",
          }}
        >
          Side 1
        </Typography>
        <Typography
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

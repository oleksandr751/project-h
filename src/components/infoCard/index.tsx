import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import React from "react";
interface IInfoCard {
  icon: JSX.Element;
  color: string;
}
const InfoCard: React.FC<IInfoCard> = ({ icon, color }) => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "340px",
          border: `1px solid #8391A7`,
          borderRadius: "6px",
          color: "#e0fbfc",
          padding: "30px",
          boxShadow: `${color} 0px 20px 50px -25px`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "70%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {icon}
          <Typography variant="h4" sx={{ color: color }}>
            Text 1
          </Typography>
        </Box>
        <Box sx={{ margin: "20px 0 20px 0" }}>
          <Typography variant="h6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            aperiam laborum, quis accusamus hic culpa sed
          </Typography>
        </Box>

        <Button sx={{ color: color, margin: "20px 0 0 0" }}>Learn more</Button>
      </Box>
    </Box>
  );
};

export default InfoCard;

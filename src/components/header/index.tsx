import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { headerStyles } from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem 0 1rem",
        width: "65vw",
        borderBottom: "2px solid #475264",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <img src="/images/logo.png" alt="logo"></img>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              ...headerStyles.typography,
              borderBottom:
                location.pathname === "/" ? "3px solid red" : "2px solid white",
            }}
          >
            Home
          </Typography>
          <Typography sx={headerStyles.typography}>Contact Us</Typography>
          <Typography sx={headerStyles.typography}>Info</Typography>
          <Typography sx={headerStyles.typography}>Login</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

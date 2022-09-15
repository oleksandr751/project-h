import React from "react";
import { Link } from "react-router-dom";
import StartIcon from "@mui/icons-material/Start";
import { Button, Box } from "@mui/material";

import Slider from "../../components/slider";
import { quotes } from "../../data/quotes";
import { landingPageStyle } from "./styles";
const LandingPage = () => {
  return (
    <Box style={landingPageStyle.mainDiv}>
      <Box style={landingPageStyle.leftChildDiv}>
        <Slider slides={quotes} />
      </Box>
      <Link
        to="/countries"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#E9CC98" }}
          endIcon={<StartIcon />}
        >
          Get started
        </Button>
      </Link>
    </Box>
  );
};

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import StartIcon from "@mui/icons-material/Start";
import { Button } from "@mui/material";
import parthenon_image from "../../images/parthenon.jpg";
import parchment_image from "../../images/parchment_image_2.png";
import Slider from "../../components/slider";
import { quotes } from "../../data/quotes";
const myStyle = {
  mainDiv: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: `url(${parthenon_image})`,
    backgroundSize: "100%",
  },
  leftChildDiv: {
    width: "550px",
    height: "650px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${parchment_image})`,
    backgroundSize: "100%",
  },
};
const LandingPage = () => {
  return (
    <div style={myStyle.mainDiv}>
      <div style={myStyle.leftChildDiv}>
        <Slider slides={quotes} />
      </div>
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
    </div>
  );
};

export default LandingPage;

import parthenon_image from "../../../images/parthenon.jpg";
import parchment_image from "../../../images/parchment_image_2.png";
export const landingPageStyle = {
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

import background1 from "../../../images/background1.jpg";
export const countriesListStyle = {
  mainDiv: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${background1}) no-repeat`,
    backgroundSize: "100%",
    backgroundColor: "black",
  },
  mainChildDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "70%",
  },
  leftChildDiv: {
    display: "flex",
    padding: "40px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "50%",
  },
  rightChildDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "50%",
    borderLeft: 5,
    borderColor: "#e0fbfc ",
  },
  typography: { color: "#e0fbfc", marginTop: "20px", userSelect: "none" },
  link: {
    textDecoration: "none",
    marginTop: "20px",
  },
  iconList: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",
  },
};

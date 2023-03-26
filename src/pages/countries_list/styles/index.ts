export const countriesListStyle = {
  mainDiv: {
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)",
    backgroundSize: "100%",
    backgroundColor: "black",
  },
  mainChildDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    width: "70%",
  },
  leftChildDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: "100%",
    paddingRight: "70px",
    width: "50%",
  },
  rightChildDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "400px",
    borderLeft: 5,
    borderColor: "#FA496E ",
  },
  typography: {
    color: "#e0fbfc",
    marginTop: "20px",
    userSelect: "none",
    textAlign: "justify",
  },
  link: {
    textDecoration: "none",
    marginTop: "20px",
  },
  iconList: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",
  },
  countriesList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "30px",
    paddingBottom: "20px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#161B32",
    },
    "&::-webkit-scrollbar-track": {
      // WebkitBoxShadow: "inset 0 0 10px rgba(0,0,0,0.3);",
      backgroundColor: "#161F4B",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      "&::WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "#e0fbfc",
    },
  },
  button: {
    background: "#FA496E",
    color: "white",
    padding: "10px 20px 10px 20px",
    fontSize: "14px",
    marginTop: "30px",
    "&:hover": { background: "#dd0d37" },
  },
  buttonOutlined: {
    padding: "10px 20px 10px 20px",
    fontSize: "14px",
    borderColor: "#e0fbfc",
    marginTop: "30px",
    background: "transparent",
    color: "white",
    "&:hover": { background: "#e0fbfc", color: "black" },
  },
};

export const countriesListStyle = {
  mainDiv: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `url("https://live.staticflickr.com/65535/52391328447_602f0c7651_h.jpg") no-repeat`,
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
    textAlign: "center",
    alignItems: "center",
    height: "100%",
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
  countriesList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "300px",
    marginTop: "30px",
    paddingBottom: "20px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#138DD0",
    },
    "&::-webkit-scrollbar-track": {
      // WebkitBoxShadow: "inset 0 0 10px rgba(0,0,0,0.3);",
      backgroundColor: "#138DD0",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      "&::WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "#F5F5F5",
    },
  },
};

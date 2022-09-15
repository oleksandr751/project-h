export const myStyle = {
  mainDiv: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  leftChildDiv: {
    position: "sticky",
    top: 0,
    width: "40%",
    height: "400px",
    display: "flex",
    // flexDirection: "row",
    marginTop: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  rightChildDiv: {
    width: "60%",
    display: "flex",
    paddingTop: "100px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: 3,
    borderColor: "divider",
  },
  contentInfo: {
    marginLeft: "50px",
  },
  tabStyle: {
    marginTop: "40px",
    paddingRight: "40px",
    width: "80%",
    height: "700px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3);",
      backgroundColor: "#F5F5F5",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      "&::WebkitBoxShadow": "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "#138DD0",
    },
  },
};

import React from "react";
import { Box, Typography } from "@mui/material";
interface IPageWithSeparator {
  leftChild: JSX.Element;
  rightChild: JSX.Element;
  header: string;
  headerIcon?: JSX.Element;
  headerIconColor?: string;
}
const PageWithSeparator: React.FC<IPageWithSeparator> = ({
  leftChild,
  rightChild,
  header,
  headerIcon,
  headerIconColor,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width: "70%",
        margin: "50px 0 50px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <Typography variant="h2">{header}</Typography>
        {headerIcon}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            height: "500px",
            paddingRight: "100px",
            width: "50%",
          }}
        >
          {leftChild}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            paddingLeft: "100px",
            borderLeft: 5,
            borderColor: "#FA496E ",
            height: "500px",
            width: "50%",
          }}
        >
          {rightChild}
        </Box>
        {/* <LeftChild />
        <RightChild /> */}
      </Box>
    </Box>
  );
};

export default PageWithSeparator;

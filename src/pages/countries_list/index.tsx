import React from "react";
import Footer from "../../components/footer";
import Homepage from "./components/homepage";
import PageWithSeparator from "./components/bestArticles";
import LeftChild from "./components/bestArticles/leftChild";
import RightChild from "./components/bestArticles/rightChild";
import CustomDataChart from "../../components/chart/customDataChart";
import { Box } from "@mui/material";

const CountriesListPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Homepage />
      <PageWithSeparator
        // headerIcon={HEADER_ICON_VARIANT.article}
        // headerIconColor={COLOR_VARIANT.blue}
        header={"Articles"}
        leftChild={<LeftChild />}
        rightChild={<RightChild />}
      ></PageWithSeparator>
      <PageWithSeparator
        // headerIcon={HEADER_ICON_VARIANT.stats}
        // headerIconColor={COLOR_VARIANT.red}
        header={"Infographics"}
        leftChild={<CustomDataChart />}
        rightChild={<LeftChild />}
      ></PageWithSeparator>
      <Footer />
    </Box>
  );
};

export default CountriesListPage;

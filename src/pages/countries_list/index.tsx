import React from "react";
import { Box } from "@mui/material";
import BestArticles from "./components/bestArticles";
import Footer from "../../components/footer";
import Homepage from "./components/homepage";

const CountriesListPage = () => {
  return (
    <Box>
      <Homepage />
      <BestArticles />
      <Footer />
    </Box>
  );
};

export default CountriesListPage;

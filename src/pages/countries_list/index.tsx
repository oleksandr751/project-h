import React from "react";
import BestArticles from "./components/bestArticles";
import Footer from "../../components/footer";
import Homepage from "./components/homepage";
import CustomDataChart from "../../components/chart/customDataChart";

const CountriesListPage = () => {
  return (
    <>
      <Homepage />
      <BestArticles />
      <CustomDataChart />
      <Footer />
    </>
  );
};

export default CountriesListPage;

import React from "react";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../context/index";
import { Box, Typography } from "@mui/material";
import { countriesListStyle } from "./styles";
import ContentCard from "./components/contentCard";
import { IContentData } from "../../interfaces/index";

const CountriesListPage = () => {
  const { setSelectedItem } = useContext(MainContext);
  const handleClick = (country: IContentData) => {
    setSelectedItem(country);
    localStorage.setItem("id", country.id);
    console.log(
      countries.find((obj) => {
        return obj["id"] === localStorage.getItem("id");
      })
    );
  };
  return (
    <Box style={countriesListStyle.mainDiv as React.CSSProperties}>
      <Box style={countriesListStyle.mainChildDiv as React.CSSProperties}>
        <Box style={countriesListStyle.leftChildDiv as React.CSSProperties}>
          <Typography variant="h1" sx={countriesListStyle.typography}>
            Welcome!
          </Typography>
          <Typography variant="h5" sx={countriesListStyle.typography}>
            Please select a topic to start with
          </Typography>
        </Box>
        <Box sx={countriesListStyle.rightChildDiv as React.CSSProperties}>
          {countries.map((country) => (
            <Link
              key={country.id}
              to={"/timeline"}
              style={{
                textDecoration: "none",
                marginTop: "20px",
              }}
              onClick={() => {
                handleClick(country);
              }}
            >
              <ContentCard data={country}></ContentCard>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CountriesListPage;

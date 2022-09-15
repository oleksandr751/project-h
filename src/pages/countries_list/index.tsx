import React from "react";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../context/index";
import { Box } from "@mui/material";

const CountriesListPage = () => {
  const { setSelectedItem } = useContext(MainContext);
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      {countries.map((country) => (
        <Link
          key={country.id}
          to={"/timeline"}
          style={{
            textDecoration: "none",
          }}
          onClick={() => {
            setSelectedItem(country);
            localStorage.setItem("id", country.id);
            console.log(
              countries.find((obj) => {
                return obj["id"] === localStorage.getItem("id");
              })
            );
          }}
        >
          {country.name}
        </Link>
      ))}
    </Box>
  );
};

export default CountriesListPage;

import React from "react";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../context/index";

const CountriesListPage = () => {
  const { setSelectedItem } = useContext(MainContext);
  return (
    <div>
      {countries.map((country) => (
        <Link
          to={"/timeline"}
          style={{
            textDecoration: "none",
          }}
          onClick={() => {
            setSelectedItem(country);
          }}
        >
          {country.name}
        </Link>
      ))}
    </div>
  );
};

export default CountriesListPage;

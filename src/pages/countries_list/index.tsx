import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/index";
import { Box, IconButton, Typography } from "@mui/material";
import { countriesListStyle } from "./styles";
import ContentCard from "../../components/contentCard/contentCard";
import { IContentData } from "../../interfaces/index";
import IconList from "./components/iconList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from "../../components/searchBar";
import Loading from "../../components/loading";
import AuthComponent from "../../components/auth";

const CountriesListPage = () => {
  const { setSelectedItem, countriesData } = useContext(MainContext);
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [searchBarText, setSearchBarText] = useState("");
  const [loading] = useState(false);
  const handleClick = (country: IContentData) => {
    setSelectedItem(country);
    localStorage.setItem("id", country.id);
  };

  return (
    <Box sx={countriesListStyle.mainDiv as React.CSSProperties}>
      <Box sx={countriesListStyle.iconList}>
        <IconList
          loginAttempt={loginAttempt}
          setLoginAttempt={setLoginAttempt}
        />
      </Box>
      <Box sx={countriesListStyle.mainChildDiv as React.CSSProperties}>
        <Box sx={countriesListStyle.leftChildDiv as React.CSSProperties}>
          {loginAttempt ? (
            <>
              <Typography variant="h3" sx={countriesListStyle.typography}>
                Sign in to receive admin privileges
              </Typography>
              <Typography variant="h5" sx={countriesListStyle.typography}>
                Press arrow to go back
              </Typography>
              <IconButton
                onClick={() => {
                  setLoginAttempt(false);
                }}
              >
                <ArrowBackIcon
                  sx={{ fontSize: "50px", color: "white" }}
                ></ArrowBackIcon>
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="h1" sx={countriesListStyle.typography}>
                Welcome!
              </Typography>
              <Typography variant="h5" sx={countriesListStyle.typography}>
                Please select a topic to start with
              </Typography>
            </>
          )}
        </Box>
        <Box sx={countriesListStyle.rightChildDiv as React.CSSProperties}>
          {loginAttempt ? (
            <AuthComponent setLoginAttempt={setLoginAttempt}></AuthComponent>
          ) : (
            <>
              <SearchBar
                searchBarText={searchBarText}
                setSearchBarText={setSearchBarText}
              />
              <Box sx={countriesListStyle.countriesList as React.CSSProperties}>
                {loading ? (
                  <Loading type="secondary" />
                ) : (
                  <>
                    {countriesData
                      .filter((country) =>
                        country.name
                          .toLowerCase()
                          .includes(searchBarText.toLowerCase())
                      )
                      .map((country) => (
                        <Link
                          key={country.id}
                          to={"/country"}
                          style={countriesListStyle.link as React.CSSProperties}
                          onClick={() => {
                            handleClick(country);
                          }}
                        >
                          <ContentCard countryData={country} type="country" />
                        </Link>
                      ))}
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CountriesListPage;

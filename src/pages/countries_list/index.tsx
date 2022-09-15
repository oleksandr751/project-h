import React from "react";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "../../context/index";
import { Box, IconButton, Typography } from "@mui/material";
import { countriesListStyle } from "./styles";
import ContentCard from "./components/contentCard";
import { IContentData } from "../../interfaces/index";
import IconList from "./components/iconList";
import AuthForm from "../../components/auth/authForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CountriesListPage = () => {
  const { setSelectedItem } = useContext(MainContext);
  const [loginAttempt, setLoginAttempt] = useState(false);
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
            <AuthForm setLoginAttempt={setLoginAttempt} />
          ) : (
            <>
              {countries.map((country) => (
                <Link
                  key={country.id}
                  to={"/timeline"}
                  style={countriesListStyle.link as React.CSSProperties}
                  onClick={() => {
                    handleClick(country);
                  }}
                >
                  <ContentCard data={country} />
                </Link>
              ))}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CountriesListPage;

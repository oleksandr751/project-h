import React from "react";
import { useContext, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../../../components/header";
import WelcomeText from "./welcomeText";
import AuthComponent from "../../../components/auth";
import PopularTopics from "./popularTopics";
import { MainContext } from "../../../context";
import { IContentData } from "../../../interfaces";
import { countriesListStyle } from "../styles";
import InfoPage from "./infopage";

const Homepage = () => {
  const { setSelectedItem, countriesData } = useContext(MainContext);
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [loading] = useState(false);
  const handleClick = (country: IContentData) => {
    setSelectedItem(country);
    localStorage.setItem("id", country.id);
  };

  return (
    <Box sx={countriesListStyle.mainDiv as React.CSSProperties}>
      <Header />
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
            <WelcomeText />
          )}
        </Box>
        <Box sx={countriesListStyle.rightChildDiv as React.CSSProperties}>
          {loginAttempt ? (
            <AuthComponent setLoginAttempt={setLoginAttempt}></AuthComponent>
          ) : (
            <PopularTopics
              loading={loading}
              handleClick={handleClick}
              data={countriesData}
            />
          )}
        </Box>
      </Box>
      <InfoPage />
    </Box>
  );
};

export default Homepage;

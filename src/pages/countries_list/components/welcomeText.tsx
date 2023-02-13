import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import StartIcon from "@mui/icons-material/Start";
import { countriesListStyle } from "../styles";
import { Link } from "react-router-dom";
const WelcomeText = () => {
  return (
    <Box sx={{ textAlign: "start" }}>
      <Typography variant="h1" sx={countriesListStyle.typography}>
        PROJECT-H
      </Typography>
      <Typography variant="h6" sx={countriesListStyle.typography}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut molestias
        itaque blanditiis consectetur esse cupiditate, ex quaerat modi, minus
        quos earum quia similique repudiandae rem hic repellat fugiat autem. Id.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Button
          endIcon={<StartIcon></StartIcon>}
          sx={countriesListStyle.button}
        >
          Get more
        </Button>
        <a
          href="https://github.com/oleksandr751/project-h"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
        >
          <Button
            endIcon={<GitHubIcon></GitHubIcon>}
            variant="outlined"
            sx={countriesListStyle.buttonOutlined}
          >
            View on Github
          </Button>{" "}
        </a>
      </Box>
    </Box>
  );
};

export default WelcomeText;

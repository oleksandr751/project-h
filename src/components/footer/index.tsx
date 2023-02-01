import { Image } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { FooterStyles } from "./styles";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box sx={FooterStyles.mainDiv}>
      <Box sx={FooterStyles.contentDiv}>
        <Box sx={{ height: "120px" }}>
          <img src="/images/logo.png" alt="Something wrong"></img>
        </Box>
        <Box sx={FooterStyles.linksColumn}>
          <Box>
            <Typography variant="h5" sx={FooterStyles.headerText}>
              Social
            </Typography>
            <Typography sx={FooterStyles.listText}>Twitter</Typography>
            <Typography sx={FooterStyles.listText}>Facebook</Typography>
            <Typography sx={FooterStyles.listText}>GitHub</Typography>
            <Typography sx={FooterStyles.listText}>LinkedIn</Typography>
            <Typography sx={FooterStyles.listText}>Telegram</Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={FooterStyles.headerText}>
              Abouts Us
            </Typography>
            <Typography sx={FooterStyles.listText}>Overview</Typography>
            <Typography sx={FooterStyles.listText}>Contact us</Typography>
            <Typography sx={FooterStyles.listText}>Careers</Typography>
            <Typography sx={FooterStyles.listText}>Blog</Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={FooterStyles.headerText}>
              Useful links
            </Typography>
            <Typography sx={FooterStyles.listText}>Your Dashboard</Typography>
            <Typography sx={FooterStyles.listText}>Topic list</Typography>
            <Typography sx={FooterStyles.listText}>Article List</Typography>
            <Typography sx={FooterStyles.listText}>Infographics</Typography>
            <Typography sx={FooterStyles.listText}>Statistics</Typography>
          </Box>
        </Box>
        <Box sx={FooterStyles.bottomDiv}>
          <Box sx={FooterStyles.bottomDivContent}>
            <Box sx={FooterStyles.bottomDivContentText}>
              <CopyrightIcon />
              <Typography sx={{ paddingLeft: "5px" }}>
                2023 Project-H
              </Typography>
            </Box>
            <Typography sx={FooterStyles.bottomDivContentText}>
              Terms
            </Typography>
            <Typography sx={FooterStyles.bottomDivContentText}>
              Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

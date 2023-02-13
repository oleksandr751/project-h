import { Box, Typography } from "@mui/material";
import React from "react";
import { FooterStyles } from "./styles";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { links } from "./listOfLinks";

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
            {links.social.map((link) => (
              <Typography sx={FooterStyles.listText} key={link.title + link.to}>
                {link.title}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h5" sx={FooterStyles.headerText}>
              Abouts Us
            </Typography>
            {links.aboutUs.map((link) => (
              <Typography sx={FooterStyles.listText} key={link.title + link.to}>
                {link.title}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h5" sx={FooterStyles.headerText}>
              Useful links
            </Typography>
            {links.usefulLinks.map((link) => (
              <Typography sx={FooterStyles.listText} key={link.title + link.to}>
                {link.title}
              </Typography>
            ))}
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

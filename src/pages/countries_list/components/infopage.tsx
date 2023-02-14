import { Box, Typography } from "@mui/material";
import React from "react";
import InfoCard from "../../../components/infoCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArticleIcon from "@mui/icons-material/Article";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
const InfoPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
      }}
    >
      <Typography variant="h3" sx={{ color: "#e0fbfc", marginBottom: "40px" }}>
        Header
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "0 0 80px 0",
        }}
      >
        <InfoCard
          color="#9C2710"
          icon={<EqualizerIcon sx={{ fontSize: "40px", color: "#9C2710" }} />}
        ></InfoCard>
        <InfoCard
          color="#008E49"
          icon={<TrendingUpIcon sx={{ fontSize: "40px", color: "#008E49" }} />}
        ></InfoCard>
        <InfoCard
          color="#0073ff"
          icon={<ArticleIcon sx={{ fontSize: "40px", color: "#0073ff" }} />}
        ></InfoCard>
        <InfoCard
          color="#00F7F7"
          icon={<MicIcon sx={{ fontSize: "40px", color: "#00F7F7" }} />}
        ></InfoCard>
        <InfoCard
          color="#F7F700"
          icon={
            <NotificationsIcon sx={{ fontSize: "40px", color: "#F7F700" }} />
          }
        ></InfoCard>
        <InfoCard
          color="#F79806"
          icon={<SettingsIcon sx={{ fontSize: "40px", color: "#F79806" }} />}
        ></InfoCard>
      </Box>
    </Box>
  );
};

export default InfoPage;

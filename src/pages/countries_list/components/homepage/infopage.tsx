import { Box, Typography } from "@mui/material";
import React from "react";
import InfoCard from "../../../../components/infoCard";
import { COLOR_VARIANT, HEADER_ICON_VARIANT } from "../../../../enum/variants";
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
          color={COLOR_VARIANT.red}
          icon={HEADER_ICON_VARIANT.stats}
        ></InfoCard>
        <InfoCard
          color={COLOR_VARIANT.green}
          icon={HEADER_ICON_VARIANT.trending}
        ></InfoCard>
        <InfoCard
          color={COLOR_VARIANT.blue}
          icon={HEADER_ICON_VARIANT.article}
        ></InfoCard>
        <InfoCard
          color={COLOR_VARIANT.cyan}
          icon={HEADER_ICON_VARIANT.voice}
        ></InfoCard>
        <InfoCard
          color={COLOR_VARIANT.yellow}
          icon={HEADER_ICON_VARIANT.notification}
        ></InfoCard>
        <InfoCard
          color={COLOR_VARIANT.orange}
          icon={HEADER_ICON_VARIANT.setting}
        ></InfoCard>
      </Box>
    </Box>
  );
};

export default InfoPage;

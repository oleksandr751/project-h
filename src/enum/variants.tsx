import { EColors, EHeaderIconName } from ".";
import { Box } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArticleIcon from "@mui/icons-material/Article";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
const iconStyle = {
  mainDiv: {
    backgroundColor: "transparent",
    display: "flex",
    width: "70px",
    height: "70px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: "10px",
  },
};
export const COLOR_VARIANT: Record<EColors, string> = {
  [EColors.blue]: "#0073ff",
  [EColors.cyan]: "#00F7F7",
  [EColors.green]: "#4DC274",
  [EColors.orange]: "#F79806",
  [EColors.red]: "#9C2710",
  [EColors.yellow]: "#F7F700",
};
export const HEADER_ICON_VARIANT: Record<EHeaderIconName, JSX.Element> = {
  [EHeaderIconName.article]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.blue}` }}
    >
      <ArticleIcon sx={{ fontSize: "40px", color: COLOR_VARIANT.blue }} />
    </Box>
  ),
  [EHeaderIconName.notification]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.yellow}` }}
    >
      <NotificationsIcon
        sx={{ fontSize: "40px", color: COLOR_VARIANT.yellow }}
      />
    </Box>
  ),
  [EHeaderIconName.setting]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.orange}` }}
    >
      <SettingsIcon sx={{ fontSize: "40px", color: COLOR_VARIANT.orange }} />
    </Box>
  ),
  [EHeaderIconName.stats]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.red}` }}
    >
      <EqualizerIcon sx={{ fontSize: "40px", color: COLOR_VARIANT.red }} />
    </Box>
  ),
  [EHeaderIconName.trending]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.green}` }}
    >
      <TrendingUpIcon sx={{ fontSize: "40px", color: COLOR_VARIANT.green }} />
    </Box>
  ),
  [EHeaderIconName.voice]: (
    <Box
      sx={{ ...iconStyle.mainDiv, border: `2px solid ${COLOR_VARIANT.cyan}` }}
    >
      {" "}
      <MicIcon sx={{ fontSize: "40px", color: COLOR_VARIANT.cyan }} />
    </Box>
  ),
};

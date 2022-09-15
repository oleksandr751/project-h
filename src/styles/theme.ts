import { createTheme, ThemeOptions } from "@mui/material/styles";

export const globalTheme = createTheme({
  typography: {
    fontFamily: "cursive",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
} as ThemeOptions);

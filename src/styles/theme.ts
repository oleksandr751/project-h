import { createTheme, ThemeOptions } from "@mui/material/styles";

export const globalTheme = createTheme({
  typography: {
    fontFamily: "Verdana",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#138DD0",
    },
    secondary: {
      main: "#ffffff",
    },
  },
} as ThemeOptions);

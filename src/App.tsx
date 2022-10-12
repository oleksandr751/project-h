import MainRoutes from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "./styles/theme";
import MainContextProvider from "./context/mainContextProvider";

function App() {
  return (
    <>
      <MainContextProvider>
        <ThemeProvider theme={globalTheme}>
          <MainRoutes />
        </ThemeProvider>
      </MainContextProvider>
    </>
  );
}

export default App;

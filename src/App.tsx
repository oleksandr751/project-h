import { MainContext } from "./context";
import MainRoutes from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { countries } from "./data/countries";
import { useEffect, useState } from "react";
import { globalTheme } from "./styles/theme";
import { PASS, SESSION_KEY } from "./config";

function App() {
  const sortedCountries = countries.sort((a, b) => (a.name < b.name ? -1 : 1));
  const [countriesData, setCountriesData] = useState(sortedCountries);
  const [selectedItem, setSelectedItem] = useState(countries[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.sessionStorage.getItem(SESSION_KEY) === PASS
  );
  useEffect(() => {
    const initialCountry = countries.find(
      (obj) => obj["id"] === localStorage.getItem("id")
    );
    initialCountry ? setSelectedItem(initialCountry) : console.log("error");
  }, []);
  return (
    <>
      <MainContext.Provider
        value={{
          countriesData,
          setCountriesData,
          isAuthenticated,
          setIsAuthenticated,
          selectedItem,
          setSelectedItem,
        }}
      >
        <ThemeProvider theme={globalTheme}>
          <MainRoutes />
        </ThemeProvider>
      </MainContext.Provider>
    </>
  );
}

export default App;

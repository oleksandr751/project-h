import { MainContext } from "./context";
import MainRoutes from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { countries } from "./data/countries";
import { useEffect, useState } from "react";
import { globalTheme } from "./styles/theme";

function App() {
  const [countriesData, setCountriesData] = useState(countries);
  const [selectedItem, setSelectedItem] = useState(countries[0]);
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

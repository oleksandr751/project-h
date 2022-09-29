import { MainContext } from "./context";
import MainRoutes from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { globalTheme } from "./styles/theme";
import { PASS, SESSION_KEY } from "./config";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [greatPerson, setGreatPerson] = useState({});
  const [editAttempt, setEditAttempt] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.sessionStorage.getItem(SESSION_KEY) === PASS
  );
  const [greatPeople, setGreatPeople] = useState([]);
  return (
    <>
      <MainContext.Provider
        value={{
          editAttempt,
          setEditAttempt,
          greatPerson,
          setGreatPerson,
          greatPeople,
          setGreatPeople,
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

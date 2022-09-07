import { MainContext } from "./context";
import MainRoutes from "./routes";
import { countries } from "./data/countries";
import { useState } from "react";

function App() {
  const [countriesData, setCountriesData] = useState(countries);
  const [selectedItem, setSelectedItem] = useState(countries[0]);
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
        <MainRoutes />
      </MainContext.Provider>
    </>
  );
}

export default App;

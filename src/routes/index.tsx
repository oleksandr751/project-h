import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import CountriesListPage from "../pages/countries_list";
import ContentPage from "../pages/content";
import { MainContext } from "../context/index";
import { useContext } from "react";

const MainRoutes = () => {
  const { selectedItem } = useContext(MainContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/countries" element={<CountriesListPage />} />
        <Route path="/timeline" element={<ContentPage data={selectedItem} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesListPage from "../pages/countries_list";
import ContentPage from "../pages/content";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesListPage />}></Route>
        <Route path="/timeline" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

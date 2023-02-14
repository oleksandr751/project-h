import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesListPage from "../pages/countries_list";
import ContentPage from "../pages/content";
import ArticleCreation from "../pages/article/create";
import { useCountriesData } from "../hooks/countries.hook";
import { useEffect, useContext } from "react";
import { MainContext } from "../context/index";
import EmailForm from "../pages/content/emailForm";
import MiniDrawer from "../components/userDashBoard/DrawerTest";
import Files from "../pages/files";

const MainRoutes = () => {
  const { getCountries, getCountry } = useCountriesData();
  const { isAuthenticated } = useContext(MainContext);

  useEffect(() => {
    getCountries();
    getCountry(localStorage.getItem("id"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesListPage />}></Route>
        <Route path="/country" element={<ContentPage />} />
        <Route path="/form" element={<EmailForm />} />
        <Route path="/dashBoard/*" element={<MiniDrawer />} />
        <Route path="/app/posts" element={<Files />}></Route>
        {isAuthenticated && (
          <Route path="/article/create" element={<ArticleCreation />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

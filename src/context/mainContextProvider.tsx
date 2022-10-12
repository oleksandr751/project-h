import React from "react";
import { useState } from "react";
import { SESSION_KEY } from "../config";
import { MainContext } from "./index";
import { PASS } from "../config/index";

interface IMainContextProvider {
  children: JSX.Element;
}

const MainContextProvider: React.FC<IMainContextProvider> = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [greatPerson, setGreatPerson] = useState({});
  const [editAttempt, setEditAttempt] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.sessionStorage.getItem(SESSION_KEY) === PASS
  );
  const [greatPeople, setGreatPeople] = useState([]);
  return (
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
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

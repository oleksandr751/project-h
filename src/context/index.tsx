import { createContext } from "react";
import { countries } from "../data/countries";
import { IContentData } from "../interfaces";

interface IMainContext {
  countriesData: IContentData[];
  selectedItem: IContentData;
  isAuthenticated: boolean;
  setIsAuthenticated: (par: boolean) => void;
  setSelectedItem: (par: IContentData) => void;
  setCountriesData: (par: IContentData[]) => void;
}

export const MainContext = createContext<IMainContext>({
  countriesData: countries,
  selectedItem: countries[0],
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setSelectedItem: () => {},
  setCountriesData: () => {},
});

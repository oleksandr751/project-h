import { createContext } from "react";
import { countries } from "../data/countries";
import { IContentData, IGreatPeople } from "../interfaces";

interface IMainContext {
  countriesData: IContentData[];
  selectedItem: IContentData | any;
  isAuthenticated: boolean;
  greatPeople: IGreatPeople[];
  setGreatPeople: (par: IGreatPeople[] | any) => void;
  setIsAuthenticated: (par: boolean) => void;
  setSelectedItem: (par: IContentData) => void;
  setCountriesData: (par: IContentData[] | any) => void;
}

export const MainContext = createContext<IMainContext>({
  countriesData: [],
  selectedItem: countries[0],
  isAuthenticated: false,
  greatPeople: [],
  setGreatPeople: () => {},
  setIsAuthenticated: () => {},
  setSelectedItem: () => {},
  setCountriesData: () => {},
});

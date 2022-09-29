import { createContext } from "react";
import { countries } from "../data/countries";
import { IContentData, IGreatPeople } from "../interfaces";

interface IMainContext {
  countriesData: IContentData[];
  selectedItem: IContentData | any;
  isAuthenticated: boolean;
  greatPeople: IGreatPeople[];
  greatPerson: IGreatPeople | any;
  editAttempt: boolean;
  setEditAttempt: (par: boolean) => void;
  setGreatPerson: (par: IGreatPeople | any) => void;
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
  greatPerson: {},
  editAttempt: false,
  setEditAttempt: () => {},
  setGreatPerson: () => {},
  setGreatPeople: () => {},
  setIsAuthenticated: () => {},
  setSelectedItem: () => {},
  setCountriesData: () => {},
});

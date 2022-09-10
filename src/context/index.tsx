import { createContext } from "react";
import { countries } from "../data/countries";
import { IContentData } from "../interfaces";

interface IMainContext {
  countriesData: IContentData[];
  selectedItem: IContentData;
  setSelectedItem: (par: IContentData) => void;
  setCountriesData: (par: IContentData[]) => void;
}

export const MainContext = createContext<IMainContext>({
  countriesData: countries,
  selectedItem: countries[0],
  setSelectedItem: () => {},
  setCountriesData: () => {},
});

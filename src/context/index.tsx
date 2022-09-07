import { createContext } from "react";
import { countries } from "../data/countries";

interface MainContextTypes {
  countriesData: {
    name: string;
    description: string;
    imageSrc: string;
    timelineData: {
      name: string;
      dateStart: string;
      dateEnd: string;
      description: string;
    }[];
  }[];
  selectedItem: {
    name: string;
    description: string;
    imageSrc: string;
    timelineData: {
      name: string;
      dateStart: string;
      dateEnd: string;
      description: string;
    }[];
  };
  setSelectedItem: (par: any) => void;
  setCountriesData: (par: any) => void;
}

export const MainContext = createContext<MainContextTypes>({
  countriesData: countries,
  selectedItem: countries[0],
  setSelectedItem: () => {},
  setCountriesData: () => {},
});

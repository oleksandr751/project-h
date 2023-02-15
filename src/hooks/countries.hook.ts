import { useHttp } from "./http.hook";
import { useContext } from "react";
import { MainContext } from "../context/index";
import { IContentData } from "../interfaces/index";

export const useCountriesData = () => {
  const { request } = useHttp();
  const { setCountriesData, setSelectedItem } = useContext(MainContext);
  const getCountries = async () => {
    try {
      const response = await request(`${process.env.API_URL}/api/countries`);
      setCountriesData(
        response.sort((a: IContentData, b: IContentData) =>
          a.name < b.name ? -1 : 1
        )
      );
    } catch (error) {}
  };
  const getCountry = async (id: string | null) => {
    try {
      const response = await request(
        `${process.env.API_URL}/api/countries/${id}`
      );
      setSelectedItem(response);
    } catch (error) {}
  };
  return { getCountries, getCountry };
};

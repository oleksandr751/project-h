import { API_URL } from "../config";
import { useHttp } from "./http.hook";
import { useContext } from "react";
import { MainContext } from "../context/index";
import { IContentData } from "../interfaces/index";

export const useCountriesData = () => {
  const { request } = useHttp();
  const { setCountriesData, setSelectedItem } = useContext(MainContext);
  const getCountries = async (setLoading: (par: boolean) => void) => {
    try {
      setLoading(true);
      const response = await request(`${API_URL}/api/countries`);
      setCountriesData(
        response.sort((a: IContentData, b: IContentData) =>
          a.name < b.name ? -1 : 1
        )
      );
      setLoading(false);
      console.log(response);
    } catch (error) {}
  };
  const getCountry = async (id: string | any) => {
    try {
      const response = await request(`${API_URL}/api/countries/${id}`);
      setSelectedItem(response);
      console.log(response);
    } catch (error) {}
  };
  return { getCountries, getCountry };
};

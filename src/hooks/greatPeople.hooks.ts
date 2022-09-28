import { API_URL } from "../config";
import { useHttp } from "./http.hook";
import { useContext } from "react";
import { MainContext } from "../context/index";
import { IGreatPeople } from "../interfaces/index";

export const useGreatPeopleData = () => {
  const { request } = useHttp();
  const { setGreatPeople } = useContext(MainContext);
  const getGreatPeople = async (
    setLoading: (par: boolean) => void,
    countryName?: string
  ) => {
    try {
      setLoading(true);
      const response = await request(
        `${API_URL}/api/greatPeople/${countryName}`
      );
      setGreatPeople(
        response.sort((a: IGreatPeople, b: IGreatPeople) =>
          a.name < b.name ? -1 : 1
        )
      );
      setLoading(false);
      console.log(response);
    } catch (error) {}
  };
  const addGreatPeople = async (greatPeople: any) => {
    try {
      const response = await request(`${API_URL}/api/greatPeople/add`, "POST", {
        data: greatPeople,
      });
      console.log(response);
    } catch (error) {}
  };
  return { getGreatPeople, addGreatPeople };
};

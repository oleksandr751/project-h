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
    } catch (error) {}
  };
  const updateGreatPerson = async (
    greatPeople: any,
    setOpenAlert: (par: boolean) => void,
    setAlertMessage: (par: string) => void,
    setAlertType: (par: string) => void
  ) => {
    try {
      const response = await request(
        `${API_URL}/api/greatPeople/update`,
        "PUT",
        {
          data: greatPeople,
        }
      );
      applyChanges(
        setOpenAlert,
        setAlertMessage,
        setAlertType,
        response.message,
        5000,
        "success",
        response.data
      );
    } catch (error: any) {
      applyChanges(
        setOpenAlert,
        setAlertMessage,
        setAlertType,
        error.message,
        5000,
        "error"
      );
    }
  };
  const addGreatPeople = async (
    greatPeople: any,
    setOpenAlert: (par: boolean) => void,
    setAlertMessage: (par: string) => void,
    setAlertType: (par: string) => void
  ) => {
    try {
      const response = await request(`${API_URL}/api/greatPeople/add`, "POST", {
        data: greatPeople,
      });
      applyChanges(
        setOpenAlert,
        setAlertMessage,
        setAlertType,
        response.message,
        5000,
        "success",
        response.data
      );
    } catch (error: any) {
      applyChanges(
        setOpenAlert,
        setAlertMessage,
        setAlertType,
        error.message,
        5000,
        "error"
      );
    }
  };
  const applyChanges = (
    setOpenAlert: (par: boolean) => void,
    setAlertMessage: (par: string) => void,
    setAlertType: (par: string) => void,
    message: string,
    timeout: number,
    type: string,
    data?: IGreatPeople[]
  ) => {
    if (type === "success") {
      setGreatPeople(
        data?.sort((a: IGreatPeople, b: IGreatPeople) =>
          a.name < b.name ? -1 : 1
        )
      );
      setAlertMessage(message);
      setAlertType("success");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, timeout);
    } else {
      setAlertMessage(message);
      setAlertType("error");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, timeout);
    }
  };
  return { getGreatPeople, addGreatPeople, updateGreatPerson };
};

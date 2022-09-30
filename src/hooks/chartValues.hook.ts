import { API_URL } from "../config";
import { useHttp } from "./http.hook";
export const useChartValues = () => {
  const { request } = useHttp();
  const getChartValues = async (
    countryName: any,
    dataName: any,
    setNewChartValues: any
  ) => {
    try {
      const response = await request(
        `${API_URL}/api/chartValues/${countryName}/${dataName}`
      );
      setNewChartValues(response);
    } catch (error) {}
  };
  return { getChartValues };
};

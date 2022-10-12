import { API_URL } from "../config";
import { useHttp } from "./http.hook";
import { IChartValues } from "../interfaces/index";

export const useChartValues = () => {
  const { request } = useHttp();
  const getChartValues = async (
    countryName: string,
    dataName: string,
    setNewChartValues: (par: React.SetStateAction<IChartValues[]>) => void
  ) => {
    try {
      const response = await request(
        `${API_URL}/api/chartValues/${countryName}/${dataName}`
      );
      // console.log(response);
      setNewChartValues(response.data);
    } catch (error) {}
  };
  return { getChartValues };
};

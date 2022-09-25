import { Box, Typography } from "@mui/material";
import React from "react";
import DataChart from "../../../../components/chart/history";
import { chartValues } from "../../../../data/chartValues";
import { IContentData } from "../../../../interfaces/";
import { useState, useEffect } from "react";
interface IGeneralInfoProps {
  contentType: string;
  data: IContentData;
}
const GeneralInfo: React.FC<IGeneralInfoProps> = ({ data, contentType }) => {
  const [newChartValues, setNewChartValues] = useState(chartValues[0]);
  const getChartValues = () => {
    const foundChartValues = chartValues.find(
      (obj) => obj.countryID === data.id
    );
    foundChartValues
      ? setNewChartValues(foundChartValues)
      : console.log("error");
  };
  useEffect(() => {
    getChartValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign={"start"} width="75%">
        <Typography>Capital: {data.generalInfo.capital}</Typography>
        <Typography>Population: {data.generalInfo.population}</Typography>
        <Typography>Area: {data.generalInfo.area}</Typography>
        <Typography>Highest peak: {data.generalInfo.highestPeak}</Typography>
      </Box>
      <Box height="70%" width="90%" marginTop="20px">
        <DataChart
          data={newChartValues.data}
          chartName="History"
          type="line"
        ></DataChart>
      </Box>
    </Box>
  );
};

export default GeneralInfo;

import { Box, Typography } from "@mui/material";
import React from "react";
import DataChart from "../../../../components/chart/history";
import { IContentData } from "../../../../interfaces/";
import { useState, useEffect } from "react";
import { useChartValues } from "../../../../hooks/chartValues.hook";
import SelectComponent from "../../../../components/select/index";
interface IGeneralInfoProps {
  contentType: string;
  data: IContentData;
}
const GeneralInfo: React.FC<IGeneralInfoProps> = ({ data, contentType }) => {
  const [newChartValues, setNewChartValues] = useState({ data: [] });
  const options = ["Army size by number of troops", "Population"];
  const [defaultChartDataName, setDefaultChartDataName] =
    useState("Population");
  const { getChartValues } = useChartValues();
  useEffect(() => {
    getChartValues(data.name, defaultChartDataName, setNewChartValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultChartDataName, data]);

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
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box textAlign={"start"} width="75%">
          <Typography>Capital: {data?.generalInfo?.capital}</Typography>
          <Typography>Population: {data?.generalInfo?.population}</Typography>
          <Typography>Area: {data?.generalInfo?.area}</Typography>
          <Typography>
            Highest peak: {data?.generalInfo?.highestPeak}
          </Typography>
        </Box>
      </Box>
      <Box
        height="80%"
        width="85%"
        marginTop="60px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <SelectComponent
          options={options}
          selectedValue={defaultChartDataName}
          setSelectedValue={setDefaultChartDataName}
        />
        <DataChart data={newChartValues?.data} type="line"></DataChart>
      </Box>
    </Box>
  );
};

export default GeneralInfo;

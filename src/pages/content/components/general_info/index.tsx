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
        {/* <Box>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5390402.932524624!2d31.18290412583837!3d48.723967178663294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1664139018026!5m2!1sen!2sde"
            width="400px"
            height="250px"
            style={{ border: "0px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box> */}
      </Box>
      <Box height="50%" width="90%" marginTop="60px">
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

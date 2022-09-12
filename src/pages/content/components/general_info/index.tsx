import { Box, Typography } from "@mui/material";
import React from "react";
import { IGeneralInfo } from "../../../../interfaces";
interface IGeneralInfoProps {
  contentType: string;
  data: IGeneralInfo;
}
const GeneralInfo: React.FC<IGeneralInfoProps> = ({ data, contentType }) => {
  return (
    <Box>
      <Typography>Capital: {data.capital}</Typography>
      <Typography>Population:{data.population}</Typography>
      <Typography>Area:{data.area}</Typography>
      <Typography>Highest peak:{data.highestPeak}</Typography>
    </Box>
  );
};

export default GeneralInfo;

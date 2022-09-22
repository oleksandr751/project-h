import { CardContent, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { IContentData } from "../../interfaces/index";
interface IContentCardCountry {
  data?: IContentData;
}
const ContentCardCountry: React.FC<IContentCardCountry> = ({ data }) => {
  return (
    <CardContent>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // width: "100%",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {data?.name}
        </Typography>
        <img
          src={data?.imageSrc}
          alt={data?.name}
          width="30px"
          height="20px"
        ></img>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {data?.name}
      </Typography>
    </CardContent>
  );
};

export default ContentCardCountry;

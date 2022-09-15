import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { IContentData } from "../../../interfaces";
interface IContentCard {
  data: IContentData;
}
const ContentCard: React.FC<IContentCard> = ({ data }) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "110px",
      }}
    >
      <CardContent>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <img
            src={data.imageSrc}
            alt={data.name}
            width="30px"
            height="20px"
          ></img>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentCard;

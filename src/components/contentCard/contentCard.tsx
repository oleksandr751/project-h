import { Card } from "@mui/material";
import React, { useEffect } from "react";
import { IContentData, IGreatPeople } from "../../interfaces";
import ContentCardCountry from "./contentCardCountry";
import ContentCardPerson from "./contentCardPerson";
interface IContentCard {
  countryData?: IContentData;
  personData?: IGreatPeople;
  type: string;
}
const ContentCard: React.FC<IContentCard> = ({
  countryData,
  personData,
  type,
}) => {
  return (
    <Card
      sx={
        type === "country"
          ? {
              width: "300px",
              height: "110px",
              marginTop: "20px",
              boxShadow: "10px 5px 5px #FA496E",
            }
          : { width: "380px", height: "170px", marginTop: "20px" }
      }
    >
      {type === "country" ? (
        <ContentCardCountry data={countryData} />
      ) : type === "person" ? (
        <ContentCardPerson data={personData} />
      ) : null}
    </Card>
  );
};

export default ContentCard;

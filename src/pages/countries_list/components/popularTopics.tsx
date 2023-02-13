import React from "react";
import Loading from "../../../components/loading";
import { Typography } from "@mui/material";
import { countriesListStyle } from "../styles";
import { Link } from "react-router-dom";
import ContentCard from "../../../components/contentCard/contentCard";
import { Box } from "@mui/system";
import { IContentData } from "../../../interfaces";
interface IPopularTopics {
  loading: any;
  data: IContentData[];
  handleClick: any;
}
const PopularTopics: React.FC<IPopularTopics> = ({
  loading,
  data,
  handleClick,
}) => {
  return (
    <>
      <Typography sx={countriesListStyle.typography} variant="h5">
        Most viewed topics
      </Typography>
      <Box sx={countriesListStyle.countriesList as React.CSSProperties}>
        {loading ? (
          <Loading type="secondary" />
        ) : (
          <>
            {data.map((element) => (
              <Link
                key={element.id}
                to={"/country"}
                style={countriesListStyle.link as React.CSSProperties}
                onClick={() => {
                  handleClick(element);
                }}
              >
                <ContentCard countryData={element} type="country" />
              </Link>
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default PopularTopics;

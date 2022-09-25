import { Box } from "@mui/material";
import React, { useState } from "react";
import ContentCard from "../../../../components/contentCard/contentCard";
import { IGreatPeople } from "../../../../interfaces";
import SearchBar from "../../../../components/searchBar/index";

interface IGreatPeopleComponent {
  data: IGreatPeople[];
}

const GreatPeople: React.FC<IGreatPeopleComponent> = ({ data }) => {
  const [searchBarText, setSearchBarText] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      {data
        .filter((country) =>
          country.name.toLowerCase().includes(searchBarText.toLowerCase())
        )
        .map((person, idx) => (
          <ContentCard personData={person} type={"person"} key={idx} />
        ))}
    </Box>
  );
};

export default GreatPeople;

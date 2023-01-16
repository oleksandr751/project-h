import React from "react";
import ArticleSections from "./ArticleSections";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SelectComponent from "../../../components/select";
import { MainContext } from "../../../context/index";
import { useContext } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";
const ArticleCreation = () => {
  const { countriesData } = useContext(MainContext);
  const [selectedValue, setSelectedValue] = useState("Germany");
  const options = countriesData.map((country: any) => country.name);
  return (
    <>
      <Link to={"/country"} style={{ textDecoration: "none" }}>
        <Button>Go back</Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SelectComponent
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          options={options}
        ></SelectComponent>
        <ArticleSections></ArticleSections>
      </Box>
    </>
  );
};

export default ArticleCreation;

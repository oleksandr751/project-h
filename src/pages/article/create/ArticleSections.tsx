import React, { ChangeEvent } from "react";
import { useState } from "react";
import { TextField, Box } from "@mui/material";

const ArticleSections = () => {
  const [articleSections, setArticleSections] = useState([
    { sectionHeader: "Section 1", sectionText: "", sectionID: "1" },
    { sectionHeader: "Section 2", sectionText: "", sectionID: "2" },
    { sectionHeader: "Conclusion", sectionText: "", sectionID: "3" },
  ]);
  const [headline, setHeadline] = useState("Headline");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: any
  ) => {
    setArticleSections(
      articleSections.map((article) =>
        article.sectionID === id
          ? { ...article, [e.target.name]: e.target.value }
          : article
      )
    );
    console.log(articleSections);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TextField
        value={headline}
        name="headline"
        sx={{ width: "600px" }}
        onChange={(e) => {
          setHeadline(e.target.value);
        }}
        placeholder="Headline"
      ></TextField>
      {articleSections.map((section, idx) => (
        <>
          <TextField
            name="sectionHeader"
            placeholder="Section Header"
            sx={{ width: "600px" }}
            value={section.sectionHeader}
            onChange={(e) => {
              handleChange(e, section.sectionID);
            }}
          ></TextField>
          <TextField
            multiline
            name="sectionText"
            rows={10}
            sx={{ width: "1000px" }}
            value={section.sectionText}
            placeholder="Section body"
            onChange={(e) => {
              handleChange(e, section.sectionID);
            }}
          ></TextField>
        </>
      ))}
    </Box>
  );
};

export default ArticleSections;

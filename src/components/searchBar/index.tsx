import { TextField, Paper, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { ChangeEvent } from "react";
import { searchBarStyles } from "./styles";

interface ISearchBar {
  searchBarText: string;
  setSearchBarText: (par: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({
  searchBarText,
  setSearchBarText,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(e.currentTarget.value);
  };
  return (
    <Paper sx={searchBarStyles.paper}>
      <TextField
        onChange={handleChange}
        value={searchBarText}
        placeholder="Search"
        InputProps={{
          style: { fontSize: 14 },
          endAdornment: (
            <InputAdornment position="end" sx={{}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Paper>
  );
};

export default SearchBar;

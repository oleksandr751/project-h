import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import ContentCard from "../../../../components/contentCard/contentCard";
import { IGreatPeople } from "../../../../interfaces";
import SearchBar from "../../../../components/searchBar/index";
import AddIcon from "@mui/icons-material/Add";
import { MainContext } from "../../../../context/index";
import { useContext } from "react";
import GreatPersonForm from "./greatPersonForm";
import AlertComponent from "../../../../components/alert/index";

interface IGreatPeopleComponent {
  data: IGreatPeople[];
}

const GreatPeople: React.FC<IGreatPeopleComponent> = ({ data }) => {
  const [searchBarText, setSearchBarText] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [addAttempt, setAddAttempt] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("alerMessage");
  const { isAuthenticated, selectedItem, editAttempt } =
    useContext(MainContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AlertComponent
        text={alertMessage}
        type={alertType}
        open={openAlert}
        setOpen={setOpenAlert}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar
          searchBarText={searchBarText}
          setSearchBarText={setSearchBarText}
        />
        {isAuthenticated && !editAttempt && (
          <IconButton
            sx={{ marginLeft: "15px" }}
            onClick={() => {
              setAddAttempt(true);
            }}
          >
            <AddIcon />
          </IconButton>
        )}
      </Box>
      {addAttempt ? (
        <GreatPersonForm
          data={selectedItem}
          setAddAttempt={setAddAttempt}
          setOpenAlert={setOpenAlert}
          setAlertMessage={setAlertMessage}
          setAlertType={setAlertType}
          action="add"
        />
      ) : editAttempt ? (
        <GreatPersonForm
          data={selectedItem}
          setAddAttempt={setAddAttempt}
          setOpenAlert={setOpenAlert}
          setAlertMessage={setAlertMessage}
          setAlertType={setAlertType}
          action="edit"
        />
      ) : (
        <>
          {data
            .filter((country) =>
              country.name.toLowerCase().includes(searchBarText.toLowerCase())
            )
            .map((person, idx) => (
              <ContentCard personData={person} type={"person"} key={idx} />
            ))}
        </>
      )}
    </Box>
  );
};

export default GreatPeople;

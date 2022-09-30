import React from "react";
import {
  Card,
  TextField,
  InputAdornment,
  CardHeader,
  Button,
  Autocomplete,
} from "@mui/material";
import { addFormStyles } from "./styles/index";
import { useState, useContext } from "react";
import { IGreatPeople, IContentData } from "../../../../interfaces/index";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { AccountCircle } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { Box, Alert } from "@mui/material";
import { useGreatPeopleData } from "../../../../hooks/greatPeople.hooks";
import { MainContext } from "../../../../context/index";

interface IGreatPersonForm {
  data: IContentData;
  setAddAttempt: (par: boolean) => void;
  setOpenAlert: (par: boolean) => void;
  setAlertMessage: (par: string) => void;
  setAlertType: (par: string) => void;
  action: string;
}

const GreatPersonForm: React.FC<IGreatPersonForm> = ({
  data,
  setAddAttempt,
  setOpenAlert,
  setAlertMessage,
  setAlertType,
  action,
}) => {
  const { setEditAttempt, greatPerson } = useContext(MainContext);
  const initialState =
    action === "add"
      ? {
          countryID: data.id,
          countryName: data.name,
          dateStart: "",
          dateEnd: "",
          imageSrc: "",
          name: "",
          occupation: "",
          tags: [],
        }
      : {
          countryID: data.id,
          countryName: data.name,
          dateStart: greatPerson.dateStart,
          dateEnd: greatPerson.dateEnd,
          imageSrc: greatPerson.imageSrc,
          name: greatPerson.name,
          occupation: greatPerson.occupation,
          tags: greatPerson.tags,
        };
  const { addGreatPeople, updateGreatPerson } = useGreatPeopleData();
  const [addForm, setAddForm] = useState<IGreatPeople>(initialState);
  const [error, setError] = useState(false);
  const tags = [
    "Poet",
    "Writer",
    "Politics",
    "Military",
    "Science",
    "Physics",
    "Music",
    "Composer",
  ];

  const handleChange = (e: any) => {
    setError(false);
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };
  return (
    <Card sx={addFormStyles.mainCard}>
      <CardHeader title="Add great person"></CardHeader>
      <TextField
        required
        sx={{ margin: "10px" }}
        id="outlined-required"
        label="Name"
        placeholder="Name"
        name="name"
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={addForm.name}
      />
      <TextField
        required
        sx={{ margin: "10px" }}
        placeholder="YYYY"
        id="outlined-password-input"
        label="Year of Birth"
        name="dateStart"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <CalendarMonthIcon />
            </InputAdornment>
          ),
        }}
        value={addForm.dateStart}
      />
      <TextField
        required
        sx={{ margin: "10px" }}
        placeholder="YYYY"
        id="outlined-password-input"
        label="Year of Death"
        name="dateEnd"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <CalendarMonthIcon />
            </InputAdornment>
          ),
        }}
        value={addForm.dateEnd}
      />
      <TextField
        required
        sx={{ margin: "10px" }}
        placeholder="Occupation"
        id="outlined-password-input"
        label="Occupation"
        name="occupation"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <WorkIcon />
            </InputAdornment>
          ),
        }}
        value={addForm.occupation}
      />
      <TextField
        required
        sx={{ margin: "10px" }}
        placeholder="Image Address"
        id="outlined-password-input"
        label="Image Address"
        name="imageSrc"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <ImageIcon />
            </InputAdornment>
          ),
        }}
        value={addForm.imageSrc}
      />
      <Autocomplete
        disableClearable
        disablePortal
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        style={{ margin: "10px 0" }}
        multiple
        id="tags-outlined"
        options={tags}
        value={addForm.tags}
        onChange={(e: any, newValue: any) =>
          setAddForm({ ...addForm, tags: newValue })
        }
        renderInput={(params) => (
          <TextField
            required
            {...params}
            label="Tags"
            placeholder="Tags"
            sx={{ width: "400px" }}
          />
        )}
      />
      {error && <Alert severity="error">Please fill in all the fields</Alert>}
      {action === "add" ? (
        <Box>
          <Button
            sx={{ marginRight: "20px" }}
            onClick={() => {
              if (
                !addForm.dateStart ||
                !addForm.dateEnd ||
                !addForm.name ||
                !addForm.occupation ||
                !addForm.tags
              ) {
                setError(true);
              } else {
                addGreatPeople(
                  addForm,
                  setOpenAlert,
                  setAlertMessage,
                  setAlertType
                );
                setAddAttempt(false);
              }
            }}
            variant="contained"
            style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
            endIcon={<LibraryAddIcon />}
          >
            ADD
          </Button>
          <Button
            onClick={() => setAddAttempt(false)}
            variant="contained"
            style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
            endIcon={<DisabledByDefaultIcon />}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            sx={{ marginRight: "20px" }}
            onClick={() => {
              if (
                !addForm.dateStart ||
                !addForm.dateEnd ||
                !addForm.name ||
                !addForm.occupation ||
                !addForm.tags
              ) {
                setError(true);
              } else {
                updateGreatPerson(
                  addForm,
                  setOpenAlert,
                  setAlertMessage,
                  setAlertType
                );
                setEditAttempt(false);
              }
            }}
            variant="contained"
            style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
            endIcon={<LibraryAddIcon />}
          >
            Update
          </Button>
          <Button
            onClick={() => {
              setEditAttempt(false);
            }}
            variant="contained"
            style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
            endIcon={<DisabledByDefaultIcon />}
          >
            Cancel
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default GreatPersonForm;

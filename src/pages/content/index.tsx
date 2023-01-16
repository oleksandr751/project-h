import React, { useState } from "react";
import { Box, Button, Tab, Typography } from "@mui/material";
import TimelineComponent from "../../components/timeline";
import { myStyle } from "./styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GeneralInfo from "./components/general_info";
import { Link } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import GreatPeople from "./components/great_people";
import { useEffect, useContext } from "react";
import { useGreatPeopleData } from "../../hooks/greatPeople.hooks";
import Loading from "../../components/loading/index";
import { MainContext } from "../../context/index";
import { useCountriesData } from "../../hooks/countries.hook";

const ContentPage = () => {
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const { greatPeople, selectedItem } = useContext(MainContext);
  const { getGreatPeople } = useGreatPeopleData();
  const { getCountry } = useCountriesData();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    getGreatPeople(setLoading, selectedItem?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button>Go back</Button>
      </Link>
      <Box sx={myStyle.mainDiv}>
        <Box sx={myStyle.leftChildDiv as React.CSSProperties}>
          <img
            src={selectedItem?.imageSrc}
            alt={selectedItem?.name}
            width="300px"
            height="200px"
          ></img>
          <Box sx={myStyle.contentInfo}>
            <Typography variant="h6">{selectedItem?.name}</Typography>
            <Typography>{selectedItem?.description}</Typography>
          </Box>
        </Box>
        <Box sx={myStyle.rightChildDiv as React.CSSProperties}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Overall Info" value="1" sx={{ width: "300px" }} />
                <Tab
                  label="History Timeline"
                  value="2"
                  sx={{ width: "300px" }}
                />
                <Tab label="Great People" value="3" sx={{ width: "300px" }} />
              </TabList>
            </Box>
            <TabPanel value="1" sx={myStyle.tabStyle}>
              <GeneralInfo data={selectedItem} contentType={"country"} />
            </TabPanel>
            <TabPanel value="2" sx={myStyle.tabStyle}>
              <TimelineComponent
                data={selectedItem?.timelineData}
                position={"alternate"}
                icon={<PublicIcon />}
              />
            </TabPanel>
            <TabPanel value="3" sx={myStyle.tabStyle}>
              {loading ? (
                <Loading type="primary" />
              ) : (
                <GreatPeople data={greatPeople} />
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentPage;

// const GreatPeopleComponent = React.lazy(
//   () => import("./components/great_people")
// );
// const TimelineComponentLazy = React.lazy(
//   () => import("../../components/timeline")
// );
// <Suspense fallback={<Loading />}></Suspense>

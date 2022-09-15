import React, { useState } from "react";
import { Box, Button, Tab, Typography } from "@mui/material";
import TimelineComponent from "../../components/timeline";
import { myStyle } from "./styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { IContentData } from "../../interfaces/index";
import GeneralInfo from "./components/general_info";
import { Link } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";

interface IContentPageProps {
  data: IContentData;
}
const ContentPage: React.FC<IContentPageProps> = ({ data }) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Button>
        <Link to={"/countries"} style={{ textDecoration: "none" }}>
          Go back
        </Link>
      </Button>
      <Box style={myStyle.mainDiv}>
        <Box style={myStyle.leftChildDiv as React.CSSProperties}>
          <img
            src={data.imageSrc}
            alt={data.name}
            width="300px"
            height="200px"
          ></img>
          <Box style={myStyle.contentInfo}>
            <Typography variant="h6">{data.name}</Typography>
            <Typography>{data.description}</Typography>
          </Box>
        </Box>
        <Box
          style={myStyle.rightChildDiv as React.CSSProperties}
          sx={{ borderLeft: 1, borderColor: "divider" }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Overall Info" value="1" sx={{ width: "300px" }} />
                <Tab
                  label="History Timeline"
                  value="2"
                  sx={{ width: "300px" }}
                />
                <Tab label="Images" value="3" sx={{ width: "300px" }} />
              </TabList>
            </Box>
            <TabPanel value="1" sx={myStyle.tabStyle}>
              <GeneralInfo data={data.generalInfo} contentType={"country"} />
            </TabPanel>
            <TabPanel value="2" sx={myStyle.tabStyle}>
              <TimelineComponent
                data={data.timelineData}
                position={"alternate"}
                icon={<PublicIcon />}
              />
            </TabPanel>
            <TabPanel value="3" sx={myStyle.tabStyle}>
              <TimelineComponent
                data={data.timelineData}
                position={"alternate"}
                icon={<PublicIcon />}
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentPage;

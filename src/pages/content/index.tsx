import React, { useState } from "react";
import { Box, Button, Tab, Typography } from "@mui/material";
import TimelineComponent from "../../components/timeline";
import { myStyle } from "./styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface ContentPageProps {
  data: {
    name: string;
    description: string;
    imageSrc: string;
    timelineData: {
      name: string;
      dateStart: string;
      dateEnd: string;
      description: string;
    }[];
  };
}
const ContentPage = ({ data }: ContentPageProps) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Button>Go Back</Button>
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
            <TabPanel value="1" sx={{ width: "70%" }}>
              <TimelineComponent data={data.timelineData} position={"left"} />
            </TabPanel>
            <TabPanel value="2" sx={{ width: "70%" }}>
              <TimelineComponent data={data.timelineData} position={"right"} />
            </TabPanel>
            <TabPanel value="3" sx={{ width: "70%" }}>
              <TimelineComponent
                data={data.timelineData}
                position={"alternate"}
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentPage;

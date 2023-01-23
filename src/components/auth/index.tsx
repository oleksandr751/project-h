import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SignUpForm from "./signUpForm";
import AuthForm from "./authForm";
interface IAuthComponent {
  setLoginAttempt: (par: boolean) => void;
}
const AuthComponent: React.FC<IAuthComponent> = ({ setLoginAttempt }) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Card
      sx={{
        minHeight: "500px",
        minWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Sign In"
              value="1"
              sx={{ width: "300px", background: "white" }}
            />
            <Tab
              label="Sign Up"
              value="2"
              sx={{
                width: "300px",
                background: "white",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AuthForm setLoginAttempt={setLoginAttempt}></AuthForm>
        </TabPanel>
        <TabPanel value="2">
          <SignUpForm></SignUpForm>
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default AuthComponent;

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { MainContext } from "../../../context/index";
import { useAuth } from "../../../hooks/auth";
interface IIconList {
  loginAttempt: boolean;
  setLoginAttempt: (par: boolean) => void;
}
const IconList: React.FC<IIconList> = ({ loginAttempt, setLoginAttempt }) => {
  const { isAuthenticated } = useContext(MainContext);
  const { handleLogout } = useAuth();
  const handleClick = () => {
    console.log("1");
    setLoginAttempt(true);
  };
  return (
    <Box>
      {isAuthenticated ? (
        <IconButton onClick={handleLogout}>
          <LogoutIcon sx={{ color: "white" }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleClick}
          sx={{
            visibility: loginAttempt ? "hidden" : "visible",
          }}
        >
          <PersonIcon sx={{ color: "white" }} />
        </IconButton>
      )}
      <IconButton
        sx={{
          visibility: loginAttempt ? "hidden" : "visible",
        }}
      >
        <EmailIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default IconList;

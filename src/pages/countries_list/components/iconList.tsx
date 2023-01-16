import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { MainContext } from "../../../context/index";
import { useAuth } from "../../../hooks/auth";
import { Tooltip } from "@mui/material";
interface IIconList {
  loginAttempt: boolean;
  setLoginAttempt: (par: boolean) => void;
}
const IconList: React.FC<IIconList> = ({ loginAttempt, setLoginAttempt }) => {
  const { isAuthenticated } = useContext(MainContext);
  const { handleLogout } = useAuth();
  const handleClick = () => {
    setLoginAttempt(true);
  };
  return (
    <Box>
      {isAuthenticated ? (
        <Tooltip title="Logout" placement="top">
          <IconButton onClick={handleLogout}>
            <LogoutIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Sign in" placement="top">
          <IconButton
            onClick={handleClick}
            sx={{
              visibility: loginAttempt ? "hidden" : "visible",
            }}
          >
            <PersonIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Mail us" placement="top">
        <IconButton
          sx={{
            visibility: loginAttempt ? "hidden" : "visible",
          }}
        >
          <EmailIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default IconList;

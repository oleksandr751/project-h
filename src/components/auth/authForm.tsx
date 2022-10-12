import {
  Button,
  Card,
  CardHeader,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../../hooks/auth";
import { authFormStyles } from "./styles/index";

interface ILoginForm {
  login: string;
  password: string;
  isLogin: boolean;
  isPassword: boolean;
}
interface IAuthForm {
  setLoginAttempt: (par: boolean) => void;
}

const AuthForm: React.FC<IAuthForm> = ({ setLoginAttempt }) => {
  const { handleLogin } = useAuth();
  const initialState = {
    login: "",
    password: "",
    isLogin: true,
    isPassword: true,
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const [loginForm, setLoginForm] = useState<ILoginForm>(initialState);
  return (
    <Card sx={authFormStyles.mainCard}>
      <CardHeader title="Sign in"></CardHeader>
      <TextField
        sx={{ margin: "10px" }}
        id="outlined-required"
        label="Login"
        placeholder="Login"
        name="login"
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={loginForm.login}
      />
      <TextField
        sx={{ margin: "10px" }}
        placeholder="Password"
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <KeyIcon />
            </InputAdornment>
          ),
        }}
        value={loginForm.password}
        autoComplete="current-password"
      />
      <Button
        onClick={() =>
          handleLogin(loginForm.login, loginForm.password, setLoginAttempt)
        }
        variant="contained"
        style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
        endIcon={<LoginIcon />}
      >
        Log In
      </Button>
    </Card>
  );
};

export default AuthForm;

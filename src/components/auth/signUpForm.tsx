import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardHeader,
  InputAdornment,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import KeyIcon from "@mui/icons-material/Key";
import { AccountCircle } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import { ChangeEvent } from "react";
import { authFormStyles } from "./styles";
import { useAuth } from "../../hooks/auth";

const SignUpForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const [signUpForm, setSignUpForm] = useState(initialState);
  const [error, setError] = useState("");
  const { handleSignUp } = useAuth();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const validateFields = () => {
    setError("");
    if (!signUpForm.username || !signUpForm.email || !signUpForm.password) {
      setError("Some fields are empty");
    }
    if (signUpForm.password !== signUpForm.passwordConfirm) {
      setError("Passwords do not match");
    }
  };
  useEffect(() => {
    validateFields();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpForm]);

  return (
    <Box sx={authFormStyles.mainCard}>
      <CardHeader title="Sign up"></CardHeader>
      <TextField
        sx={{ margin: "10px" }}
        label="Username"
        placeholder="Username"
        name="username"
        value={signUpForm.username}
        onChange={handleChange}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ margin: "10px" }}
        label="Email"
        placeholder="Email"
        name="email"
        autoComplete="new-email"
        onChange={handleChange}
        value={signUpForm.email}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ margin: "10px" }}
        placeholder="Password"
        label="Password"
        type="password"
        name="password"
        autoComplete="new-password"
        onChange={handleChange}
        value={signUpForm.password}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <KeyIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ margin: "10px" }}
        placeholder="Password Confirmation"
        label="Password Confirmation"
        type="password"
        name="passwordConfirm"
        onChange={handleChange}
        value={signUpForm.passwordConfirm}
        autoComplete="new-password"
        InputProps={{
          style: { fontSize: 14 },
          autoComplete: "off",
          startAdornment: (
            <InputAdornment position="start" sx={{ marginRight: "10px" }}>
              <KeyIcon />
            </InputAdornment>
          ),
        }}
      />
      <Typography>{error}</Typography>
      <Button
        disabled={error ? true : false}
        onClick={() => {
          handleSignUp({
            username: signUpForm.username,
            email: signUpForm.email,
            password: signUpForm.password,
          });
        }}
        variant="contained"
        style={{ marginTop: "10px", backgroundColor: "#138DD0" }}
        endIcon={<LoginIcon />}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpForm;

import { useContext } from "react";
import { PASS, SESSION_KEY } from "../config";
import { MainContext } from "../context";
import { useHttp } from "./http.hook";

export const useAuth = () => {
  const { setIsAuthenticated } = useContext(MainContext);
  const { request } = useHttp();
  const handleLogout = () => {
    window.sessionStorage.removeItem(SESSION_KEY);
    window.location.reload();
  };
  const handleLogin = async (
    login: string,
    pass: string,
    setLoginAttempt: (par: boolean) => void
  ) => {
    try {
      const response = await request(
        `${process.env.API_URL}/api/auth/login`,
        "POST",
        {
          email: login,
          password: pass,
        }
      );
      if (response.status === "success") {
        window.sessionStorage.setItem(SESSION_KEY, PASS);
        setIsAuthenticated(true);
        setLoginAttempt(false);
      }
    } catch (error) {}
  };
  const handleSignUp = async (signUpData: any) => {
    console.log(signUpData);
    try {
      await request(
        `${process.env.API_URL}/api/auth/register`,
        "POST",
        signUpData
      );
    } catch (error) {}
  };
  return { handleLogout, handleLogin, handleSignUp };
};

import { useContext } from "react";
import { USERNAME, PASS, SESSION_KEY, API_URL } from "../config";
import { MainContext } from "../context";
import { useHttp } from "./http.hook";

export const useAuth = () => {
  const { setIsAuthenticated } = useContext(MainContext);
  const { request } = useHttp();
  const handleLogout = () => {
    window.sessionStorage.removeItem(SESSION_KEY);
    window.location.reload();
  };
  const handleLogin = (
    login: string,
    pass: string,
    setLoginAttempt: (par: boolean) => void
  ) => {
    if (login === USERNAME && pass === PASS) {
      window.sessionStorage.setItem(SESSION_KEY, PASS);
      setIsAuthenticated(true);
      setLoginAttempt(false);
    }
  };
  const handleSignUp = async (signUpData: any) => {
    const response = await request(
      `${API_URL}/api/auth/register`,
      "POST",
      signUpData
    );

    console.log(response);
  };
  return { handleLogout, handleLogin, handleSignUp };
};

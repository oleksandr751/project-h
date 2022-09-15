import { useContext } from "react";
import { USERNAME, PASS, SESSION_KEY } from "../config";
import { MainContext } from "../context";

export const useAuth = () => {
  const { setIsAuthenticated } = useContext(MainContext);
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
  return { handleLogout, handleLogin };
};

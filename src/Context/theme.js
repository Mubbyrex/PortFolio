import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    //checking and setting theme to match preferred theme on user's machine
    const darkMediaQuery = window.matchMedia("prefers-color-scheme:dark");
    setThemeMode(darkMediaQuery.matches ? "dark" : "light");
    darkMediaQuery.addEventListener("change", (e) => {
      setThemeMode(e.matches ? "dark" : "light");
    });
  }, []);

  const toggleTheme = () => {
    const name = themeMode === "dark" ? "light" : "dark";
    localStorage.setItem("themeMode", name);
    setThemeMode(name);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeState = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;

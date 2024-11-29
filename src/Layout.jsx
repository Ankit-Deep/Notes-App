import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/Theme/theme.js";

function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  // Functions to change the theme
  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  }
  
  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  }

  // Change the theme of the app even when the browser is refreshed
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);

    // Used local storage to set the theme
    const appTheme = localStorage.getItem("theme");
    setThemeMode(appTheme);
  }, [themeMode, setThemeMode]);

  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <Outlet />
      </ThemeContextProvider>
    </>
  );
}

export default Layout;

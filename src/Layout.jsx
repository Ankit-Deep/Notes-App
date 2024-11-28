import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/Theme/theme.js";

function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  // Functions to change the theme
  const lightTheme = () => {
    setThemeMode("light");
  }
  
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

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

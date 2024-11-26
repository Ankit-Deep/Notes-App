import { createContext,useContext } from "react";

export const themeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const themeContextProvider = themeContext.Provider;

export function useTheme() {
    return useContext(themeContext);
}
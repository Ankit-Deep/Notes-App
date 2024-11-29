import { useContext, createContext } from "react";

export const noteThemeContext = createContext({
    noteTheme: "green",
    noteThemeChanger : () => {},
});

export const noteThemeContextProvider = noteThemeContext.Provider();

export function useNoteTheme() {
    return useContext(noteThemeContext);
}
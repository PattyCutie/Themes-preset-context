import { useEffect } from "react";
import { ThemeModeProviderProps } from "./types";
import useLocalTheme from "./useLocalTheme";
import { ThemeMode } from "./useThemeMode";

  // Create Theme Mode Provider
  export default function ThemeModeProvider({ children }: ThemeModeProviderProps) {
    const [currentTheme, setCurrentTheme] = useLocalTheme(
      "ThemeMode",
      "light"
    );
    //dark-light mode
    useEffect(() => {
      document.documentElement.setAttribute("color-scheme", currentTheme);
    }, [currentTheme]);
  
    const value = {
      currentTheme,
      setCurrentTheme,
    };
  
    return (
      <ThemeMode.Provider value={value}>
        {children}
      </ThemeMode.Provider>
    );
  }

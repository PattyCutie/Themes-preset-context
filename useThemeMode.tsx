import { createContext, useContext} from "react";
import { ThemeModeType } from "./types";

// Create Theme Mode Context
export const ThemeMode = createContext<ThemeModeType>({
    currentTheme: "light",
    setCurrentTheme: () => null,
  });
  
export default function useThemeMode() {
    return useContext(ThemeMode);
  }
  
  
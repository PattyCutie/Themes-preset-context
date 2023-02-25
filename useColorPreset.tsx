import { createContext, useContext} from "react";
import { ColorPresetType } from "./types";

// Create Color Preset Context
export const ColorPreset = createContext<ColorPresetType>({
    colorPreset: "222",
    setColorPreset: () => null,
  });
  
  export  default function useColorPreset() {
    return useContext(ColorPreset);
  }
  
  
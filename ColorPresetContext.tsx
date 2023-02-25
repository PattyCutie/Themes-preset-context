import { useEffect } from "react";
import { ColorPresetProviderProps } from "./types";
import { ColorPreset } from "./useColorPreset";
import useLocalTheme from "./useLocalTheme";

  //Create Theme Color Preset Provider
  export default function ColorPresetProvider({
    children,
  }: ColorPresetProviderProps) {
    const [colorPreset, setColorPreset] = useLocalTheme("ColorValue","100")
  
    // Color preset value
    useEffect(() => {
      document.documentElement.style.setProperty("--_color_value", colorPreset);
    }, [colorPreset]);
  
    const value = {
      colorPreset,
      setColorPreset,
    };
  
    return (
      <ColorPreset.Provider value={value}>
        {children}
      </ColorPreset.Provider>
    );
  }

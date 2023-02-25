import { Dispatch, SetStateAction } from "react";

// Theme Mode
export interface ThemeModeType {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
}
export type ThemeModeProviderProps = {
    children: React.ReactNode;
    themeMode: string;
}

// Theme colors Preset
export interface ColorPresetType {
    colorPreset: string;
    setColorPreset: Dispatch<SetStateAction<string>>;
}

export type ColorPresetProviderProps = {
    children: React.ReactNode;
    colorValue: string;
}

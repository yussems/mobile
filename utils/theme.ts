import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const customTheme = {
    "style": {
        "radius": {
            "huge": 100,
            "xLarge": 20,
            "large": 12,
            "medium": 8,
            "small": 4,
            "tiny": 2
        },
        "padding": {
            "huge": 32,
            "xLarge": 24,
            "large": 20,
            "medium": 16,
            "small": 8,
            "tiny": 4
        },
        "margin": {
            "huge": 32,
            "xLarge": 24,
            "large": 16,
            "medium": 12,
            "small": 8,
            "xSmall": 6,
            "tiny": 4
        }
    },
    "font": {
        "huge": 72,
        "xLarge": 32,
        "large": 24,
        "medium": 16,
        "normal": 14,
        "small": 12,
        "xSmall": 10
    },
    "themes": {
        "colors": {
            "text": {
                "primary": "#374151",    // Primary text
                "secondary": "#6B7280",  // Secondary text
                "tertiary": "#9CA3AF",   // Tertiary text
                "disabled": "#6B7280",   // Disabled text
                "placeholder": "#6B7280",// Placeholder text
                "white": "#FFFFFF"       // White
            },
            "background": {
                "primary": "#F1F5F9",    // Light background
                "secondary": "#F5F5F5"   // Secondary background
            },
            "foreground": {
                "primary": "#111827",    // Dark foreground
                "secondary": "#374151",  // Secondary foreground
                "tertiary": "#4B5563",   // Tertiary foreground
                "quaternary": "#6B7280", // Quaternary foreground
                "quinary": "#9CA3AF",    // Quinary foreground
                "disabled": "#9CA3AF"    // Disabled foreground
            },
            "border": {
                "primary": "#D1D5DB",    // Primary border
                "secondary": "#E5E7EB",  // Secondary border
                "active": "#374151",     // Active border
                "disabled": "#E5E7EB"    // Disabled border
            }
        }
    }
}
const theme = {
    ...DefaultTheme,
    ...customTheme,
    colors: {
        ...DefaultTheme.colors,
        ...customTheme.themes.colors,

        primary: "#374151",          // Foreground primary
        secondary: "#667280",        // Foreground secondary
        tertiary: "#9CA3AF",         // Foreground tertiary
        disabled: "#667280",         // Text disabled
        placeholder: "#667280",      // Text placeholder
        white: "#FFFFFF",            // Text white

        background: "#F1F5F9",       // Background primary
        surface: "#FFFFFF",          // Surface rengi
        onSurface: "#374151",        // On Surface text rengi
        surfaceVariant: "#D1D5DB",   // Surface variant (border primary)
        onSurfaceVariant: "#E5E7EB", // On surface variant (border secondary)
        outline: "#E5E7EB",          // Border disabled

        error: "#EF4444",            // Error rengi
        onError: "#FFFFFF",          // Error text on error surface
    }
};

export { customTheme, theme };

import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        text: {
            primary: '#1F1F1F',
            secondary: '#4A4A4A',
            tertiary: '#7F7F7F',
            quaternary: '#B5B5B5',
            quinary: '#D1D1D1',
            senary: '#E8E8E8',
        },
        background: '#FFFFFF',
        surface: '#F5F5F5',
        border: '#E0E0E0',
        colors: {
            black: '#000000',
            darkGray: '#333333',
            lightGray: '#999999',
            white: '#FFFFFF',
            backgroundLight: '#F0F0F0',
        },
    },
    fonts: {
        ...DefaultTheme.fonts,
        headingLarge: {
            fontFamily: 'Roboto-Medium',
            fontSize: 32,
            lineHeight: 40,
        },
        headingMedium: {
            fontFamily: 'Roboto-Regular',
            fontSize: 24,
            lineHeight: 32,
        },
        bodyMedium: {
            fontFamily: 'Roboto-Regular',
            fontSize: 14,
            lineHeight: 20,
        },
        caption: {
            fontFamily: 'Roboto-Regular',
            fontSize: 12,
            lineHeight: 16,
        },
        small: {
            fontFamily: 'Roboto-Regular',
            fontSize: 10,
            lineHeight: 14,
        },
    },
    roundness: 8, // will be change 
    spacing: {
        huge: 32,
        xLarge: 24,
        large: 20,
        medium: 16,
        small: 8,
        tiny: 4,
    },
};

export default theme;

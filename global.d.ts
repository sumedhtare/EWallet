import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
    export type ExtendedTheme = {
        dark: boolean;
        colors: {
            primary: string;
            background: string;
            card: string;
            text: string;
            border: string;
            notification: string;
            label: string;
            lightGrey: string;
            lightGreen: string;
        };
    };
    export function useTheme(): ExtendedTheme;
}
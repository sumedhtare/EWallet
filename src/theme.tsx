import { DefaultTheme ,ExtendedTheme} from '@react-navigation/native';

  export const Theme: ExtendedTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#28BF0A',
      background: '#1B3588',
      label:'#FFF',
      lightGrey:'#EAEAEA',
      lightGreen:'#EFFAE8'
    },
  };
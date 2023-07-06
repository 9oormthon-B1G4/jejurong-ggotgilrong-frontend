import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  orange_400: '#FF7638',
  gray_50: '#fafafa',
  gray_100: '#f5f5f5',
  gray_200: '#eeeeee',
  gray_300: '#e0e0e0',
  gray_400: '#bdbdbd',
  gray_500: '#9e9e9e',
  gray_700: '#616161',
  gray_900: '#222222',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

import { createGlobalStyle } from "styled-components";
import BRSonoma from "@/fonts/BRSonoma/BRSonoma-Regular.otf";
import BRSonomaBold from "@/fonts/BRSonoma/BRSonoma-Bold.otf";
import BRSonomaBlack from "@/fonts/BRSonoma/BRSonoma-Black.otf";
import Lato from "@/fonts/Lato/Lato-Regular.ttf";
import LatoBold from "@/fonts/Lato/Lato-Bold.ttf";
import LatoBlack from "@/fonts/Lato/Lato-Black.ttf";

const THEME = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    textLight: "#F9FAFC",
    grey0: "#FFFFFF",
    grey10: "#F8F9FF",
    grey30: "#CCD1EE",
    grey60: "#5E6488",
    grey80: "#2B304E",
    grey100: "#03050F",
    neutral0: "#FFFFFF",
    neutral100: "#FAFBFF",
    neutral200: "#EDEFFC",
    neutral400: "#D7DBF5",
    neutral500: "#A9AFD9",
    neutral600: "#7981B2",
    neutral700: "#141938",
    b600: "#4F4FFF",
    g400: "#7DF0BA",
    r400: "#EB2146",
    r500: "#FF1C44",
    red: "#F7052D",
    success: "#389E0D",
  },
  grid: {
    desktop: {
      pad: 32,
      size: 64,
    },
    responsive: {
      pad: 12,
      size: 72,
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', 'sans-serif';
    
    a {
      text-decoration: none;
    }
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: 'BR Sonoma';
    font-weight: 400;
    src: url(${BRSonoma});
  }
  @font-face {
    font-family: 'BR Sonoma';
    font-weight: 600;
    src: url(${BRSonomaBold});
  }
  @font-face {
    font-family: 'BR Sonoma';
    font-weight: 700;
    src: url(${BRSonomaBlack});
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    src: url(${Lato});
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 600;
    src: url(${LatoBold});
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    src: url(${LatoBlack});
  }
`;

export default THEME;


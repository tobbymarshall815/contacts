
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 14,
      fontWeightLight: 100,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 24,
        fontWeightBold: 900,
        letterspacing: 0.26
      },
      h2:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 20,
        fontWeightBold: 700,
        letterspacing: 0.26,
      },
      h3:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
        fontWeightBold: 600,
        letterspacing: 0.18
      },
      h4:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 12,
        fontWeightBold: 600,
        letterspacing: 0.18,
      },
      h5:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 10,
        fontWeightBold: 600,
        letterspacing: 0,
      },
      h6:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 8,
        fontWeightBold: 600,
        letterspacing: 0.27,
      }
    },
    palette: {
        primary: {
          main: "#18A4E0",
          light: "#FFFFFF",
          dark: "#3b3b3b",
          contrastText: "#000000DE"
        },
        secondary: {
          main: "#FFFFFF",
          light: "#707070",
          dark: "#00000099",
          contrastText: "#FA7268"
        }
      }
  });

export default theme;
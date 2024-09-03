import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      lineHeight: "4rem",
      fontWeight: 600,
      color: "#2A06FF",
      letterSpacing: "-1px",
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#2A06FF",
    },
    secondary: {
      main: "#f22816",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
});

export default theme;

// /src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6e8348",
    },
    secondary: {
      main: "#b6905a",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "EB Garamond, serif",
  },
});

export default theme;

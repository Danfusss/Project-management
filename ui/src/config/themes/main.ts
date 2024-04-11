import "@fontsource/roboto/cyrillic-300-italic.css";
import "@fontsource/roboto/cyrillic-300.css";
import "@fontsource/roboto/cyrillic-400-italic.css";
import "@fontsource/roboto/cyrillic-400.css";
import "@fontsource/roboto/cyrillic-500-italic.css";
import "@fontsource/roboto/cyrillic-500.css";
import "@fontsource/roboto/cyrillic-700-italic.css";
import "@fontsource/roboto/cyrillic-700.css";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    body1: {
      color: "#505050",
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "2.25rem",
    },
    body2: {
      color: "#505050",
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "2.25rem",
    },
    h2: {
      color: "#121A52",
      fontFamily: "Roboto",
      fontSize: "2.25rem",
      fontStyle: "normal",
      fontWeight: "1.25rem",
      lineHeight: "2.25rem",
      textTransform: "uppercase",
    },
  },
});

export default theme;

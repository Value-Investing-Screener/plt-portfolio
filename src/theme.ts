"use client";

import { createTheme } from "@mui/material/styles";
import { darkRichBlack, keppel, lightCoral, richBlack } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: richBlack,
    },
    secondary: {
      main: keppel,
    },
    error: {
      main: lightCoral,
    },
  },
  typography: {
    h1: {
      color: richBlack,
      fontWeight: "bolder",
      marginTop: "50px",
      marginBottom: "50px",
      fontSize: "50px",
      display: "flew",
      justifyContent: "center",
    },
    h2: {
      color: darkRichBlack,
      marginBottom: "20px",
      fontSize: "40px",
    },
    h3: {
      color: darkRichBlack,
      fontWeight: "bold",
      marginBottom: "15px",
      fontSize: "30px",
    },
    h4: {
      color: darkRichBlack,
      fontSize: "20px",
    },
  },
});

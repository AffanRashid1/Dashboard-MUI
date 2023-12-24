import React from "react";
import Home from "./screens/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1E1611",
      },
      secondary: {
        main: "#29221D",
        orange: "#FE6C00",
      },

      background: {
        default: "#1E1611 ",
      },
      text: {
        primary: "#C7C4C6",
      },
      action: {
        active: "#C7C4C6",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;

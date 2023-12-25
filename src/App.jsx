import React from "react";
import Home from "./screens/Home";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Layout/theme";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;

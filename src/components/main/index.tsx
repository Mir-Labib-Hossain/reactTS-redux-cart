import React, { memo, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import MainView from "./main-view";
const Main: React.FC = () => {
  // useEffect(() => {
  //   console.log("MAIN ");
  // }, []);
  const theme = {
    dark: "#364154",
    orange: "rgb(255,173,102)",
    yellow: "rgb(255,191,63)",
  };
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  );
};
export default memo(Main);

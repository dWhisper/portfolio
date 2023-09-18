import React from "react";
import { ThemeProvider as EThemeProvider } from "@emotion/react";
import { ThemeProviderProps } from "./ThemeProvider.types";
import { useTheme } from "@emotion/react";
// import { DefaultTheme } from "../themes";
import { GlobalStyles } from "../global-styles/GlobalStyles";

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = "default" } = props;
  // TODO: Select one of the themes for a project

  return (
    <EThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </EThemeProvider>
  );
};

export { ThemeProvider, useTheme };

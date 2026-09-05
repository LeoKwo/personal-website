import React from "react";
import { ThemeContext } from "./themeContext";

export const withTheme = (WrappedComponent) => {
  return (props) => (
    <ThemeContext.Consumer>
      {(themeValue) => <WrappedComponent {...props} {...themeValue} />}
    </ThemeContext.Consumer>
  );
};

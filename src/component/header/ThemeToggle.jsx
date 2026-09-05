import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../translation/themeContext";

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;

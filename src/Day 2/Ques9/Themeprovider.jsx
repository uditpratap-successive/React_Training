/*9.Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme.
*/
// Themeprovider.js
import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { Themeprovider, ThemeContext };

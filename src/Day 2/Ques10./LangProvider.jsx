/*10.Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.*/

import { React, useState, createContext } from "react";
const LanguageContext = createContext();

const LangProvider = ({children}) => {
  const [lang, Setlang] = useState("English");
  const togglelang = () => {
    Setlang((prevlang) => prevlang === "English" ? "Spanish" : "English");
  };
  return (
    <>
      <LanguageContext.Provider value={{ lang, togglelang }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};

export default LangProvider;
export { LanguageContext };

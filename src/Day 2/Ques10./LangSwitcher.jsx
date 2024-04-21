import { useContext } from "react";
import { LanguageContext } from "./LangProvider";
import LangProvider from "./LangProvider";

import React from 'react'
const LangSwitcher = () => {
    const{lang,togglelang}=useContext(LanguageContext);
  return (
    <div>
    <button onClick={togglelang}>CLick to Change language</button>
    { lang==='English'?(
      <h3>
        The language is English
      </h3>):(
      <h3>
        The language is Spanish;
      </h3>
    )}
    </div>
    
  )
}

export default LangSwitcher


// Switcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './Themeprovider';
import './Theme.css';

const Switcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {theme === 'light-theme' ? (
          <div className="light-theme">
            <h1>Light Theme</h1>
          </div>
        ) : (
          <div className="dark-theme">
            <h1>Dark Theme</h1>
          </div>
        )}
      </div>
    )
}

export default Switcher;


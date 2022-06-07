import React, { useState } from 'react';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
import './Header.css';

const Header = () => {
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? 'light' : 'dark';
  const switchThemeIcon = themeLight ? moon : sun;

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <div className={`main main-${themeClass}`}>
      <h1>Todo</h1>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </div>
  );
};

export default Header;

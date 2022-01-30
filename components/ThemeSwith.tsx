import { useState } from 'react';
import DarkTheme from './DarkTheme';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log('[ThemeSwitch] darkMode:', darkMode);

  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
};

export default ThemeSwitch;

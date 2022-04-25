import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    isDark ? setIsDark(false) : setIsDark(true);
  };

  const theme = isDark ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ isDark: isDark, changeTheme: changeTheme }}>
      <div className='app-container' data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

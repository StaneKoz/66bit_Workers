import { RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { router } from '../router/router';
import { Theme } from '../types/Themes';
import { createContext, useEffect, useState } from 'react';

const StorageKey = 'color-theme';

type ThemeContextValue = {
  theme: Theme,
  setTheme: (currentTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const getTheme = (): Theme => {
  let theme = localStorage.getItem(StorageKey);
  if (!theme) {
    localStorage.setItem(StorageKey, Theme.light);
    theme = Theme.light;
  }

  return theme as Theme;
}

function App() {
  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;

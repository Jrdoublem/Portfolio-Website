import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dataset.theme = theme;
    localStorage.removeItem('portfolio-language');
    localStorage.setItem('portfolio-theme', theme);
    document.title = 'Jirasudanee Oakkharasinthirawut | Computer Engineering Portfolio';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#07111f' : '#f4f8fb');
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, tr: value => value }), [theme]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() { return useContext(PreferencesContext); }

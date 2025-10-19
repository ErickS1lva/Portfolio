import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ThemeColor = 'blue' | 'red' | 'green' | 'purple';
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  color: ThemeColor;
  mode: ThemeMode;
  setColor: (color: ThemeColor) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState<ThemeColor>('blue');
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedColor = localStorage.getItem('portfolio-color') as ThemeColor;
    const savedMode = localStorage.getItem('portfolio-mode') as ThemeMode;
    
    if (savedColor) setColorState(savedColor);
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    const className = `theme-${color}-${mode}`;
    document.body.className = className;
  }, [color, mode]);

  const setColor = (newColor: ThemeColor) => {
    setColorState(newColor);
    localStorage.setItem('portfolio-color', newColor);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('portfolio-mode', newMode);
    
    if (newMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ color, mode, setColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

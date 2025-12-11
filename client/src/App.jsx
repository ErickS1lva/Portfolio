import { useState, useEffect, createContext, useContext } from "react";
import Home from "@sections/Home";

const ThemeContext = createContext(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

function ThemeProvider({ children }) {
  const [color, setColorState] = useState("blue");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedColor = localStorage.getItem("portfolio-color");
    const savedMode = localStorage.getItem("portfolio-mode");
    if (savedColor) setColorState(savedColor);
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    document.body.className = `theme-${color}-${mode}`;
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [color, mode]);

  const setColor = (newColor) => {
    setColorState(newColor);
    localStorage.setItem("portfolio-color", newColor);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("portfolio-mode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ color, mode, setColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

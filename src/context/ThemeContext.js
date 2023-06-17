"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const currentClassMode = window.document.body.classList

    mode === 'dark' ? currentClassMode.add('dark', 'bg-slate-900') : currentClassMode.remove('dark', 'bg-slate-900')
    console.log(currentClassMode);
    console.log(mode);
  }, [mode])
  

 return <ThemeContext.Provider value={{toggle, mode}}>
    {children}
  </ThemeContext.Provider>
};

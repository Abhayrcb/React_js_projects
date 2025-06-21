import { createContext,useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

export const useTheme =()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children})=>{
  const [isDark , setIsDark] = useState(false);

  const toggleTheme = ()=>{
    setIsDark((prevState)=>!prevState);
  }

  const Theme = isDark?"dark":"light";

  useEffect(()=>{
     document.documentElement.setAttribute("data-theme",Theme);
  },[isDark])

  return (
   <ThemeContext.Provider value={{Theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


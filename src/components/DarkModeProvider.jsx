import { createContext, useState } from "react";

export const DarkModeContext = createContext()
export default function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

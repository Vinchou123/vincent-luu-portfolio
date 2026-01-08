import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Forcer le dark mode
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

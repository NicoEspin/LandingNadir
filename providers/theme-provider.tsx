"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Cargar tema desde localStorage al montar el componente
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        setThemeState(storedTheme)
      }
    } catch (error) {
      console.warn('Error loading theme from localStorage:', error)
    }
    setMounted(true)
  }, [storageKey])

  // Aplicar tema al document y guardar en localStorage
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
        
    // Remover clases previas
    root.classList.remove('light', 'dark')
        
    // Aplicar nueva clase
    root.classList.add(theme)

    // Guardar en localStorage
    try {
      localStorage.setItem(storageKey, theme)
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error)
    }
  }, [theme, mounted, storageKey])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light')
  }

  // Prevenir hydration mismatch - pero mantener los children
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ 
        theme: defaultTheme, 
        toggleTheme: () => {}, 
        setTheme: () => {} 
      }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
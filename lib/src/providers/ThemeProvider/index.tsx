import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { defaultTheme } from '../../themes/default.theme'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

interface IThemeContext {
  theme: DefaultTheme
  changeTheme: (param: DefaultTheme) => void
}

export const ThemeContext = createContext({} as IThemeContext)

type TThemeProviderProps = {
  children: ReactNode
  appTheme?: DefaultTheme
}

export const ThemeProvider = ({
  children,
  appTheme = defaultTheme,
}: TThemeProviderProps) => {
  const [theme, setTheme] = useState(appTheme)

  useEffect(() => {
    setTheme(appTheme)
  }, [appTheme])

  const changeTheme = (theme: DefaultTheme) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

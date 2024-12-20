import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  color: {
    neutral: {
      darkest: '#000',
      dark: '#000',
      darker: '#000',
      medium: '#000',
      light: '#000',
      lighter: '#000',
      lightest: '#000',
      white: '#000',
      '55': '#000',
      '25': '#000',
    },
    brand: {
      dark: 'blue',
      medium: 'blue',
      light: 'blue',
      lighter: 'blue',
    },
    special: {
      yellow: 'yellow',
      purple: '#743AA1',
      pink: '#EA7AF4',
    },
    feedback: {
      alert: {
        vivid: 'yellow',
        pale: 'yellow',
      },
      error: {
        vivid: 'red',
        pale: 'red',
      },
      info: {
        vivid: 'blue',
        pale: 'blue',
      },
      success: {
        vivid: 'green',
        pale: 'green',
      },
    },
    text: {
      white: {
        dark: '#FFF',
        primary: '#FFF',
        light: '#FFF',
        lighter: '#FFF',
      },
      neutral: {
        dark: 'grey',
        primary: 'grey',
        light: 'grey',
        lighter: 'grey',
      },
    },
    secondary: {
      default: 'darkgreen',
      dark: 'darkgreen',
      light: 'darkgreen',
      lighter: 'darkgreen',
    },
    primary: {
      default: 'darkblue',
      dark: 'darkblue',
      light: 'darkblue',
      lighter: 'darkblue',
    },
  },
}

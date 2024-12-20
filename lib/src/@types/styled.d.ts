import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      neutral: {
        darkest: string
        darker: string
        dark: string
        medium: string
        light: string
        lighter: string
        lightest: string
        white: string
        '55': string
        '25': string
      }
      brand: {
        dark: string
        medium: string
        light: string
        lighter: string
      }
      special: {
        yellow: string
        purple: string
        pink: string
      }
      feedback: {
        alert: {
          vivid: string
          pale: string
        }
        error: {
          vivid: string
          pale: string
        }
        info: {
          vivid: string
          pale: string
        }
        success: {
          vivid: string
          pale: string
        }
      }
      text: {
        white: {
          dark: string
          primary: string
          light: string
          lighter: string
        }
        neutral: {
          dark: string
          primary: string
          light: string
          lighter: string
        }
      }
      secondary: {
        default: string
        dark: string
        light: string
        lighter: string
      }
      primary: {
        default: string
        dark: string
        light: string
        lighter: string
      }
    }
  }
}

import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      white: string
      black: {
        black: string
        inputs: string
        medium: string
        shape: string
      }
      gray: {
        gray: string
        grayHard: string
      }
      transparency: string
      semantic: {
        success: string
        warning: string
        error: string
        info: string
      }
    }
    fonts: {
      [key: string]: string
    }
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#ff9000',
    background: '#312E38',
    white: '#F4EDE8',
    transparency: 'rgba(0, 0, 0, 0.2)',
    black: {
      black: '#000000',
      inputs: '#232129',
      medium: '#28262E',
      shape: '#3E3B47',
    },
    gray: {
      gray: '#999591',
      grayHard: '#666360',
    },
    semantic: {
      success: '#007633',
      warning: '#6500b3',
      error: '#c53030',
      info: '#214c7b',
    },
  },
  fonts: {
    default: 'Roboto Slab',
  },
}

export default theme

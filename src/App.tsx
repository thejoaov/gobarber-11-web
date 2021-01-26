import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import ContextProvider from './hooks'
import theme from './styles/theme'
import Routes from './routes'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ContextProvider>
  </ThemeProvider>
)

export default App

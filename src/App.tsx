import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp';

import ContextProvider from './hooks'
import theme from './styles/theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      <SignIn />
    </ContextProvider>
  </ThemeProvider>
)

export default App

import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext'
import ToastContainer from './components/ToastContainer'
import theme from './styles/theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
  </ThemeProvider>
)

export default App

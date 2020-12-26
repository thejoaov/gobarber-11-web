import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import SignUp from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
import { findByTestID } from '../../../config/testConfig'
import { AuthProvider } from '../../../hooks/AuthContext'
import ToastContainer from '../../../components/ToastContainer'

let wrapper: ReactTestRenderer

const SignUpMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <SignUp />
    </AuthProvider>
    <ToastContainer />
  </ThemeProvider>
)

describe('SignUp test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<SignUpMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

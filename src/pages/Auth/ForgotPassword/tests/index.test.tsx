import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import ContextProvider from '@hooks'
import ForgotPassword from '..'

let wrapper: ReactTestRenderer

const ForgotPasswordMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <ForgotPassword />
      </ContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)

describe('ForgotPassword test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ForgotPasswordMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

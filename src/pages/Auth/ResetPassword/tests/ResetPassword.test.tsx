import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
import { findByTestID } from '@config/testConfig'
import ContextProvider from '@hooks'
import ResetPassword from '..'

let wrapper: ReactTestRenderer

const ResetPasswordMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <ResetPassword />
      </ContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)

describe('ResetPassword test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ResetPasswordMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should render in page all core components', async () => {
    const testInstance = wrapper.root

    const inputPasword = findByTestID(testInstance, 'input-password')
    const inputConfirmation = findByTestID(testInstance, 'input-password-confirmation')
    const submitButton = findByTestID(testInstance, 'submit-button')

    expect(inputConfirmation).toBeTruthy()
    expect(inputPasword).toBeTruthy()
    expect(submitButton).toBeTruthy()
  })

  // it('given invalid username and valid password, it should request login and return error', () => {});
})

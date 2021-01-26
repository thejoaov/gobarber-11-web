import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
import { findByTestID } from '@config/testConfig'
import ContextProvider from '@hooks'
import SignIn from '..'

let wrapper: ReactTestRenderer

const SignInMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <SignIn />
      </ContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)

describe('SignIn test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<SignInMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should render in page all core components', async () => {
    const testInstance = wrapper.root

    const inputPasword = findByTestID(testInstance, 'input-password')
    const inputEmail = findByTestID(testInstance, 'input-email')
    const submitButton = findByTestID(testInstance, 'submit-button')

    expect(inputEmail).toBeTruthy()
    expect(inputPasword).toBeTruthy()
    expect(submitButton).toBeTruthy()
  })

  // it('given invalid username and valid password, it should request login and return error', () => {});
})

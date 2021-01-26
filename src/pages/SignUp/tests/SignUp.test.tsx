import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
import ContextProvider from '@hooks'
import SignUp from '..'

let wrapper: ReactTestRenderer

const SignUpMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </ContextProvider>
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

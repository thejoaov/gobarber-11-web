import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import SignUp from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
import ContextProvider from '../../../hooks'

let wrapper: ReactTestRenderer

const SignUpMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      <SignUp />
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

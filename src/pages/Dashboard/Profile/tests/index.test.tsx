import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import Profile from '..'

jest.mock('@hooks/AuthContext', () => ({
  useAuth: jest.fn().mockReturnValue({
    user: {
      avatar_url: 'http://google.com',
      id: '1',
      name: 'test',
    },
  }), // default call
}))

let wrapper: ReactTestRenderer

const ProfileMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Profile />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

describe('Profile test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ProfileMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

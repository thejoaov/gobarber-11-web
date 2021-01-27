import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import ContextProvider from '@hooks'
import Dashboard from '..'

let wrapper: ReactTestRenderer

const DashboardMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <Dashboard />
      </ContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)

describe('Dashboard test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<DashboardMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

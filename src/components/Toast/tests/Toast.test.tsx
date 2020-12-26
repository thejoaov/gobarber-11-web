/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Toast from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
// import { findByTestID } from '../../../config/testConfig'
import { AuthProvider } from '../../../hooks/AuthContext'
import { ToastProps } from '../types'
import ToastContainer from '../../ToastContainer'

let wrapper: ReactTestRenderer
let initialProps: ToastProps = { title: 'test', testID: 'toast', type: 'success', description: 'test' }

const ToastMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <Toast {...initialProps} />
    </AuthProvider>
    <ToastContainer />
  </ThemeProvider>
)

describe('Toast test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<ToastMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import ToastContainer from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
// import { findByTestID } from '../../../config/testConfig';
import { AuthProvider } from '../../../hooks/AuthContext'
// import { ToastContainerProps } from '../types';

let wrapper: ReactTestRenderer
// let initialProps: ToastContainerProps = { testID: 'ToastContainer' };

const ToastContainerMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <></>
    </AuthProvider>
    <ToastContainer />
  </ThemeProvider>
)

describe('ToastContainer test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<ToastContainerMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

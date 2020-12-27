/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Toast from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
import { ToastProps } from '../types'
import { findByTestID } from '../../../config/testConfig'

let wrapper: ReactTestRenderer
let initialProps: ToastProps = {
  testID: 'toast',
  toast: { id: '1', title: 'test', type: 'success', description: 'test' },
}

const ToastMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Toast {...initialProps} />
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

  it('should render with different props', async () => {
    const testID = 'toast-error-2'
    const testInstance = wrapper.root

    initialProps = { testID, toast: { ...initialProps.toast, type: 'error', id: '2' } }
    await wrapper.update(<ToastMock />)

    const toast = findByTestID(testInstance, testID)
    expect(toast).toBeTruthy()
  })
})

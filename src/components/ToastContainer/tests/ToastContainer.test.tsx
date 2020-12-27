/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import ToastContainer from '..'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/global'
import { ToastMessage } from '../../../hooks/ToastContext/types'

let wrapper: ReactTestRenderer
let messages: ToastMessage[] = []

const ToastContainerMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ToastContainer messages={messages} />
  </ThemeProvider>
)

describe('ToastContainer test suite', () => {
  beforeEach(async () => {
    messages = []
    await act(async () => {
      wrapper = create(<ToastContainerMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should render some toast', async () => {
    const testInstance = wrapper.root
    messages = [{ id: '1', title: 'test' }]

    await wrapper.update(<ToastContainerMock />)

    const toast = testInstance.findByProps({ testID: 'toast-info-1' })

    expect(toast).toBeTruthy()
  })
})

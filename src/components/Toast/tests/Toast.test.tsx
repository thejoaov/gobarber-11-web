/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
import { findByTestID } from '@config/testConfig'

import Toast from '..'
import { Props } from '../types'

let wrapper: ReactTestRenderer
let initialProps: Props = {
  toast: { id: '1', title: 'test', type: 'success', description: 'test' },
}

const ToastMock: React.FC<Props> = props => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Toast {...props} />
  </ThemeProvider>
)

describe('Toast test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ToastMock {...initialProps} />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should render error toast', async () => {
    const testInstance = wrapper.root
    const props: Props = { ...initialProps, toast: { ...initialProps.toast, type: 'error' } }

    await wrapper.update(<ToastMock {...props} />)

    const toast = findByTestID(testInstance, 'toast-error-1')
    expect(toast).toBeTruthy()
  })
})

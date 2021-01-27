/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
import { findByTestID } from '@config/testConfig'
import Button from '..'

import { Props } from '../types'

let wrapper: ReactTestRenderer
let initialProps: Props = { name: 'test', testID: 'Button' }

const ButtonMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button {...initialProps} />
  </ThemeProvider>
)

describe('Button test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ButtonMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should render with loading indicator when loading = true', async () => {
    const testInstance = wrapper.root

    initialProps = { ...initialProps, loading: true }
    await wrapper.update(<ButtonMock />)

    const toast = findByTestID(testInstance, 'activity-indicator')
    expect(toast).toBeTruthy()
  })
})

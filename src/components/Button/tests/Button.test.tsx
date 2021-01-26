/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import Button from '..'

import { ButtonProps } from '../types'

let wrapper: ReactTestRenderer
let initialProps: ButtonProps = { name: 'test', testID: 'Button' }

const ButtonMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button {...initialProps} />
  </ThemeProvider>
)

describe('Button test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<ButtonMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

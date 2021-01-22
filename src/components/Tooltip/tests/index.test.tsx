/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global'
// import { findByTestID } from 'config/testConfig';
import Tooltip from '..'
import { TooltipProps } from '../types'

let wrapper: ReactTestRenderer
let initialProps: TooltipProps = { title: 'test', testID: 'Tooltip' }

const TooltipMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Tooltip {...initialProps} />
  </ThemeProvider>
)

describe('Tooltip test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<TooltipMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

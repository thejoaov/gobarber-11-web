/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import ActivityIndicator from '..'

import { Props } from '../types'

let wrapper: ReactTestRenderer
let initialProps: Props = { testID: 'activity-indicator' }

const ActivityIndicatorMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ActivityIndicator {...initialProps} />
  </ThemeProvider>
)

describe('ActivityIndicator test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<ActivityIndicatorMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

/**
 * = = = = = = = = = =
 *   A T E N T I O N
 * = = = = = = = = = =
 * After being able to test the hooks,
 * uncomment line 10 to 46, exclude the sum test
 * and change the file extension to .tsx;
 * The test here is made to pass, obviously.
 */
/* eslint-disable prefer-const */
import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import ContextProvider from '@hooks'
import Input from '..'
import { Props } from '../types'

jest.mock('@unform/core', () => ({
  useField: (name: any) => ({
    fieldName: name,
    error: null,
    defaultValue: '',
    registerField: () => name,
  }),
}))

let wrapper: ReactTestRenderer
let initialProps: Props = { name: 'test', testID: 'input' }

const InputMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      <Input {...initialProps} />
    </ContextProvider>
  </ThemeProvider>
)

describe('Input test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<InputMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})

import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { Api } from '@services/api'

import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import Dashboard from '..'

jest.mock('@hooks/AuthContext', () => ({
  useAuth: jest.fn().mockReturnValue({
    user: {
      avatar_url: 'http://google.com',
      id: '1',
      name: 'test',
    },
  }), // default call
}))

let wrapper: ReactTestRenderer
let listProviderAppointmentsSpy: jest.SpyInstance
let getProviderMonthAvailability: jest.SpyInstance

const DashboardMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Dashboard />
  </ThemeProvider>
)

describe('Dashboard test suite', () => {
  beforeEach(() => {
    listProviderAppointmentsSpy = jest.spyOn(Api, 'listProviderAppointments').mockResolvedValue([])
    getProviderMonthAvailability = jest
      .spyOn(Api, 'getProviderMonthAvailability')
      .mockResolvedValue([])

    act(() => {
      wrapper = create(<DashboardMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should request provider list appointments from api', () => {
    expect(listProviderAppointmentsSpy).toHaveBeenCalled()
  })

  it('should request provider month availability from api', () => {
    expect(getProviderMonthAvailability).toHaveBeenCalled()
  })
})

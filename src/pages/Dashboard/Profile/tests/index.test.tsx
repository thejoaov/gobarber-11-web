import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { AxiosPromise } from 'axios'

import { Api } from '@services/api'
import theme from '@styles/theme'
import GlobalStyle from '@styles/global'
// import { findByTestID } from '@config/testConfig'
import Profile from '..'

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

const ProfileMock: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Profile />
  </ThemeProvider>
)

describe('Profile test suite', () => {
  beforeEach(() => {
    listProviderAppointmentsSpy = jest
      .spyOn(Api, 'listProviderAppointments')
      .mockResolvedValue({} as AxiosPromise)
    getProviderMonthAvailability = jest
      .spyOn(Api, 'getProviderMonthAvailability')
      .mockResolvedValue({} as AxiosPromise)

    act(() => {
      wrapper = create(<ProfileMock />)
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

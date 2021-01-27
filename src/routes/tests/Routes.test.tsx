import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'
import { BrowserRouter, Switch } from 'react-router-dom'

import { findByTestID } from '@config/testConfig'
import Routes from '../Routes'

jest.mock('@hooks/AuthContext', () => ({
  useAuth: jest
    .fn()
    .mockReturnValue({ user: 'user' }) // default call
    .mockReturnValueOnce({ user: null }) // first call
    .mockReturnValueOnce({ user: 'user' }) // second call
    .mockReturnValueOnce({ user: null }), // third call
}))

let wrapper: ReactTestRenderer
const Component: React.FC<{ testID?: string }> = ({ ...props }) => <div {...props} />

const RoutesMock: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Routes
        component={() => <Component testID="dashboard" />}
        isPrivate
        exact
        path="/dashboard"
      />
      <Routes component={() => <Component testID="root" />} exact path="/" />
    </Switch>
  </BrowserRouter>
)

describe('Routes test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<RoutesMock />)
    })
  })

  it('should redirect to dashboard when user is not authenticated and try to access a private route', () => {
    const testInstance = wrapper.root

    const component = findByTestID(testInstance, 'root')
    expect(component).toBeTruthy()
  })

  it('should access a private route when user is authenticated', () => {
    const testInstance = wrapper.root

    const component = findByTestID(testInstance, 'dashboard')
    expect(component).toBeTruthy()
  })

  it('should redirect to dashboard when user is authenticated and try acess a non private route', () => {
    const testInstance = wrapper.root

    const component = findByTestID(testInstance, 'dashboard')
    expect(component).toBeTruthy()
  })
})

import React from 'react'
import { Switch } from 'react-router-dom'

import Dashboard from '@pages/Dashboard/Dashboard'
import SignIn from '@pages/Auth/SignIn'
import SignUp from '@pages/Auth/SignUp'
import ForgotPassword from '@pages/Auth/ForgotPassword'
import ResetPassword from '@pages/Auth/ResetPassword'

import Route from './Routes'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes

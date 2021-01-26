import React from 'react'
import { Route as ReactRouterDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from '@hooks/AuthContext'
import { RouteProps } from './types'

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...props }) => {
  const { user } = useAuth()

  return (
    <ReactRouterDOMRoute
      {...props}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard', state: { from: location } }} />
        )
      }}
    />
  )
}

export default Route

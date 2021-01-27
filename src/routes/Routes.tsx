import React from 'react'
import { Route as ReactRouterDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from '@hooks/AuthContext'
import { Props } from './types'

const Route: React.FC<Props> = ({ isPrivate = false, component: Component, ...props }) => {
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

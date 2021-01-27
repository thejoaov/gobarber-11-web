import { RouteProps as ReactRouterDOMProps } from 'react-router-dom'

export type RouteProps = {
  isPrivate?: boolean
  component: React.ComponentType
}

export type Props = Omit<ReactRouterDOMProps, 'component'> & RouteProps

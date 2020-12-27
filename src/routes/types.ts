import { RouteProps as ReactRouterDOMProps } from 'react-router-dom'

export interface RouteProps extends ReactRouterDOMProps {
  isPrivate?: boolean
  component: React.ComponentType
}

import React from 'react'
import ActivityIndicator from '../ActivityIndicator'
import { Container } from './styles'
import { Props } from './types'

const Button: React.FC<Props> = ({ children, loading, ...props }) => (
  <Container type="button" {...props} disabled={loading}>
    {loading ? <ActivityIndicator /> : <>{children}</>}
  </Container>
)

Button.defaultProps = {
  testID: 'button',
  loading: false,
}

export default Button

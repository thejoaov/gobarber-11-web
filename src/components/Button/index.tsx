import React from 'react'
import { Container } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container type="button" {...props}>
    {children}
  </Container>
)

Button.defaultProps = {
  testID: 'button',
}

export default Button

import React from 'react'

import { Container } from './styles'
import { Props } from './types'

const Tooltip: React.FC<Props> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

Tooltip.defaultProps = {
  testID: 'tooltip',
}

export default Tooltip

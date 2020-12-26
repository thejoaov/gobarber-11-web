import React from 'react'

import { Container } from './styles'
import { TooltipProps } from './types'

const Tooltip: React.FC<TooltipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip

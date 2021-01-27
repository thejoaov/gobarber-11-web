import React from 'react'

import { Container, Indicator } from './styles'
import { Props } from './types'

const ActivityIndicator: React.FC<Props> = props => {
  return (
    <Container>
      <Indicator {...props} />
    </Container>
  )
}

ActivityIndicator.defaultProps = {
  size: 20,
  thickness: 4,
  testID: 'activity-indicator',
}

export default ActivityIndicator

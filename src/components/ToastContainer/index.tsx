import React from 'react'

import Toast from '../Toast'

import { Container } from './styles'
import { ToastContainerProps } from './types'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container testID="toast-container">
      {!!messages && messages.map(item => <Toast toast={item} key={item.id} />)}
    </Container>
  )
}

export default ToastContainer

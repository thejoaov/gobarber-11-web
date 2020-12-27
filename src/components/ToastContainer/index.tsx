import React from 'react'
import { useTransition } from 'react-spring'

import Toast from '../Toast'

import { Container } from './styles'
import { ToastContainerProps } from './types'

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastWithTransitions = useTransition(toasts, toast => toast.id, {
    from: { right: '-120%', opacity: 0, transform: 'scale(-1)' },
    enter: { right: '0%', opacity: 1, transform: 'scale(1)' },
    leave: { right: '-120%', opacity: 0, transform: 'scale(-1)' },
  })

  return (
    <Container testID="toast-container">
      {toastWithTransitions.map(({ item, key, props }) => (
        <Toast toast={item} key={key} style={props} />
      ))}
    </Container>
  )
}

export default ToastContainer

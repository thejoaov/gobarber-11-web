import React from 'react'
import { useTransition } from 'react-spring'

import Toast from '../Toast'
import { Container } from './styles'
import { Props } from './types'

const ToastContainer: React.FC<Props> = ({ toasts, ...restProps }) => {
  const toastWithTransitions = useTransition(toasts, toast => toast.id, {
    from: { right: '-120%', opacity: 0, transform: 'scale(-1)' },
    enter: { right: '0%', opacity: 1, transform: 'scale(1)' },
    leave: { right: '-120%', opacity: 0, transform: 'scale(-1)' },
  })

  return (
    <Container {...restProps}>
      {toastWithTransitions.map(({ item, key, props }) => (
        <Toast toast={item} key={key} style={props} />
      ))}
    </Container>
  )
}

ToastContainer.defaultProps = {
  testID: 'toast-container',
}

export default ToastContainer

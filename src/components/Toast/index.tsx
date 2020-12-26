import React from 'react'
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle, FiXOctagon } from 'react-icons/fi'

import { Container } from './styles'
import { ToastProps } from './types'

const Toast: React.FC<ToastProps> = ({ title, description, ...props }) => {
  const getIcon = (): JSX.Element => {
    const icons = {
      info: <FiInfo />,
      warning: <FiAlertTriangle />,
      success: <FiCheckCircle />,
      error: <FiXOctagon />,
    }

    return icons[props.type]
  }

  return (
    <Container {...props}>
      {getIcon()}

      <div>
        <strong>{title}</strong>

        {!!description && <p>{description}</p>}

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  )
}

export default Toast

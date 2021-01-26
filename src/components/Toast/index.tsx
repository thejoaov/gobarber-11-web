/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle, FiXOctagon } from 'react-icons/fi'

import { useToast } from '@hooks/ToastContext'
import { Container } from './styles'
import { ToastProps } from './types'

const Toast: React.FC<ToastProps> = ({ toast, toast: { type = 'info' }, ...props }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [toast.id, removeToast])

  const getIcon = (): JSX.Element => {
    const icons = {
      info: <FiInfo size={24} />,
      warning: <FiAlertTriangle size={24} />,
      success: <FiCheckCircle size={24} />,
      error: <FiXOctagon size={24} />,
    }

    return icons[type]
  }

  return (
    <Container testID={props.testID || `toast-${type}-${toast.id}`} type={type} style={props.style}>
      {getIcon()}

      <div>
        <strong>{toast.title}</strong>

        {!!toast.description && <p>{toast.description}</p>}

        <button type="button" onClick={() => removeToast(toast.id)}>
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  )
}

export default Toast

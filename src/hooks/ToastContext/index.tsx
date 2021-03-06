import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { ToastContainer } from '@components'
import { ToastContextData, ToastMessage } from './types'

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description, callback, onClick, timeout = 3000 }: Omit<ToastMessage, 'id'>) => {
      const id = uuid()

      setToasts(state => [
        ...state,
        {
          id,
          type,
          title,
          description,
          timeout,
          callback,
          onClick,
        },
      ])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setToasts(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import ToastContainer from '../../components/ToastContainer'
import { ToastContextData, ToastMessage } from './types'

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuid()

    setMessages(state => [
      ...state,
      {
        id,
        type,
        title,
        description,
      },
    ])
  }, [])
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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

import React, { createContext, useCallback, useContext } from 'react'
import ToastContainer from '../../components/ToastContainer'
import { ToastContextData } from './types'

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast')
  }, [])
  const removeToast = useCallback(() => {
    console.log('removeToast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
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

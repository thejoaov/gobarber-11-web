import { CSSProperties } from 'react'

export type ToastProps = {
  testID?: string
  toast: {
    id: string
    title: string
    type?: 'success' | 'error' | 'info' | 'warning'
    description?: string
  }
  style: CSSProperties
}

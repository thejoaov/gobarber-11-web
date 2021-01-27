import { CSSProperties } from 'react'

export type ToastProps = {
  testID?: string
  toast: {
    id: string
    title: string
    type?: 'success' | 'error' | 'info' | 'warning'
    description?: string
    timeout?: number
    /** Callback passed when toast is unmounted */
    callback?<T>(): T | any
    /** onClick action */
    onClick?(): void
  }
  style?: CSSProperties
}

export type Props = ToastProps

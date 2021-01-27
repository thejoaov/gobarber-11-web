export type ToastContextData = {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

export type ToastMessage = {
  id: string
  type?: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  timeout?: number
  /** Callback passed when toast is unmounted */
  callback?<T>(): T | any
  /** onClick action */
  onClick?(): void
}

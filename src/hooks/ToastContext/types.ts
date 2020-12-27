export type ToastContextData = {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

export type ToastMessage = {
  id: string
  type?: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
}

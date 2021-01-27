import { ToastMessage } from '@hooks/ToastContext/types'

export type ToastContainerProps = {
  toasts?: ToastMessage[]
  testID?: string
}

export type Props = ToastContainerProps

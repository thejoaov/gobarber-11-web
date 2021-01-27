import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  testID?: string
  loading?: boolean
  enabled?: boolean
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export type InputProps = {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  testID?: string
}

export type Props = InputHTMLAttributes<HTMLInputElement> & InputProps

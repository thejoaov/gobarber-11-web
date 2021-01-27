import React, { useEffect, useRef, useState, useCallback } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

import { Container, Error } from './styles'
import { Props } from './types'

const Input: React.FC<Props> = ({ name, icon: Icon, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const theme = useTheme()

  const { fieldName, error, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...props}
      />

      {error && (
        <Error title={error} testID="tooltip-error">
          <FiAlertCircle color={theme.colors.semantic.error} size={20} />
        </Error>
      )}
    </Container>
  )
}

Input.defaultProps = {
  testID: 'input',
}

export default Input

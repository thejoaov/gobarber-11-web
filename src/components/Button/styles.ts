import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { ButtonProps } from './types'

export const Container = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.primary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    css`
       {
        background: ${({ theme }) => shade(0.2, theme.colors.primary)};
      }
    `}

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`

import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.black.inputs};
  padding: 16px;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray.grayHard};

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.semantic.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};

      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  display: flex;
  align-items: center;

  input {
    color: ${({ theme }) => theme.colors.white};

    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray.grayHard};
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.colors.semantic.error};
    color: ${({ theme }) => theme.colors.white};

    &::before {
      border-color: ${({ theme }) => theme.colors.semantic.error} transparent;
    }
  }
`

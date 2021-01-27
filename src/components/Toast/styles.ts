import { transparentize } from 'polished'
import { animated } from 'react-spring'
import styled from 'styled-components'
import { ToastProps } from './types'

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px
    ${({ theme, toast }) => transparentize(0.5, theme.colors.semantic[toast?.type || 'info'])};
  display: flex;
  background: ${({ theme, toast }) =>
    transparentize(0.3, theme.colors.semantic[toast?.type || 'info'])};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme, toast }) => theme.colors.semantic[toast?.type || 'info']};
    cursor: pointer;
  }
  transition: background 0.2s;

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`

import styled from 'styled-components'
import { TooltipProps } from './types'

export const Container = styled.div<TooltipProps>`
  position: relative;

  span {
    width: 160px;
    background: ${({ theme }) => theme.colors.primary};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`

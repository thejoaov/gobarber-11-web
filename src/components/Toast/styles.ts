import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div<{ testID: string; type: 'success' | 'warning' | 'error' | 'info' }>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px ${({ theme, type }) => transparentize(0.4, theme.colors.semantic[type])};
  display: flex;
  background: ${({ theme, type }) => transparentize(0.1, theme.colors.semantic[type])};
  color: ${({ theme }) => theme.colors.white};
  margin: 10px;

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

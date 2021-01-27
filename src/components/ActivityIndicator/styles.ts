import styled, { keyframes } from 'styled-components'

import { Props } from './types'

const animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Indicator = styled.div<Props>`
  border: ${({ thickness }) => thickness}px solid
    ${({ theme, ringColor }) => ringColor || theme.colors.gray.grayHard};
  border-top: ${({ thickness }) => thickness}px solid
    ${({ theme, barColor }) => barColor || theme.colors.black.inputs};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${animation} 2s linear infinite;
`

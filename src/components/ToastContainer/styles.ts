import styled from 'styled-components'
import { ToastContainerProps } from './types'

export const Container = styled.div<ToastContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;

  > div + div {
    margin-top: 10px;
  }
`

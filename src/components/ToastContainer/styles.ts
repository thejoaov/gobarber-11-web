import styled from 'styled-components'

export const Container = styled.div<{ testID: string }>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;

  > div + div {
    margin-top: 10px;
  }
`

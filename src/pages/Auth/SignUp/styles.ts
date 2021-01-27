import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signUpBgImg from '@assets/sign-up-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity:1;
    transform: translateX(0);
  }

`

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => shade(0.2, theme.colors.white)};
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.white)};
    }
  }
`

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBgImg}) no-repeat center;
  background-size: cover;
  animation: ${appear} 1s;
`

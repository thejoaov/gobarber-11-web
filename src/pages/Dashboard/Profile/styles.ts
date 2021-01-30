import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  > header {
    height: 144px;
    background: ${({ theme }) => theme.colors.black.medium};
    display: flex;
    align-items: center;
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      svg {
        color: ${({ theme }) => theme.colors.gray.gray};
        width: 24px;
        height: 24px;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;
  width: 100%;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
    hr {
      margin: 10px;
      /* border: 0.5px solid ${({ theme }) => theme.colors.gray.grayHard}; */
      border: 0 transparent;
    }
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
`

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.colors.background};
    }
    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`

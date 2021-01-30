import { shade } from 'polished'
import styled from 'styled-components'
import ArrowLeftIcon from '@assets/ArrowLeftIcon.svg'
import ArrowRightIcon from '@assets/ArrowRightIcon.svg'

export const Container = styled.div``

export const Header = styled.header`
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.black.medium};
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  min-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: ${({ theme }) => theme.colors.gray.gray};
      width: 20px;
      height: 20px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      transition: 0.2s;
      &:hover {
        opacity: 0.6;
      }
    }
  }
`
export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;
  h1 {
    font-size: 36px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  span + span {
    text-transform: capitalize;
  }

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    font-weight: 500;
    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${({ theme }) => theme.colors.primary};
      margin: 0 8px;
    }
  }
`

export const NextAppointment = styled.div`
  margin-top: 64px;
  > strong {
    color: ${({ theme }) => theme.colors.gray.gray};
    font-size: 20px;
    font-weight: 400;
  }
  div {
    background: ${({ theme }) => theme.colors.black.medium};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      background: ${({ theme }) => theme.colors.primary};
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.black.medium};
    }
    strong {
      margin-left: 24px;
      color: ${({ theme }) => theme.colors.white};
    }
    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.gray.gray};
      svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 8px;
      }
    }
  }
`

export const Calendar = styled.aside`
  width: 380px;
  margin-bottom: 1rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.white};

  > div {
    text-align: center;
  }

  .DayPicker {
    border-radius: 10px;
    font-size: 16px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: ${({ theme }) => theme.colors.black.shape};
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: ${({ theme }) => theme.colors.gray.gray} !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.black.medium};
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.white};

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: ${({ theme }) => theme.colors.gray.grayHard};
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${({ theme }) => theme.colors.black.shape};
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${({ theme }) => shade(0.2, theme.colors.black.medium)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.white};
  }

  .DayPicker-Day--disabled {
    color: ${({ theme }) => theme.colors.gray.grayHard};
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${({ theme }) => theme.colors.primary} !important;
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.colors.black.inputs} !important;
  }
`

export const Section = styled.section`
  margin-top: 48px;
  > strong {
    color: ${({ theme }) => theme.colors.gray.gray};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black.medium};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: ${({ theme }) => theme.colors.gray.gray};
  }
`

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    width: 70px;
    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 8px;
    }
  }
  div {
    flex: 1;
    background: ${({ theme }) => theme.colors.black.medium};
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    margin-left: 24px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.black.medium};
    }
    strong {
      margin-left: 16px;
      color: ${({ theme }) => theme.colors.white};
      font-size: 20px;
      font-weight: 500;
    }
  }
`

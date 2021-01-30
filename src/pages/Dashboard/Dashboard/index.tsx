import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { FiClock, FiPower } from 'react-icons/fi'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { isToday, format, isThisMonth } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { dayPickerConfig } from '@config/dayPickerConfig'
import { useAuth } from '@hooks/AuthContext'
import logoImg from '@assets/logo.svg'
import { Api } from '@services/api'

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Section,
  Appointment,
  NextAppointment,
  Calendar,
} from './styles'
import { MonthAvailabilityItem } from './types'

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[]>([])

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day)
    }
  }, [])

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month)
  }, [])

  useEffect(() => {
    Api.getProviderMonthAvailability(
      user.id,
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
    ).then(response => {
      setMonthAvailability(response.data)
    })
  }, [currentMonth, user.id])

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()

        return new Date(year, month, monthDay.day)
      })

    return dates
  }, [currentMonth, monthAvailability])

  const selectedDateAsText = useMemo(() => {
    if (isThisMonth(selectedDate)) {
      return format(selectedDate, "'Dia' dd", {
        locale: ptBR,
      })
    }
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    })
  }, [selectedDate])

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', {
      locale: ptBR,
    })
  }, [selectedDate])

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src={
                user.avatar_url ||
                'https://odia.ig.com.br/_midias/jpg/2020/10/02/1200x750/1_1637z75ryqnj7dfso1bvrz839-19948053.jpg'
              }
              alt={user.name}
            />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          {isToday(selectedDate) && <span>Hoje | </span>}
          <span>{selectedDateAsText} | </span>

          <span>{selectedWeekDay}</span>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://odia.ig.com.br/_midias/jpg/2020/10/02/1200x750/1_1637z75ryqnj7dfso1bvrz839-19948053.jpg"
                alt="Nome do usuário"
              />

              <strong>Nome do usuário</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://odia.ig.com.br/_midias/jpg/2020/10/02/1200x750/1_1637z75ryqnj7dfso1bvrz839-19948053.jpg"
                  alt="Nome do usuário"
                />

                <strong>Nome do usuário</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://odia.ig.com.br/_midias/jpg/2020/10/02/1200x750/1_1637z75ryqnj7dfso1bvrz839-19948053.jpg"
                  alt="Nome do usuário"
                />

                <strong>Nome do usuário</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://odia.ig.com.br/_midias/jpg/2020/10/02/1200x750/1_1637z75ryqnj7dfso1bvrz839-19948053.jpg"
                  alt="Nome do usuário"
                />

                <strong>Nome do usuário</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            {...dayPickerConfig}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
          />
        </Calendar>
      </Content>
    </Container>
  )
}

export default Dashboard

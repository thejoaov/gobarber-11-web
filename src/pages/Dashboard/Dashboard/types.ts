import { Appointment } from '@services/api/types'

export type MonthAvailabilityItem = {
  day: number
  available: boolean
}

export type AppointmentFormatted = Appointment & {
  hourFormatted: string
}

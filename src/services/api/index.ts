/* eslint-disable @typescript-eslint/camelcase */
import { AxiosPromise } from 'axios'
import { API } from './config'
import { LoginResponse, SignUpResponse, Appointment, ProviderMonthAvailability } from './types'

export const Api = {
  /**
   * Send a request to login
   */
  login: (email: string, password: string): AxiosPromise<LoginResponse> =>
    API.post('/sessions', {
      password,
      email,
    }),

  /**
   * Send a request to sign up
   */
  signUp: ({
    name,
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }): AxiosPromise<SignUpResponse> =>
    API.post('/users', {
      name,
      password,
      email,
    }),

  /**
   * Send a request to forgot password
   */
  forgotPassword: (email: string): AxiosPromise<void> =>
    API.post('/password/forgot', {
      email,
    }),

  /**
   * Send a request to reset password
   */
  resetPassword: ({
    password,
    passwordConfirmation,
    token,
  }: {
    password: string
    passwordConfirmation: string
    token: string
  }): AxiosPromise<void> =>
    API.post('/password/reset', {
      password,
      password_confirmation: passwordConfirmation,
      token,
    }),

  /**
   * Get provider month availability
   */
  getProviderMonthAvailability: (
    user_id: string,
    year: number,
    month: number,
  ): AxiosPromise<ProviderMonthAvailability[]> =>
    API.get(`/providers/${user_id}/month-availability`, {
      params: { year, month },
    }),

  /**
   * List provider appointments
   */
  listProviderAppointments: (
    year: number,
    month: number,
    day: number,
  ): AxiosPromise<Appointment[]> =>
    API.get('/appointments/me', {
      params: {
        year,
        month,
        day,
      },
    }),
}

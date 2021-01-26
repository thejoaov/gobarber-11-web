import { AxiosPromise } from 'axios'
import { API } from './config'

export const Api = {
  /**
   * Send a request to login
   */
  login: ({ email, password }: { email: string; password: string }): AxiosPromise<any> =>
    API.post('sessions', {
      password,
      email,
    }),

  /**
   * Send a request to sign up
   */
  signUp: ({ name, email, password }: { name: string; email: string; password: string }): AxiosPromise<any> =>
    API.post('users', {
      name,
      password,
      email,
    }),
}

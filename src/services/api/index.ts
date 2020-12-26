import { AxiosPromise } from 'axios'
import { ApiConfig } from './ApiConfig'

export const Api = {
  /**
   * Send a request to login
   */
  login: ({ email, password }: { email: string; password: string }): AxiosPromise<any> =>
    ApiConfig.post('sessions', {
      password,
      email,
    }),
}

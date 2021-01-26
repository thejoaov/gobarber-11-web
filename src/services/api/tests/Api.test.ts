import { Api } from '..'
import { API } from '../config'

const fakeResponse = { data: {}, status: 200 }

describe('Api service test suite', () => {
  beforeEach(() => {
    jest.spyOn(API, 'get').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'post').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'delete').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'put').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'patch').mockResolvedValue(fakeResponse)
  })

  it('should define all functions', () => {
    expect(Api.login).toBeDefined()
    expect(Api.signUp).toBeDefined()
  })

  describe('login', () => {
    it('should request sign in user', async () => {
      const email = 'hermann.kaulke@lebsack.com'
      const password = '123456'

      await expect(Api.login({ email, password })).resolves.toEqual(fakeResponse)
    })
  })

  describe('signup', () => {
    it('should request sign up user', async () => {
      const name = 'naruto uzumaki'
      const email = 'hermann.kaulke@lebsack.com'
      const password = '123456'

      await expect(Api.signUp({ name, email, password })).resolves.toEqual(fakeResponse)
    })
  })
})

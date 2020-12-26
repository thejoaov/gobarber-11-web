import { Storage } from '..'

describe('Storage service test suite', () => {
  beforeEach(() => {
    jest.spyOn(localStorage, 'setItem')
    jest.spyOn(localStorage, 'getItem')
    jest.spyOn(localStorage, 'removeItem')
    localStorage.clear()
  })

  it('should define all functions', () => {
    expect(Storage.clearUser).toBeDefined()
    expect(Storage.setItems).toBeDefined()
    expect(Storage.getItem).toBeDefined()
    expect(Storage.remove).toBeDefined()
  })

  describe('setItems', () => {
    it('should be able to set items to localStorage', () => {
      const items = [
        { name: 'abc', data: { name: 'julien', id: 1 } },
        { name: 'cba', data: 2 },
        { name: 'bac', data: 'nani' },
        { name: 'acb', data: ['a', 'b', { name: 'c' }] },
      ]

      Storage.setItems(items)

      expect(localStorage.setItem).toBeCalledTimes(items.length)
      items.forEach(item => {
        expect(localStorage.setItem).toBeCalledWith(`@gobarber:${item.name}`, JSON.stringify(item.data))
      })
      items.forEach(item => {
        expect(JSON.parse(localStorage.getItem(`@gobarber:${item.name}`) as string)).toEqual(item.data)
      })
    })
  })

  describe('getItem', () => {
    it('should be able to get an existing item in localStorage with success', () => {
      const testItem = { test: 'test' }
      localStorage.setItem('@gobarber:test', JSON.stringify(testItem))

      const getItem = Storage.getItem('test')

      expect(getItem).toEqual(testItem)
    })

    it('should return error if no items were found', () => {
      const getItem = Storage.getItem('test')

      expect(getItem).toBeFalsy()
    })
  })

  describe('remove', () => {
    it('should remove existing item in localStorage', () => {
      const testItem = 'test'
      localStorage.setItem('test', testItem)

      Storage.remove('test')

      expect(localStorage.getItem('test')).toBeFalsy()
    })

    it('should not remove other existing items in localStorage', () => {
      const testItem1 = 'test1'
      const testItem2 = 'test2'
      localStorage.setItem('test1', testItem1)
      localStorage.setItem('test2', testItem2)

      Storage.remove('test1')

      expect(localStorage.getItem('test1')).toBeFalsy()
      expect(localStorage.getItem('test2')).toBeTruthy()
    })
  })

  describe('clearUser', () => {
    it('should be able to clear current user info and token in localStorage', () => {
      const token = 'abc'
      const user = { name: 'julien', id: 1 }
      Storage.setItems([
        { name: 'token', data: token },
        { name: 'user', data: user },
      ])

      Storage.clearUser()

      expect(Storage.getItem('token')).toBeFalsy()
      expect(Storage.getItem('user')).toBeFalsy()
    })
  })
})

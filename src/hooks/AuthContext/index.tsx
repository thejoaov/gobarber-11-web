import React, { createContext, useCallback, useContext, useState } from 'react'
import { Api } from 'services/api'
import { Storage } from 'services/storage'
import { AuthContextData, AuthState } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = Storage.getItem('token')
    const user = Storage.getItem('user')

    if (token && user) {
      return { token, user }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ password, email }) => {
    const response = await Api.login({
      password,
      email,
    })

    const { token, user } = response.data

    await Storage.setItems([
      { name: 'token', data: token },
      { name: 'user', data: user },
    ])

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    Storage.clearUser()

    setData({} as AuthState)
  }, [])

  return <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an auth Provider')
  }

  return context
}

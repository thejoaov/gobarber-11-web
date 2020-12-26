export interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export interface AuthState {
  token: string
  user: object
}

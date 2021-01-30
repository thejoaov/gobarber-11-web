import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import { useToast } from '@hooks/ToastContext'
import logoImg from '@assets/logo.svg'
import getValidationErrors from '@utils/getValidationErrors'
import { useAuth } from '@hooks/AuthContext'
import { Api } from '@services/api'
import { Input, Button } from '@components'

import { Container, Content, Background, AnimatedContainer } from './styles'
import { ResetPasswordFormData } from './types'

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()
  const { search } = useLocation()
  const urlParams = new URLSearchParams(search)

  // useEffect(() => {
  //   const email = urlParams.get('email')
  //   const token = urlParams.get('token')

  //   if (!email && !token) {
  //     history.push('/')
  //   }
  // })

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        setLoading(true)
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          password: Yup.string()
            .min(6, 'Senha de no mínimo 6 caracteres')
            .required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const email = `${urlParams.get('email')}`
        const token = `${urlParams.get('token')}`

        if (!email && !token) {
          throw new Error('Email ou token não encontrados.')
        }

        await Api.resetPassword({
          password: data.password,
          passwordConfirmation: data.password_confirmation,
          token,
        })

        addToast({
          title: 'Senha redefinida com sucesso',
          description:
            'Sua senha foi redefinida com sucesso. Aguarde enquanto fazemos seu login automaticamente.',
          type: 'success',
          timeout: 5000,
          callback: async () => {
            await signIn({ email, password: data.password })
            history.push('/dashboard')
          },
        })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)

          return
        }
        setLoading(false)

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        })
      }
    },
    [signIn, addToast, urlParams, history],
  )

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Redefina sua senha</h1>

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
              testID="input-password"
            />

            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirmação"
              testID="input-password-confirmation"
            />

            <Button loading={loading} type="submit" testID="submit-button">
              Entrar
            </Button>
          </Form>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default ResetPassword

import React, { useCallback, useRef } from 'react'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Container, Content, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import logoImg from '../../assets/logo.svg'
import getValidationErrors from '../../utils/getValidationErrors'
import { useAuth } from '../../hooks/AuthContext'
import { SignInFormData } from './types'
import { useToast } from '../../hooks/ToastContext'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast, removeToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
          password: Yup.string().min(6, 'Senha de no mínimo 6 caracteres').required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({ email: data.email, password: data.password })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)
        }

        addToast({ title: 'Erro', type: 'error', description: 'Verifique seu usuário e senha e tente novamente' })
      }
    },
    [signIn, addToast],
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" type="email" placeholder="Email" testID="input-email" />

          <Input icon={FiLock} name="password" type="password" placeholder="Senha" testID="input-password" />

          <Button type="submit" testID="submit-button">
            Entrar
          </Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="criar conta">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn

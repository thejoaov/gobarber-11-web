import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { useToast } from '@hooks/ToastContext'
import logoImg from '@assets/logo.svg'
import getValidationErrors from '@utils/getValidationErrors'
import { useAuth } from '@hooks/AuthContext'
import { Input, Button } from '@components'

import { Container, Content, Background, AnimatedContainer } from './styles'
import { SignInFormData } from './types'

const SignIn: React.FC = () => {
  const [errorCount, setErrorCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true)
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
          password: Yup.string()
            .min(6, 'Senha de no mínimo 6 caracteres')
            .required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({ email: data.email, password: data.password })
        history.push('/dashboard')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)

          return
        }

        if (errorCount <= 3) {
          setErrorCount(errorCount + 1)
        }

        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description: 'Verifique seu email e senha e tente novamente',
        })

        if (errorCount >= 3) {
          addToast({
            title: 'Problemas no login? 😅',
            description: 'Redefina sua senha clicando aqui',
            type: 'warning',
            onClick: () => history.push('/forgot-password'),
          })
        }
      } finally {
        setLoading(false)
      }
    },
    [signIn, addToast, errorCount, history],
  )

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu logon</h1>

            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="Email"
              testID="input-email"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
              testID="input-password"
            />

            <Button loading={loading} type="submit" testID="submit-button">
              Entrar
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn

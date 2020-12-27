import React, { useCallback, useRef } from 'react'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background, AnimatedContainer } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utils/getValidationErrors'
import { Api } from '../../services/api'
import { useToast } from '../../hooks/ToastContext'
import { SignUpFormData } from './types'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
          password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await Api.signUp(data)

        history.push('/')

        addToast({
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login no GoBarber!',
          type: 'success',
        })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
        })
      }
    },
    [addToast, history],
  )

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>

            <Input testID="input-name" icon={FiUser} name="name" placeholder="Nome" />
            <Input testID="input-email" icon={FiMail} name="email" type="email" placeholder="Email" />
            <Input testID="input-password" icon={FiLock} name="password" type="password" placeholder="Senha" />

            <Button testID="submit-button" type="submit">
              Cadastrar
            </Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Fazer login
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  )
}

export default SignUp

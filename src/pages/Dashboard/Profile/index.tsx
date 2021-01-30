import React, { useCallback, useRef, useState } from 'react'
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { Api } from '@services/api'
import { useAuth } from '@hooks/AuthContext'
import { useToast } from '@hooks/ToastContext'
import getValidationErrors from '@utils/getValidationErrors'
import userImg from '@assets/user.svg'
import { Input, Button } from '@components'

import { Container, Content, AvatarInput } from './styles'
import { ProfileFormData } from './types'

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()

  const [loading, setLoading] = useState(false)
  // const history = useHistory()

  const { user } = useAuth()

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        setLoading(true)

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
          old_password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await Api.updateProfile(data)

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description: 'Seu perfil foi atualizado com sucesso.',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao fazer sua atualização de perfil, tente novamente.',
        })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}>
          <AvatarInput>
            <img src={user.avatar_url || userImg} alt={user.name} />
            <button type="button">
              <FiCamera />
            </button>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <hr />

          <Input name="old_password" icon={FiLock} type="password" placeholder="Senha atual" />

          <Input name="password" icon={FiLock} type="password" placeholder="Nova senha" />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button loading={loading} type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile

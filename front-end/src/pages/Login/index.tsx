import React, { useCallback, useContext, useRef } from 'react'
import { AnimatedContent, Background, Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'
import { useSession } from '../../context/SessionContext'
import { useToast } from '../../context/ToastContext'

interface LoginData {
	email: string
	password: string
}

const Login: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	const { login } = useSession()
	const { addToast } = useToast()
	const history = useHistory()

	const handleSubmit = useCallback(
		async (data: LoginData) => {
			try {
				formRef.current?.setErrors({})
				const schema = Yup.object().shape({
					email: Yup.string()
						.required('Email obrigatório')
						.email('Digite um Email válido'),
					password: Yup.string().required('Senha obrigatória'),
				})

				await schema.validate(data, { abortEarly: false })

				login({ email: data.email, password: data.password })
				history.push('/dashboard')
			} catch (error) {
				const errors = getValidationErrors(error)
				formRef.current?.setErrors(errors)
				addToast({
					title: 'Aconteceu algum erro',
					descricao: 'Campos',
					type: 'error',
				})
			}
		},
		[login, addToast, history]
	)

	return (
		<Container>
			<Content>
				<AnimatedContent>
					<img src={logoImg} alt="Logo" />
					<Form ref={formRef} onSubmit={handleSubmit}>
						<h1>Faça seu logon</h1>
						<Input
							icon={FiMail}
							type="text"
							name="email"
							placeholder="E-mail"
							id=""
						></Input>
						<Input
							icon={FiLock}
							type="password"
							name="password"
							placeholder="Senha"
							id=""
						/>
						<Button type="submit">Entrar</Button>
						<a href="forgot">Esqueci minha senha</a>
					</Form>

					<Link to="/cadastro">
						<FiLogIn />
						Criar conta
					</Link>
				</AnimatedContent>
			</Content>
			<Background />
		</Container>
	)
}

export default Login

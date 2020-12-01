import React, { FormHTMLAttributes, useCallback, useRef } from 'react'
import { Background, Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

const Cadastro: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	console.log(formRef)

	const handleSubmit = useCallback(async (data: any) => {
		try {
			formRef.current?.setErrors({})
			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string()
					.required('Email obrigatório')
					.email('Digite um Email válido'),
				password: Yup.string().min(6, 'No minimo 6 digitos'),
			})

			await schema.validate(data, { abortEarly: false })
		} catch (error) {
			const errors = getValidationErrors(error)
			formRef.current?.setErrors(errors)
		}
	}, [])

	return (
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="Logo" />
				<Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>
					<Input
						icon={FiUser}
						type="text"
						name="name"
						placeholder="Nome"
						id=""
					/>
					<Input
						icon={FiMail}
						type="text"
						name="email"
						placeholder="E-mail"
						id=""
					/>
					<Input
						icon={FiLock}
						type="password"
						name="password"
						placeholder="Senha"
						id=""
					/>
					<Button type="submit">Cadastrar</Button>
				</Form>

				<Link to="/login">
					<FiArrowLeft />
					Voltar para logon
				</Link>
			</Content>
		</Container>
	)
}

export default Cadastro

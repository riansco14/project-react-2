import React, { useCallback } from 'react'
import { Background, Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'

const Cadastro: React.FC = () => {
	const handleSubmit = useCallback(async (data: any) => {
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string()
					.required('Email obrigatório')
					.email('Digite um Email válido'),
				password: Yup.string().min(6, 'No minimo 6 digitos'),
			})

			await schema.validate(data, { abortEarly: false })
		} catch (error) {
			console.log(error)
		}
	}, [])

	return (
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="Logo" />
				<Form initialData={{}} onSubmit={handleSubmit}>
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

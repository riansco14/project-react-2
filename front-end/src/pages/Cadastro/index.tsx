import React from 'react'
import { Background, Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'

const Cadastro: React.FC = () => {
	function handleSubmit(data: any): void {
		console.log(data)
	}
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

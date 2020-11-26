import React from 'react'
import { Background, Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Login: React.FC = () => (
	<Container>
		<Content>
			<img src={logoImg} alt="Logo" />
			<form action="POST">
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
			</form>

			<a href="">
				<FiLogIn />
				Criar conta
			</a>
		</Content>
		<Background />
	</Container>
)

export default Login

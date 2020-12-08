import React from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import {
	Container,
	ForgotPassword,
	ForgotPasswordText,
	Title,
	CriarContaButton,
	CriarContaButtonText,
} from './styles'

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from 'react-native-vector-icons/Feather'

const Login: React.FC = () => {
	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				enabled
			>
				<ScrollView
					contentContainerStyle={{ flex: 1 }}
					keyboardShouldPersistTaps="handled"
				>
					<Container>
						<Image source={logoImg}></Image>
						<Title>Faça seu logon</Title>
						<Input
							name="email"
							icon="mail"
							placeholder="E-Mail"
						></Input>
						<Input
							name="password"
							icon="lock"
							placeholder="Senha"
						></Input>
						<Button>Entrar</Button>

						<ForgotPassword onPress={() => console.log('a')}>
							<ForgotPasswordText>
								Esqueci minha senha
							</ForgotPasswordText>
						</ForgotPassword>
					</Container>
					<CriarContaButton>
						<Icon name="log-in" size={20} color="#ff9000"></Icon>
						<CriarContaButtonText>
							Criar uma conta
						</CriarContaButtonText>
					</CriarContaButton>
				</ScrollView>
			</KeyboardAvoidingView>
		</>
	)
}

export default Login

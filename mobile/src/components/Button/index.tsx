import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Container, TextButton } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

const Button: React.FC = ({ children }) => {
	return (
		<Container>
			<TextButton>{children}</TextButton>
		</Container>
	)
}

export default Button

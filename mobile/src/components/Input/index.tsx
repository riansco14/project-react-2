import React from 'react'
import { Container, TextInputCustom, IconCustom } from './styles'
import { TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
	name: string
	icon: string
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
	return (
		<Container>
			<IconCustom name={icon} size={20} color="#666360" />
			<TextInputCustom
				keyboardAppearance="dark"
				placeholderTextColor="#666360"
				{...rest}
			></TextInputCustom>
		</Container>
	)
}

export default Input

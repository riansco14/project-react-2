import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

interface ContainerProps {
	isFocused: boolean
	isPreenchido: boolean
	isCampoErrado: boolean
}

export const Container = styled.View`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: #232129;
	border: 2px solid #232129;

	color: #666360;

	border-radius: 10px;

	margin-bottom: 12px;

	flex-direction: row;
	align-items: center;
`

export const IconCustom = styled(Icon)`
	margin-right: 16px;
`

export const TextInputCustom = styled.TextInput`
	flex: 1;
	font-family: 'RobotoSlab-Regular';
	font-size: 16px;
	color: #fff;
`

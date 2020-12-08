import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 30px;
`

export const Title = styled.Text`
	color: white;
	font-family: 'RobotoSlab-Medium';
	font-size: 24px;
	margin: 64px 0 24px;
`

export const ForgotPassword = styled.TouchableOpacity`
	margin-top: 24px;
`
export const ForgotPasswordText = styled.Text`
	color: #f4ede8;
	font-size: 14px;
	font-family: 'RobotoSlab-Regular';
`

export const CriarContaButton = styled.TouchableOpacity`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;

	padding: 16px 0;
	background: #312e38;
	border-top-width: 1px;
	border-color: #212129;

	flex-direction: row;
	justify-content: center;
	align-items: center;
`
export const CriarContaButtonText = styled.Text`
	color: #ff9000;
	font-size: 18px;
	margin-left: 16px;
	font-family: 'RobotoSlab-Regular';
`

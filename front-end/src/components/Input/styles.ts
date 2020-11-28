import styled, { css } from 'styled-components'

interface ContainerProps {
	isFocused: boolean
	isPreenchido: boolean
}

const Container = styled.div<ContainerProps>`
	background: #232129;
	border-radius: 10px;
	border: 2px solid #232129;
	padding: 16px;
	width: 100%;
	color: #666360;

	display: flex;
	align-items: center;

	${(props) => {
		if (props.isFocused)
			return css`
				border-color: #ff9000;
				color: #ff9000;
			`
	}}

	${(props) => {
		if (props.isPreenchido)
			return css`
				color: #ff9000;
			`
	}}

	& + div {
		margin-top: 8px;
	}

	input {
		flex: 1;
		background: transparent;
		border: 0;
		color: #f4ede8;

		&&::placeholder {
			color: #666360;
		}
	}

	svg {
		margin-right: 16px;
	}
`
export default Container

import styled from 'styled-components'
import { shade } from 'polished'

const Container = styled.button`
	background: #ff9000;
	width: 100%;
	padding: 16px;
	margin-top: 16px;
	border-radius: 10px;
	border: 0;
	font-weight: 500;
	transition: background-color 0.2s;

	&:hover {
		background: ${shade(0.3, '#ff9000')};
	}
`
export default Container

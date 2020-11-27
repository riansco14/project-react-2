import styled from 'styled-components'
import LoginBackground from '../../assets/sign-up-background.png'
import { shade } from 'polished'

export const Container = styled.div`
	height: 100vh;
	display: flex;

	align-items: stretch;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	place-content: center;

	width: 100%;
	max-width: 700px;

	form {
		margin: 80px 0;
		width: 340px;
		text-align: center;

		h1 {
			margin-bottom: 24px;
		}

		a {
			margin-top: 24px;
			color: #f4ede8;
			text-decoration: none;
			display: block;

			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}
	> a {
		display: block;
		color: #fff;
		text-decoration: none;

		display: flex;
		align-items: center;

		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}

		svg {
			margin-right: 16px;
		}
	}
`

export const Background = styled.div`
	flex: 1;
	background: url(${LoginBackground}) no-repeat center;
	background-size: cover;
`

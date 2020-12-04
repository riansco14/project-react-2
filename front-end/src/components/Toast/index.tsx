import React from 'react'
import { ToastMessages, useToast } from '../../context/ToastContext'
import { Container } from './styles'
import ToastItem from './ToastItem'
import { useTransition } from 'react-spring'

interface ToastProps {
	messages: Array<ToastMessages>
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
	const messagesAnimated = useTransition(messages, (message) => message.id, {
		from: {
			right: '-120%',
			opacity: 0,
		},
		enter: {
			right: '0%',
			opacity: 1,
		},
		leave: { right: '-120%', opacity: 0 },
	})
	return (
		<Container>
			{messagesAnimated.map(({ item, key, props }) => (
				<ToastItem key={key} message={item} style={props} />
			))}
		</Container>
	)
}

export default Toast

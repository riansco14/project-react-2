import React, { useEffect } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'
import { ToastMessages, useToast } from '../../../context/ToastContext'
import { Container } from './styles'

interface ToastProps {
	message: ToastMessages
	style: any
}

const ToastItem: React.FC<ToastProps> = ({ message, style }) => {
	const { removeToast } = useToast()
	const vapo = useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(message.id)

			return () => {
				clearTimeout(timer)
			}
		}, 3000)
	}, [removeToast, message.id])
	return (
		<Container
			key={message.id}
			hasDescricao={!!message.descricao}
			type={message.type}
			style={style}
		>
			<FiAlertCircle size={20} />
			<div>
				<strong>{message.title}</strong>
				{message.descricao && <p>{message.descricao}</p>}
			</div>
			<button onClick={() => removeToast(message.id)}>
				<FiXCircle size={18} />
			</button>
		</Container>
	)
}

export default ToastItem

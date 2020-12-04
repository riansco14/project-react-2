import React, { createContext, useCallback, useContext, useState } from 'react'
import { uuid } from 'uuidv4'
import Toast from '../components/Toast'

export interface ToastMessages {
	id: string
	title: string
	descricao?: string
	type?: 'success' | 'error' | 'info'
}

interface ToastContextData {
	addToast(messages: Omit<ToastMessages, 'id'>): void
	removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
	const [toastMessages, setToastMessages] = useState<ToastMessages[]>([])

	const addToast = useCallback(
		({ title, descricao, type }: Omit<ToastMessages, 'id'>) => {
			const id = uuid()

			const toast = {
				id,
				title,
				descricao,
				type,
			}
			setToastMessages((oldToastMessages) => [...oldToastMessages, toast])
			console.log('addToast')
		},
		[]
	)
	const removeToast = useCallback((id: string) => {
		setToastMessages((oldToastMessages) =>
			oldToastMessages.filter((toastAtual) => toastAtual.id !== id)
		)
	}, [])
	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<Toast messages={toastMessages} />
		</ToastContext.Provider>
	)
}

function useToast(): ToastContextData {
	const context = useContext(ToastContext)

	if (!context) {
		throw new Error('useToast deve ser usado com ToastProvider')
	}

	return context
}

export { ToastProvider, useToast }

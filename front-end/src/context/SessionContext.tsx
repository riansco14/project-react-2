import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface SessionState {
	token: string
	usuario: any
}

interface Crendenciais {
	email: string
	password: string
}

interface SessionContextData {
	usuario: any
	login(data: Crendenciais): Promise<void>
	logout(): void
}

const SessionContext = createContext<SessionContextData>(
	{} as SessionContextData
)

const SessionProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<SessionState>(() => {
		const token = localStorage.getItem('@GoBarber:token')
		const usuario = localStorage.getItem('@GoBarber:usuario')

		if (token && usuario) {
			return { token, usuario: JSON.parse(usuario) }
		}

		return {} as SessionState
	})
	const login = useCallback(async ({ email, password }) => {
		try {
			const response = await api.post('sessions', { email, password })

			const { token, usuario } = response.data
			localStorage.setItem('@GoBarber:token', token)
			localStorage.setItem('@GoBarber:usuario', JSON.stringify(usuario))

			setData({ token, usuario })
			console.log(response.data)
		} catch (error) {}
	}, [])

	const logout = useCallback(() => {
		setData({} as SessionState)
		localStorage.removeItem('@GoBarber:token')
		localStorage.removeItem('@GoBarber:usuario')
	}, [])

	return (
		<SessionContext.Provider
			value={{ usuario: data.usuario, login, logout }}
		>
			{children}
		</SessionContext.Provider>
	)
}

function useSession(): SessionContextData {
	const context = useContext(SessionContext)

	if (!context) {
		throw new Error('useSession precisa ser utilizado com SessionContext')
	}

	return context
}

export { useSession, SessionProvider }

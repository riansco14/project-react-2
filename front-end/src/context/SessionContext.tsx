import React, { createContext, useCallback } from 'react'
import api from '../services/api'

interface Crendenciais {
	email: string
	password: string
}

interface SessionContextData {
	name: string
	login(data: Crendenciais): Promise<void>
}

export const SessionContext = createContext<SessionContextData>(
	{} as SessionContextData
)

export const SessionProvider: React.FC = ({ children }) => {
	const login = useCallback(async ({ email, password }) => {
		try {
			const response = await api.post('sessions', { email, password })
			console.log(response.data)
		} catch (error) {}
	}, [])

	return (
		<SessionContext.Provider value={{ name: 'Diego', login }}>
			{children}
		</SessionContext.Provider>
	)
}

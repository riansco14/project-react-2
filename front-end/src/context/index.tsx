import React from 'react'
import { SessionProvider } from './SessionContext'
import { ToastProvider } from './ToastContext'

const AppProvider: React.FC = ({ children }) => {
	return (
		<>
			<SessionProvider>
				<ToastProvider>{children}</ToastProvider>
			</SessionProvider>
		</>
	)
}

export default AppProvider

import React from 'react'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import AppProvider from './context'

import Routes from './routes'

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<AppProvider>
					<Routes />
				</AppProvider>
				<GlobalStyle />
			</BrowserRouter>
		</>
	)
}

export default App

import React from 'react'
import Login from './pages/Login'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import { SessionProvider } from './context/SessionContext'

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/login">
						<SessionProvider>
							<Login />
						</SessionProvider>
					</Route>
					<Route path="/cadastro">
						<Cadastro />
					</Route>
				</Switch>
			</BrowserRouter>
			<GlobalStyle />
		</>
	)
}

export default App

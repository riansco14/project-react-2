import React from 'react'
import Login from './pages/Login'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import { SessionProvider } from './context/SessionContext'
import Toast from './components/Toast'
import AppProvider from './context'

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/login">
						<AppProvider>
							<Login />
						</AppProvider>
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

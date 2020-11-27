import React from 'react'
import Login from './pages/Login'
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/login">
						<Login />
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

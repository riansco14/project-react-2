import React from 'react'
import { Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Dashboard from '../pages/Dashboard'
import Route from './Route'

const Routes: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/cadastro" component={Cadastro} />
				<Route path="/dashboard" component={Dashboard} isPrivado />
			</Switch>
		</>
	)
}

export default Routes

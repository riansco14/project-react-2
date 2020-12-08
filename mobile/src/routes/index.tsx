import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'

const Session = createStackNavigator()
const SessionRoutes: React.FC = () => {
	return (
		<Session.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: '#312e38' },
			}}
		>
			<Session.Screen name="Login" component={Login} />
			<Session.Screen name="Cadastro" component={Cadastro} />
		</Session.Navigator>
	)
}

export default SessionRoutes

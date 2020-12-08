import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar, View } from 'react-native'

import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {
	return (
		<>
			<NavigationContainer>
				<View style={{ flex: 1, backgroundColor: '#312e38' }}>
					<Routes />
				</View>
				<StatusBar barStyle="light-content" backgroundColor="#312e38" />
			</NavigationContainer>
		</>
	)
}

export default App

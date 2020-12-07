import React from 'react'
import { Redirect, Route as RouteDefault, RouteProps } from 'react-router-dom'

import { useSession } from '../context/SessionContext'

interface RouteCustomProps extends RouteProps {
	isPrivado?: boolean
	component: React.ComponentType
}

const Route: React.FC<RouteCustomProps> = ({
	isPrivado = false,
	component: Component,
	...rest
}) => {
	const { usuario } = useSession()
	return (
		<RouteDefault
			{...rest}
			render={({ location }) => {
				return isPrivado === !!usuario ? (
					<Component></Component>
				) : (
					<Redirect
						to={{
							pathname: isPrivado ? '/' : '/dashboard',
							state: { from: location },
						}}
					/>
				)
			}}
		/>
	)
}

export default Route

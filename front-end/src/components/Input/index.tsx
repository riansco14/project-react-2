import React, {
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { IconBaseProps } from 'react-icons'
import Container, { Error } from './styles'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [isPreenchido, setBorda] = useState(false)
	const { fieldName, defaultValue, error, registerField } = useField(name)

	const handleInputBlur = useCallback(() => {
		setIsFocused(false)
		setBorda(!!inputRef.current?.value)
	}, [])

	const handleInputFocus = useCallback(() => setIsFocused(true), [])

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		})
	}, [fieldName, registerField])

	return (
		<Container
			isCampoErrado={!!error}
			isFocused={isFocused}
			isPreenchido={isPreenchido}
		>
			{Icon && <Icon size={20} />}
			<input
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				defaultValue={defaultValue}
				ref={inputRef}
				{...props}
			/>
			{error && (
				<Error title={error}>
					<FiAlertCircle color="#c53030" size={20} />
				</Error>
			)}
		</Container>
	)
}
export default Input

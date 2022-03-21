import React from 'react'
import { Text } from 'react-native'
import { useNoteContext } from '../hooks/useNoteContext'

interface PropsTextContent {
	isBold?: boolean
	children: any
}

export const TextComponent = ({ children, isBold }: PropsTextContent) => {
	const {
		themeGlobal: { textColor }
	} = useNoteContext()
	const fw = isBold ? 'bold' : 'normal'
	return (
		<Text style={{ color: textColor, fontSize: 17, fontWeight: fw }}>
			{children}
		</Text>
	)
}

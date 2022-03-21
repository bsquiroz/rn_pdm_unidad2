import React from 'react'
import { Text } from 'react-native'
import { useNoteContext } from '../hooks/useNoteContext'

interface PropsTitle {
	textTitle: string
	fz: number
}

export const TitleComponent = ({ textTitle, fz }: PropsTitle) => {
	const {
		themeGlobal: { textColor }
	} = useNoteContext()

	return (
		<Text
			style={{
				color: textColor,
				fontWeight: 'bold',
				textAlign: 'center',
				marginBottom: 16,
				fontSize: fz
			}}
		>
			{textTitle}
		</Text>
	)
}

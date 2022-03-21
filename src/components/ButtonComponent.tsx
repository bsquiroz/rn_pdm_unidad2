import React from 'react'
import {
	GestureResponderEvent,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native'
import { useNoteContext } from '../hooks/useNoteContext'

interface PropsButtonComponent {
	onPress: ((event: GestureResponderEvent) => void) | undefined | any
	textButton: string
	isContentButton?: boolean
}

export const ButtonComponent = ({
	onPress,
	textButton,
	isContentButton
}: PropsButtonComponent) => {
	const {
		themeGlobal: { primaryColor, textColor }
	} = useNoteContext()

	const stylesButton = isContentButton
		? { ...styles.stylesButton, margin: 8 }
		: { ...styles.stylesButton }

	return (
		<TouchableOpacity
			style={{
				...stylesButton,
				backgroundColor: primaryColor
			}}
			onPress={onPress}
		>
			<Text style={{ ...styles.stylesText, color: textColor }}>
				{textButton}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	stylesButton: {
		padding: 16,
		borderRadius: 8,
		display: 'flex',
		alignItems: 'center',
		marginBottom: 8
	},

	stylesText: {
		fontWeight: 'bold'
	}
})

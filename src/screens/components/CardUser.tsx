import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNoteContext } from '../../hooks/useNoteContext'
import { stateUserNotesProps } from '../../types'

interface PropsCardUser {
	user: stateUserNotesProps
}

export const CardUser = ({ user }: PropsCardUser) => {
	const {
		themeGlobal: { primaryColor, textColor }
	} = useNoteContext()

	return (
		<View style={{ ...styles.stylesCardUser, borderColor: primaryColor }}>
			<Text style={{ color: textColor }}>Nombre: {user.name}</Text>
			<Text style={{ color: textColor }}>Nota final: {user.note}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesCardUser: {
		marginRight: 8,
		marginBottom: 8,
		padding: 4,
		borderRadius: 4,
		borderWidth: 2,
		display: 'flex',
		alignItems: 'center'
	}
})

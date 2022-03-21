import React from 'react'
import {
	KeyboardTypeOptions,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { useNoteContext } from '../hooks/useNoteContext'

interface PropsInput {
	nameIcon: string
	nameInput: string
	value: string
	placeHolderInput: string
	typeIcon: KeyboardTypeOptions
	handleSetNote: (key: string, value: string) => void
}

export const InputComponent = ({
	nameIcon,
	nameInput,
	typeIcon,
	value,
	placeHolderInput,
	handleSetNote
}: PropsInput) => {
	const {
		themeGlobal: { primaryColor }
	} = useNoteContext()

	return (
		<View style={{ ...styles.stylesInput, borderColor: primaryColor }}>
			<Text>
				<Icon name={nameIcon} size={30} color={primaryColor}></Icon>
			</Text>
			<TextInput
				placeholder={placeHolderInput}
				value={value}
				keyboardType={typeIcon}
				onChangeText={(text) => handleSetNote(nameInput, text)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesInput: {
		backgroundColor: '#fff',
		marginBottom: 16,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: 8,
		padding: 4
	}
})

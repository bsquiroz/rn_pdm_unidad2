import React, { useState } from 'react'

import { View, StyleSheet } from 'react-native'
import {
	AlertComponent,
	ButtonComponent,
	InputComponent,
	SwitchComponent,
	TitleComponent
} from '../components'

import { StackScreenProps } from '@react-navigation/stack'

import { stateUserNotesProps } from '../types'
import { useNoteContext } from '../hooks/useNoteContext'
import { RootStackParams } from '../navigator/Navigator'

const initialState: stateUserNotesProps = {
	id: 0,
	name: '',
	note: ''
}

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

export const HomeScreen = ({ navigation }: Props) => {
	const { handleStateUsersNotes, numberOfRecords } = useNoteContext()
	const [userNote, setUserNote] = useState<stateUserNotesProps>(initialState)
	const { name, note } = userNote

	const [arrayUsersNotes, setArrayUsersNotes] = useState<
		stateUserNotesProps[]
	>([])

	const seeResults = () => {
		handleStateUsersNotes(arrayUsersNotes)
		navigation.navigate('Result')
		setArrayUsersNotes([])
	}

	const handleSetNote = (key: string, value: string | number) => {
		setUserNote({
			...userNote,
			id: Date.now(),
			[key]: value
		})
	}

	const handleSaveInfo = () => {
		const regExpName = new RegExp('^[A-Z]+$', 'i')
		const regExpNum = new RegExp(/^[0-9]*(.?)[0-9]+$/)

		if (name.trim() === '' || note.trim() === '') {
			return AlertComponent(
				'Error',
				'Ingrese todos los datos correctamente'
			)
		}

		if (parseInt(note) > 5 || parseInt(note) < 0) {
			return AlertComponent('Error', 'Solo Valores entre 0 y 5')
		}

		if (!regExpName.test(name)) {
			return AlertComponent('Error', 'No Ingresa numeros en el nombre')
		}

		if (!regExpNum.test(note)) {
			return AlertComponent(
				'Error',
				'Ingresa valores numericos en la nota'
			)
		}

		if (arrayUsersNotes.length < numberOfRecords) {
			setArrayUsersNotes([...arrayUsersNotes, userNote])
			AlertComponent(
				'Guardado',
				'Los datos se han guardado correctamente'
			)
			setUserNote(initialState)
		}
	}

	return (
		<View style={styles.formStyles}>
			<SwitchComponent />

			{arrayUsersNotes.length < numberOfRecords ? (
				<>
					<TitleComponent
						textTitle='DIGITE LAS NOTAS DE LOS ESTUDIANTES'
						fz={20}
					/>
					<InputComponent
						nameIcon={'person-outline'}
						value={name}
						placeHolderInput={'Ingrese el nombre del estudiante'}
						typeIcon={'ascii-capable'}
						nameInput={'name'}
						handleSetNote={handleSetNote}
					/>

					<InputComponent
						nameIcon={'pencil-outline'}
						value={note}
						placeHolderInput={'Ingrese la nota del estudiante'}
						typeIcon={'number-pad'}
						nameInput={'note'}
						handleSetNote={handleSetNote}
					/>
					<ButtonComponent
						onPress={handleSaveInfo}
						textButton={'Guardar'}
					/>
				</>
			) : (
				<ButtonComponent
					onPress={seeResults}
					textButton={'Ver resultados'}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	formStyles: {
		display: 'flex',
		padding: 16,
		flex: 1,
		justifyContent: 'center'
	}
})

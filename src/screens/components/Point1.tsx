import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextComponent, TitleComponent } from '../../components'
import { courseAverage } from '../../helpers'
import { useNoteContext } from '../../hooks/useNoteContext'
import { CardUser } from './CardUser'

interface PropsPoint1 {
	showtitle?: boolean
}

export const Point1 = ({ showtitle }: PropsPoint1) => {
	const { stateUsersNotes } = useNoteContext()

	const response = courseAverage(stateUsersNotes)

	return (
		<View style={styles.stylesPoint1}>
			{!showtitle && (
				<TitleComponent textTitle={'Primer punto'} fz={18} />
			)}

			<TextComponent>
				La nota promedio del curso:{' '}
				<TextComponent isBold>{response}</TextComponent>
			</TextComponent>

			<View>
				{stateUsersNotes.map((e, i) => (
					<CardUser user={e} key={i} />
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesPoint1: {}
})

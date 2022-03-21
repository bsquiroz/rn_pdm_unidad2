import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Point1 } from '.'
import { TextComponent, TitleComponent } from '../../components'
import { NotesHightAverage, courseAverage } from '../../helpers'
import { useNoteContext } from '../../hooks/useNoteContext'
import { CardUser } from './CardUser'

export const Point4 = () => {
	const { stateUsersNotes } = useNoteContext()
	const { notesHightAverage, notesLessAverage } = NotesHightAverage(
		stateUsersNotes,
		courseAverage(stateUsersNotes)
	)

	return (
		<View>
			<TitleComponent textTitle={'Cuarto punto'} fz={18} />

			<Point1 showtitle />

			<View>
				<TextComponent>
					La cantidad de notas mayores al promedio.
				</TextComponent>

				<View style={styles.boxInf}>
					<View>
						{notesHightAverage.map((e, i) => (
							<CardUser user={e} key={i} />
						))}
					</View>
					<TextComponent>
						Cantidad:{' '}
						<TextComponent isBold>
							{notesHightAverage.length}
						</TextComponent>
					</TextComponent>
				</View>
			</View>

			<View>
				<TextComponent>
					La cantidad de notas menores al promedio.
				</TextComponent>

				<View style={styles.boxInf}>
					<View>
						{notesLessAverage.map((e, i) => (
							<CardUser user={e} key={i} />
						))}
					</View>
					<TextComponent>
						Cantidad:{' '}
						<TextComponent isBold>
							{notesLessAverage.length}
						</TextComponent>
					</TextComponent>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	boxInf: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

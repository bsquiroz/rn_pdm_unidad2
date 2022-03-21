import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextComponent, TitleComponent } from '../../components'
import { percentageStudents } from '../../helpers'
import { useNoteContext } from '../../hooks/useNoteContext'
import { CardUser } from './CardUser'

export const Point5 = () => {
	const { stateUsersNotes } = useNoteContext()
	const { approved, reprobate } = percentageStudents(stateUsersNotes)

	return (
		<View>
			<TitleComponent textTitle={'Quinto punto'} fz={18} />

			<View>
				<TextComponent>
					El porcentaje de estudiantes que aprobaron el curso.
				</TextComponent>

				<View style={styles.boxInf}>
					<View>
						{approved.students.map((e, i) => (
							<CardUser user={e} key={i} />
						))}
					</View>
					<View>
						<TextComponent>
							Cantidad:{' '}
							<TextComponent isBold>
								{approved.amount}
							</TextComponent>
						</TextComponent>
						<TextComponent>
							Promedio:{' '}
							<TextComponent isBold>
								{approved.percent}%
							</TextComponent>
						</TextComponent>
					</View>
				</View>
			</View>

			<View>
				<TextComponent>
					El porcentaje de estudiantes que reprobaron el curso.
				</TextComponent>

				<View style={styles.boxInf}>
					<View>
						{reprobate.students.map((e, i) => (
							<CardUser user={e} key={i} />
						))}
					</View>

					<View>
						<TextComponent>
							Cantidad:{' '}
							<TextComponent isBold>
								{reprobate.amount}
							</TextComponent>
						</TextComponent>
						<TextComponent>
							Promedio:{' '}
							<TextComponent isBold>
								{reprobate.percent}%
							</TextComponent>
						</TextComponent>
					</View>
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

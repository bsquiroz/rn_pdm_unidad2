import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextComponent, TitleComponent } from '../../components'
import { amountThreeToFive } from '../../helpers'
import { useNoteContext } from '../../hooks/useNoteContext'
import { CardUser } from './CardUser'

export const Point2 = () => {
	const { stateUsersNotes } = useNoteContext()

	const { ResultCutOffMark1, ResultCutOffMark2, ResultCutOffMark3 } =
		amountThreeToFive(stateUsersNotes)

	return (
		<View style={styles.stylesPoint2}>
			<TitleComponent textTitle={'Segundo punto'} fz={19} />

			<View>
				<TextComponent>
					La cantidad de estudiantes que sacaron 3,5 son{' '}
					{ResultCutOffMark1.length} y fueron:
				</TextComponent>
				{ResultCutOffMark1.map((e, i) => (
					<CardUser user={e} key={i} />
				))}
			</View>

			<View>
				<TextComponent>
					La cantidad de estudiantes que sacaron 4,5 son{' '}
					{ResultCutOffMark2.length} y fueron:
				</TextComponent>
				{ResultCutOffMark2.map((e, i) => (
					<CardUser user={e} key={i} />
				))}
			</View>

			<View>
				<TextComponent>
					La cantidad de estudiantes que sacaron 5 son{' '}
					{ResultCutOffMark3.length} y fueron:
				</TextComponent>
				{ResultCutOffMark3.map((e, i) => (
					<CardUser user={e} key={i} />
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesPoint2: {}
})

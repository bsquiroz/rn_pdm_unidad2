import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextComponent, TitleComponent } from '../../components'
import { extremeNotes } from '../../helpers'
import { useNoteContext } from '../../hooks/useNoteContext'
import { CardUser } from './CardUser'

export const Point3 = () => {
	const { stateUsersNotes } = useNoteContext()
	const { userHight, userLess } = extremeNotes(stateUsersNotes)

	return (
		<View style={styles.stylesPoint3}>
			<TitleComponent textTitle={'Tercer punto'} fz={18} />
			<View>
				<TextComponent>La nota más alta:</TextComponent>
				<CardUser user={userHight} />
			</View>

			<View>
				<TextComponent>La nota más baja:</TextComponent>
				<CardUser user={userLess} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesPoint3: {}
})

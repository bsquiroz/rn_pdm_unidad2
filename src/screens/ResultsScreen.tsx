import React, { useEffect, useState } from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { TitleComponent } from '../components'
import { useNoteContext } from '../hooks/useNoteContext'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'Result'> {}

import { ContentButtons, ContentPoint } from './components'

export const ResultsScreen = ({ navigation }: Props) => {
	const { handleInfoReset } = useNoteContext()

	const [seePoint, setSeePoint] = useState('point1')

	const handleSeePoint = (point: string) => {
		setSeePoint(point)
	}

	const ResetValues = () => {
		navigation.navigate('Home')
		handleInfoReset()
	}

	return (
		<ScrollView>
			<View style={styles.stylesResult}>
				<TitleComponent
					textTitle={'Estos son los resultados'}
					fz={20}
				/>
				<ContentButtons
					handleSeePoint={handleSeePoint}
					ResetValues={ResetValues}
				/>
				<ContentPoint seePoint={seePoint} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	stylesResult: {
		padding: 16
	}
})

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { ResultsScreen } from '../screens/ResultsScreen'
import { useNoteContext } from '../hooks/useNoteContext'

export type RootStackParams = {
	Home: undefined
	Result: undefined
}

const Stack = createStackNavigator<RootStackParams>()

export const Navigator = () => {
	const {
		themeGlobal: { bgColor }
	} = useNoteContext()

	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: bgColor
				}
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Result' component={ResultsScreen} />
		</Stack.Navigator>
	)
}

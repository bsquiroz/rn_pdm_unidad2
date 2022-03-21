import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'

import { NotesProvider } from './src/context/NotesContext'

const Appstate = ({ children }: any) => {
	return <NotesProvider>{children}</NotesProvider>
}

export const App = () => {
	return (
		<Appstate>
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</Appstate>
	)
}

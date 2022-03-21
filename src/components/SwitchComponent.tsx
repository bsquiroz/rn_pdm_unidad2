import React, { useEffect, useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'
import { useNoteContext } from '../hooks/useNoteContext'

import { themeDark, themeLight } from '../styles'

export const SwitchComponent = () => {
	const { handleThemeGlobal } = useNoteContext()
	const [isEnabled, setIsEnabled] = useState(false)

	useEffect(() => {
		handleThemeGlobal(isEnabled ? themeDark : themeLight)
	}, [isEnabled])

	const toggleSwitch = () => {
		setIsEnabled(!isEnabled)
	}

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: '#81b0ff', true: '#767577' }}
				thumbColor={isEnabled ? '#f4f3f4' : '#f5dd4b'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 16,
		right: 16
	}
})

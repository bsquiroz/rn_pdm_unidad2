import React from 'react'

import { Alert } from 'react-native'

export const AlertComponent = (titleAlert: string, TextAlert: string) => {
	return Alert.alert(titleAlert, TextAlert, [
		{
			text: 'OK',
			onPress: () => console.log('OK Pressed'),
			style: 'cancel'
		}
	])
}

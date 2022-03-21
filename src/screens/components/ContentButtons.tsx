import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonComponent } from '../../components'

interface PropsContentButtons {
	handleSeePoint: (point: string) => void
	ResetValues?: () => void
}

const buttons = [
	{
		id: 1,
		nameState: 'point1',
		nameButton: 'punto 1'
	},
	{
		id: 2,
		nameState: 'point2',
		nameButton: 'punto 2'
	},
	{
		id: 3,
		nameState: 'point3',
		nameButton: 'punto 3'
	},
	{
		id: 4,
		nameState: 'point4',
		nameButton: 'punto 4'
	},
	{
		id: 5,
		nameState: 'point5',
		nameButton: 'punto 5'
	}
]

export const ContentButtons = ({
	handleSeePoint,
	ResetValues
}: PropsContentButtons) => {
	return (
		<View style={styles.contentButtons}>
			{buttons.map(({ id, nameButton, nameState }) => (
				<ButtonComponent
					key={id}
					onPress={() => handleSeePoint(nameState)}
					textButton={nameButton}
					isContentButton={true}
				/>
			))}

			<ButtonComponent
				onPress={ResetValues}
				textButton={'Reset'}
				isContentButton={true}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	stylesResult: {
		padding: 16
	},

	contentButtons: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	}
})

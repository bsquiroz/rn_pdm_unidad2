import { stateUserNotesProps } from '../types'

export const dataFalse: stateUserNotesProps[] = [
	{
		id: 1,
		name: 'stiven',
		note: '2'
	},
	{
		id: 0,
		name: 'brayan',
		note: '1.7'
	},
	{
		id: 2,
		name: 'julian',
		note: '4.5'
	},
	{
		id: 3,
		name: 'manuel',
		note: '3.5'
	},
	{
		id: 4,
		name: 'alex',
		note: '3.5'
	},
	{
		id: 5,
		name: 'manuela',
		note: '3.5'
	},
	{
		id: 6,
		name: 'estefania',
		note: '5'
	},
	{
		id: 7,
		name: 'valentina',
		note: '5'
	}
]

export const courseAverage = (data: stateUserNotesProps[]) => {
	const amount = data.length
	let totalSum = 0

	data.forEach((e) => {
		totalSum += parseInt(e.note)
	})

	return totalSum / amount
}

export const amountThreeToFive = (data: stateUserNotesProps[]) => {
	const cutOffMark1 = 3.5
	const cutOffMark2 = 4.5
	const cutOffMark3 = 5

	const ResultCutOffMark1 = data.filter(
		(e) => parseFloat(e.note) === cutOffMark1 && e
	)

	const ResultCutOffMark2 = data.filter(
		(e) => parseFloat(e.note) === cutOffMark2 && e
	)

	const ResultCutOffMark3 = data.filter(
		(e) => parseFloat(e.note) === cutOffMark3 && e
	)

	return {
		ResultCutOffMark1,
		ResultCutOffMark2,
		ResultCutOffMark3
	}
}

export const extremeNotes = (data: stateUserNotesProps[]) => {
	let noteLess = data[0].note
	let noteHight = data[0].note

	let userLess = data[0]
	let userHight = data[0]

	data.forEach((e) => {
		if (parseFloat(e.note) > parseFloat(noteHight)) {
			noteHight = e.note
			userHight = e
		}

		if (parseFloat(e.note) < parseFloat(noteLess)) {
			noteLess = e.note
			userLess = e
		}
	})

	return {
		userHight,
		userLess
	}
}

export const NotesHightAverage = (
	data: stateUserNotesProps[],
	courseAverage: number
) => {
	const notesHightAverage: stateUserNotesProps[] = []
	const notesLessAverage: stateUserNotesProps[] = []

	data.forEach((e) => {
		if (parseFloat(e.note) >= courseAverage) {
			notesHightAverage.push(e)
		} else {
			notesLessAverage.push(e)
		}
	})

	return {
		notesHightAverage,
		notesLessAverage
	}
}

export const percentageStudents = (data: stateUserNotesProps[]) => {
	const amountStudents = data.length
	const amountStudentsReprobate: stateUserNotesProps[] = []
	const amountStudentsApproved: stateUserNotesProps[] = []

	data.forEach((e) => {
		if (parseFloat(e.note) >= 3.0) {
			amountStudentsApproved.push(e)
		} else {
			amountStudentsReprobate.push(e)
		}
	})

	return {
		reprobate: {
			students: amountStudentsReprobate,
			amount: amountStudentsReprobate.length,
			percent: (amountStudentsReprobate.length * 100) / amountStudents
		},
		approved: {
			students: amountStudentsApproved,
			amount: amountStudentsApproved.length,
			percent: (amountStudentsApproved.length * 100) / amountStudents
		}
	}
}

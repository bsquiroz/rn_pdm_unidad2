import React from 'react'
import { createContext, useState } from 'react'

import { themeLight } from '../styles'
import { stateUserNotesProps, themeGlobalProps } from '../types'

interface ContextProps {
	themeGlobal: themeGlobalProps
	stateUsersNotes: stateUserNotesProps[]
	handleStateUsersNotes: (userNotes: stateUserNotesProps[]) => void
	handleThemeGlobal: (theme: themeGlobalProps) => void
	handleInfoReset: () => void
	numberOfRecords: number
}

export const NotesContext = createContext({} as ContextProps)

export const NotesProvider = ({ children }: any) => {
	const numberOfRecords = 4

	const [stateUsersNotes, setstateUsersNote] = useState<
		stateUserNotesProps[]
	>([])

	console.log(stateUsersNotes)

	const [themeGlobal, setThemeGlobal] = useState<themeGlobalProps>(themeLight)

	const handleStateUsersNotes = (userNotes: stateUserNotesProps[]) => {
		setstateUsersNote(userNotes)
	}

	const handleThemeGlobal = (theme: themeGlobalProps) => {
		setThemeGlobal(theme)
	}

	const handleInfoReset = () => {
		setstateUsersNote([])
	}

	const store = {
		numberOfRecords,
		stateUsersNotes,
		themeGlobal,
		handleStateUsersNotes,
		handleThemeGlobal,
		handleInfoReset
	}

	return (
		<NotesContext.Provider value={store}>{children}</NotesContext.Provider>
	)
}

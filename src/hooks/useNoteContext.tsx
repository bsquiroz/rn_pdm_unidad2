import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

export const useNoteContext = () => {
	return useContext(NotesContext)
}

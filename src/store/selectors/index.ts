import { StateType } from '../../hooks'

export const selectTheme = (state: StateType) => state.todolist.theme
export const selectState = (state: StateType) => state.todolist

import { StateType } from '../../hooks'

export const selectTasks = (state: StateType) => state.todolist.tasks
export const selectTheme = (state: StateType) => state.todolist.theme

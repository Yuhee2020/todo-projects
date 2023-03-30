import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TaskType, ThemeType } from './types'

export const slice = createSlice({
  name: 'todolist',
  initialState: {
    theme: 'light',
    tasks: [] as TaskType[],
  },
  reducers: {
    addTask(state, action: PayloadAction<TaskType>) {
      state.tasks.unshift(action.payload)
    },
    deleteTask(state, action: PayloadAction<string>) {
      const index = state.tasks.findIndex(task => task.id === action.payload)

      if (index > -1) {
        state.tasks.splice(index, 1)
      }
    },
    changeTaskStatus(state, action: PayloadAction<string>) {
      const index = state.tasks.findIndex(task => task.id === action.payload)

      if (index > -1) {
        state.tasks[index].status = !state.tasks[index].status
      }
    },
    changeTaskDescription(
      state,
      action: PayloadAction<{ id: string; description: string }>,
    ) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id)

      if (index > -1) {
        state.tasks[index].description = action.payload.description
      }
    },
    changeTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload
    },
  },
})

export const {
  addTask,
  deleteTask,
  changeTaskStatus,
  changeTaskDescription,
  changeTheme,
} = slice.actions
export const todolistReducer = slice.reducer

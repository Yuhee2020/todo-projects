import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {FilterType, TaskType, ThemeType} from './types'

export const slice = createSlice({
    name: 'todolist',
    initialState: {
        projectName: 'Project name',
        tasks: [] as TaskType[],
        filter: "all" as FilterType,
        theme: 'light',
        filteredTasks: [] as TaskType[],
        searchText:""
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
        changeProjectName(state, action: PayloadAction<string>) {
            state.projectName = action.payload
        },
        setImportedProject(state, action: PayloadAction<any>) {
            state.tasks = action.payload.tasks
            state.filter = action.payload.filter
            state.theme = action.payload.theme
            state.projectName = action.payload.projectName
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload
        },
        setSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload
        },
    },
})

export const {
    addTask,
    deleteTask,
    changeTaskStatus,
    changeTaskDescription,
    changeTheme,
    setImportedProject,
    changeProjectName,
    setFilter,
    setSearchText,
} = slice.actions
export const todolistReducer = slice.reducer



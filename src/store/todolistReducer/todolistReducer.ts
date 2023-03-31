import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {FilterType, TaskType, ThemeType} from './types'
import {recursiveAddSubtask, recursiveUpdateSubtask, removeSubtask} from "../../utils";

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
        deleteTask(state, action: PayloadAction<TaskType>) {
            const {parentId,id,}=action.payload
            if(!parentId){
            const index = state.tasks.findIndex(task => task.id === id)
            if (index > -1) {
                state.tasks.splice(index, 1)
            }}
            else state.tasks=removeSubtask(parentId,id, state.tasks)
        },
        changeTask(
            state,
            action: PayloadAction<TaskType>,
        ) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            if (index > -1) {
                state.tasks[index] = action.payload
            }else
            state.tasks=recursiveUpdateSubtask(action.payload, state.tasks)
        },
        changeTheme(state, action: PayloadAction<ThemeType>) {
            state.theme = action.payload
        },
        changeProjectName(state, action: PayloadAction<string>) {
            state.projectName = action.payload
        },
        setImportedProject(state, action: PayloadAction<any>) {
            state=action.payload
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload
        },
        setSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload
        },
        addSubTask(state, action: PayloadAction<{subTask:TaskType, parentId:string}>) {
            state.tasks=recursiveAddSubtask(action.payload.parentId,action.payload.subTask, state.tasks)
        },

    },
})

export const {
    addTask,
    deleteTask,
    changeTask,
    changeTheme,
    setImportedProject,
    changeProjectName,
    setFilter,
    setSearchText,
    addSubTask
} = slice.actions
export const todolistReducer = slice.reducer



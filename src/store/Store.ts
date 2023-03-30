import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { localStorageMiddleware } from '../middlewares/localStorageMiddleware'
import { loadState } from '../utils'

import { todolistReducer } from './todolistReducer/todolistReducer'

export const rootReducer = combineReducers({
  todolist: todolistReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(localStorageMiddleware),
})

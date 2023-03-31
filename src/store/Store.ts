import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


import { loadState } from '../utils'

import { todolistReducer } from './todolistReducer/todolistReducer'
import {sessionStorageMiddleware} from "../middlewares/sessionStorageMiddleware";

export const rootReducer = combineReducers({
  todolist: todolistReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(sessionStorageMiddleware),
})

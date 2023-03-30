import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { rootReducer } from '../store/Store'

export type StateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<StateType, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

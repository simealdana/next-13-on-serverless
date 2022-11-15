import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { uiReducer } from './slices/ui'

export const store = configureStore({
  reducer: { ui: uiReducer },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

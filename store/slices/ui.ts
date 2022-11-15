import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
  },
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer

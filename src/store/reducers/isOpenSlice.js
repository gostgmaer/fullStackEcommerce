import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const isOpenSlice = createSlice({
  name: 'isOpen',
  initialState,
  reducers: {

    isLoginAction: (state, action) => {
      state.isOpen = action.payload
    },
    isOpenAction: (state, action) => {
      state.isOpen = action.payload
    },
  },
})


export const { isLoginAction, isOpenAction } = isOpenSlice.actions


export const isOpenReducer = isOpenSlice.reducer
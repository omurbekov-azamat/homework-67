import {GotPassword} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: GotPassword = {
  value: '',
  password: '2835',
  check: '',
}

export const pushSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    increaseBy: (state, action:PayloadAction<string>) => {
      if(state.value.length < 4) {
        state.value += action.payload;
      }
    },
    checkCode: (state) => {
      if (state.value === state.password) {
        state.check = 'lightgreen';
      } else {
        state.check = 'red';
      }
    },
    clearCode: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
      state.check = '';
    },
  }
});

export const pushReducer = pushSlice.reducer;
export const {increaseBy, checkCode, clearCode} = pushSlice.actions;
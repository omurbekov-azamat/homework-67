import {configureStore} from "@reduxjs/toolkit";
import {pushReducer} from "../components/PushButton/PushSlice";

export const store = configureStore({
  reducer: {
    password: pushReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
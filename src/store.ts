import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;

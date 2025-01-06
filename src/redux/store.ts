import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task/reducer";

const store = configureStore ({
  reducer: taskSlice.reducer
})

export type RootReducer = ReturnType<typeof store.getState>
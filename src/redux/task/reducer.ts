import { createSlice } from "@reduxjs/toolkit";

type TaskListArray = {
  tasks: string[];
};
const initialState: TaskListArray = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //coloca as actions e reducer em um só
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { addTask } = taskSlice.actions; //é criado a action

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskListArray = {
  tasks: string[];
  taskboolean: boolean[];
  filter: string;
};
const initialState: TaskListArray = {
  tasks: [],
  taskboolean: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //coloca as actions e reducer em um só
    addTaskT: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    addTaskBoolean: (state) => {
      state.taskboolean = [...state.taskboolean, false];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeCheckbox: (state, action: PayloadAction<number>) => {
      state.taskboolean = state.taskboolean.map((item,index) => (
        index === action.payload ? !item : item
      ))
    }
  },
});

export const { addTaskT, addTaskBoolean, changeFilter, changeCheckbox } =
  taskSlice.actions; //é criado a action
export default taskSlice;

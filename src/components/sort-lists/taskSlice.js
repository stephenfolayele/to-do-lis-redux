import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => action.payload,
        addTask: (state, action) => {
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
            task.completed = !task.completed;
      }
        },
        removeCompletedTask: (state) => {
            return state.filter((task) => !task.completed);
        }
    }
}
)

export const {addTask, removeTask, setTasks, setFilter,toggleTask, removeCompletedTask} = taskSlice.actions;
export default taskSlice.reducer;
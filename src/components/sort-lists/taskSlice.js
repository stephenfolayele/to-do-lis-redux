import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => action.payload,
        addTask: (state, action) => {
            console.log(action);
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
        removeCompletedTask: (state) => {
            return state.filter((task) => !task.completed);
        }
    }
}
)

export const {addTask, removeTask, setTasks, setFilter, removeCompletedTask} = taskSlice.actions;
export default taskSlice.reducer;
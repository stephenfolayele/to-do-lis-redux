import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './sort-lists/taskSlice'


const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
})



export default store;
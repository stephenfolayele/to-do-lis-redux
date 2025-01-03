import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, setTasks, removeCompletedTask } from "../sort-lists/taskSlice";

export const ThemeContext = createContext();

export default function GlobalState ({children})  {
    const [theme, setTheme] = useState("light");
    const [filter, setFilter] = useState('all')
    const [allTodoList, setAllTodoList] = useState([])   
    const [remainingTasks, setRemainingTasks] = useState(0)

    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    // Load theme and tasks from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
        setTheme(savedTheme);
        }
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
        dispatch(setTasks(storedTasks))
    }, [dispatch]);


    // Save theme and tasks and filter to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        filteredTaskFunct();
        const remainingTasks = tasks.reduce((acc, task) => (!task.completed ? acc + 1 : acc), 0)
        setRemainingTasks(remainingTasks)
    }, [theme, tasks, filter]);


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    
    const handleAddTask = (textInputed) => {
        if (textInputed.trim() === '') return;
        const newTask =
            {
                id: Date.now(), text: textInputed, completed: false
            }
        dispatch(addTask(newTask))
    }


    const handleRemoveTask = (id) => {
        dispatch(removeTask(id))
    }

    const toggleTaskCompletion = (activity_id) => {
        const updatedTasks = tasks.map((task) =>
        task.id === activity_id? {...task, completed: !task.completed} : task
        );
        dispatch(setTasks(updatedTasks))
    }

    const filteredTaskFunct = () => {
        const filteredTasks = tasks.filter((task) => {
            if (filter === 'completed') return task.completed;
            if (filter === 'notCompleted') return !task.completed;
            return true;
        });
        setAllTodoList(filteredTasks)
    }

    const handleClearCompleted = () => {
        dispatch(removeCompletedTask())        
    }

    const onDragEnd = (event) => {
        const {active, over} = event;

        if (active.id !== over?.id){
            const oldIndex = tasks.findIndex((task)=> task.id === active.id);
            const newIndex =  tasks.findIndex((task)=> task.id === over?.id);

            const reorderedTasks = Array.from(tasks)

            const [removed] = reorderedTasks.splice(oldIndex, 1)

            reorderedTasks.splice(newIndex, 0, removed)

            dispatch(setTasks(reorderedTasks))
        };

    }

    return(
        <ThemeContext.Provider value={{
            theme, 
            tasks,
            filter, 
            allTodoList,
            remainingTasks,
            onDragEnd,
            toggleTheme,
            handleClearCompleted, 
            handleAddTask,
            setFilter,
            toggleTaskCompletion,
            handleRemoveTask}}>{children}</ThemeContext.Provider>
    )

}


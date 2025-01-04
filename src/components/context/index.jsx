import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, setTasks, toggleTask, removeCompletedTask } from "../sort-lists/taskSlice";
import { useMediaQuery } from "react-responsive";


export const ThemeContext = createContext();

export default function GlobalState ({children})  {
    const [theme, setTheme] = useState("light");
    const [filter, setFilter] = useState('all')
    const [allTodoList, setAllTodoList] = useState([])   
    const [active, setActive] = useState('all')
    const [remainingTasks, setRemainingTasks] = useState(0)

    const isMobile = useMediaQuery({query: '(max-width: 500px)'})

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

    // Save theme and tasks to localStorage and filter tasks whenever it changes
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

    const handleToggleTask = (id) => {
        dispatch(toggleTask(id))
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


    return(
        <ThemeContext.Provider value={{
            theme, 
            isMobile,
            tasks,
            filter, 
            allTodoList,
            active,
            remainingTasks,
            setActive,
            toggleTheme,
            handleClearCompleted, 
            handleAddTask,
            setFilter,
            handleToggleTask,
            handleRemoveTask}}>{children}</ThemeContext.Provider>
    )

}



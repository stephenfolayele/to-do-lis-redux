import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import sunIcon from '../../assets/images/icon-sun.svg'
import moonIcon from '../../assets/images/icon-moon.svg'


export default function Static(){
    const { theme, toggleTheme, handleAddTask } = useContext(ThemeContext)

    const [newToDo, setNewToDo] = useState('')

    function handleEnterKey(newTask){
        handleAddTask(newTask);
        setNewToDo('');
    }

    return (
        <div className="flex flex-col gap-y-8">
        <nav className="flex justify-between items-center">
            <h1 className= "text-4xl tracking-[0.5rem] font-title font-semibold text-white" >TODO</h1>
            <div>
                <img onClick={toggleTheme} src={ theme === 'light' ? moonIcon : sunIcon} alt= {`${theme} Mood`} />
            </div>
        </nav>

        <div className={`flex justify-center items-center w-full border-solid border 
        rounded ${theme === 'light'? 'bg-white border-white' : 'bg-darkBlue border-darkBlue'}`}>
            <div className={`m-1.5 flex-none h-[30px] w-[30px] p-1 flex justify-center items-center ${theme === 'light'? 'bg-white' : 'bg-darkBlue'}`}>

                <span className="h-full w-full rounded-full border-solid border border-opacity-30 border-greyishBlue"></span>

                </div>
            <input 
            className={`w-full outline-none pt-[1rem] pb-[.9rem] ${theme === 'light'? 'bg-white text-darkBlue' : 'bg-darkBlue text-white'}`}
            type="text" 
            value={newToDo}
            maxLength={45}
            onChange={(e) => (setNewToDo(e.target.value))}
            onKeyDown={(e) =>  e.key === 'Enter' && newToDo !== '' ? 
            handleEnterKey(newToDo)
            : null }
            placeholder="Create a new todo..."/>
        </div>
        </div>
    )

}
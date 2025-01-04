import { useContext } from "react";
import { ThemeContext } from "../context";
import ListTemplate from "./listTemplate";

export default function Lists(){

    const {theme, setActive, active, handleClearCompleted, remainingTasks ,setFilter, allTodoList, isMobile} = useContext(ThemeContext)


    return (
        <div className={`${isMobile? 'flex flex-col gap-7' : null}`}>
            <div 
            className={`flex flex-col border-none border overflow-hidden 
            ${isMobile? 'rounded': 'rounded-t'}
            ${theme === 'light'? 'bg-white' : 'bg-darkBlue'}`} >

                {
                    allTodoList && allTodoList.length ? 
                    allTodoList.map((eachItemList, index)=> 
                    <ListTemplate 
                    activity={eachItemList} 
                    key={index}/> ) 
                    : 
                    <div className={`flex justify-center items-center text-black text-opacity-50 p-5 w-full border-b border-solid border-b-greyishBlue border-opacity-30
                    ${theme === 'light'? 'text-black' : 'text-greyishBlue'}`}>
                        {
                            remainingTasks? <p>Click Button 'All' or 'Active' to see your toDo lists!</p> 
                            : <p>Tasks lists is empty!</p>
                        }
                    </div>
                }

                <div className={`items-center text-xs text-opacity-50 p-3.5 
                    ${isMobile? 'flex' : 'hidden'} justify-between
                    ${theme === 'light'? 'bg-white border-white text-black' : 'bg-darkBlue border-greyishBlue text-greyishBlue'}`}>
                        <span className="">{remainingTasks} item(s) left</span>
                        <button className={`${active === 'clearCompleted'? 'text-active font-extrabold' : theme==='light'? 'hover:font-bold hover:text-black' : 'hover:font-bold hover:text-white'}`} onClick={() => {setActive('clearCompleted'); handleClearCompleted()}}>Clear Completed</button>
                </div>
                </div>

            <div className={`flex items-center text-xs text-opacity-50 p-3.5 border-none border rounded 
            ${theme === 'light'? 'bg-white border-white text-black' : 'bg-darkBlue border-darkBlue text-greyishBlue'}
            ${isMobile? 'justify-center' : 'justify-between rounded-t-[0]'}`
            }>
                <span className={` ${isMobile? 'hidden': 'flex-none'}`}>{remainingTasks} item(s) left</span>
                <div className="flex justify-center items-center gap-2">
                    <button className={`${active === 'all'? 'text-active font-extrabold' :  theme==='light'? 'hover:font-bold hover:text-black' : 'hover:font-bold hover:text-white'}`} onClick={() => {setActive('all'); setFilter('all')}}>All</button>
                    <button className={`${active === 'notCompleted'? 'text-active font-extrabold' : theme ==='light'? 'hover:font-bold hover:text-black' : 'hover:font-bold hover:text-white'}`} onClick={() => {setActive('notCompleted'); setFilter('notCompleted')}}>Active</button>
                    <button className={`${active === 'completed'? 'text-active font-extrabold' : theme ==='light'? 'hover:font-bold hover:text-black' : 'hover:font-bold hover:text-white'}`} onClick={() => {setActive('completed'); setFilter('completed')}}>Completed</button>
                </div>
                <button className={`${isMobile? 'hidden': 'flex-none'} ${active === 'clearCompleted'? 'text-active font-extrabold' : theme==='light'? 'hover:font-bold hover:text-black' : 'hover:font-bold hover:text-white'}`} onClick={() => {setActive('clearCompleted'); handleClearCompleted()}}>Clear Completed</button>
            </div>
        </div>
    )

}

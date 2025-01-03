import { useContext } from "react";
import { ThemeContext } from "../context";
import ListTemplate from "./listTemplate";
import { useDroppable } from "@dnd-kit/core";

export default function Lists(){

    const {theme, handleClearCompleted, remainingTasks ,setFilter, allTodoList} = useContext(ThemeContext)

    const {setNodeRef} = useDroppable({
        id: 'droppable'
    })

    return (
        <>
            <div 
            className={`flex flex-col border-none border rounded overflow-hidden ${theme === 'light'? 'bg-white' : 'bg-darkBlue'}`} >
                
            <div 
            ref={setNodeRef}
            >
                {
                    allTodoList && allTodoList.length ? 
                    allTodoList.map((eachItemList, index)=> 
                    <ListTemplate activity={eachItemList} index={index+1} totalList={allTodoList.length}/> ) 
                    : <div 
                    className="flex justify-center items-center p-5 w-full border-solid border-b-greyishBlue border-opacity-30">
                        {
                            remainingTasks? <p>Click Button 'All' or 'Active' to see your toDo lists!</p> 
                            : <p>Tasks lists is empty!</p>
                        }
                    </div>
                }
                </div>
            </div>

            <div className={`flex justify-between items-center text-xs p-3 ${theme === 'light'? 'bg-white border-white' : 'bg-darkBlue border-darkBlue'}`}>
                <span className="flex-none">{remainingTasks} item(s) left</span>
                <div className="flex justify-center items-center gap-5">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('notCompleted')}>Active</button>
                    <button onClick={() => setFilter('completed')}>Completed</button>
                </div>
                <button className="flex-none" onClick={handleClearCompleted}>Clear Completed</button>
            </div>
        </>
    )

}

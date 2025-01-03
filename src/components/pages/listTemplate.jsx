import { useContext } from "react"
import { ThemeContext } from "../context";
import checkIcon from '../../assets/images/icon-check.svg'
import crossIcon from '../../assets/images/icon-cross.svg'
import { useDraggable } from "@dnd-kit/core";

export default function ListTemplate({activity, index, totalList}){

    const { theme, handleRemoveTask, toggleTaskCompletion } = useContext(ThemeContext)
    
    const  {attributes, listeners, setNodeRef} = useDraggable({
            id: activity.id.toString()
        })
    


    return (
        <div 
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`flex justify-center items-center text-base w-full border-solid ${index !== totalList? 'border-b' : null} border-b-greyishBlue border-opacity-30
        `}>
            <div className={`m-1.5 flex-none h-[30px] w-[30px] p-1 flex justify-center items-center`}>
                <span 
                onClick={() => toggleTaskCompletion(activity.id) }
                className="flex justify-center items-center h-full w-full rounded-full border-solid border-opacity-30 border border-greyishBlue">
                    
                    <img src={checkIcon} alt="" />
                </span>
                </div>
            <div className={`w-full outline-none pt-[1rem] pb-[.9rem] ${theme === 'light'? 'bg-white text-darkBlueColor' : 'bg-darkBlueColor text-white'}`}>
                {activity.text}
            </div>
            <div>
                <img
                onClick={(e) => handleRemoveTask(activity.id)}
                className='p-3' 
                src={crossIcon} 
                alt="Clear Icon"/>
            </div>
               
            </div>
    )
}


import { useContext, useState } from "react"
import { ThemeContext } from "../context";
import checkIcon from '../../assets/images/icon-check.svg'
import crossIcon from '../../assets/images/icon-cross.svg'

export default function ListTemplate({activity}){

    const { theme, handleRemoveTask, handleToggleTask, isMobile} = useContext(ThemeContext)

    const [isHovered, setIsoHovered] = useState(false)
 

    return (
        <div 
        onMouseEnter={()=> setIsoHovered(true)}
        onMouseLeave={()=> setIsoHovered(false)}
        className={`flex justify-center items-center text-base w-full border-solid border-b border-b-greyishBlue border-opacity-30
        `}>
            <div className={`m-1.5 flex-none h-[30px] w-[30px] p-1 flex justify-center items-center`}>
                <span 
                onClick={() => handleToggleTask(activity.id) }
                className={`flex justify-center items-center h-full w-full rounded-full border border-solid 
                ${theme === 'light'? 'hover:border-customBlue' : 'hover:border-customPurple'}
                ${activity.completed? 'bg-gradient-to-b from-customBlue to-customPurple border-0' : 'border-opacity-30 border-greyishBlue'}`
                }>
                    {
                       activity.completed? <img src={checkIcon} alt="Completed" /> : null
                    }
                </span>
                </div>
            <div className={`w-full outline-none pt-[1rem] pb-[.9rem] ${theme === 'light'? 'bg-white text-darkBlueColor' : 'bg-darkBlueColor text-white'}`}>
                <p className={`
                ${activity.completed? 'line-through text-opacity-50': null}
                ${theme === 'light'? 'text-black' : 'text-greyishBlue'}
                `}>{activity.text}</p>
            </div>
            {
                isHovered && (
                <div className="w-10 flex-none">
                    <img
                    onClick={(e) => handleRemoveTask(activity.id)}
                    className='p-3' 
                    src={crossIcon} 
                    alt="Clear Icon"/>
            </div>
            )
            }
                      
            </div>
    )
}

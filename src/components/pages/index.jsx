import { useContext } from "react";
import { ThemeContext } from "../context";
import { DndContext } from "@dnd-kit/core";
import bgcolorlight from '../../assets/images/bg-desktop-light.jpg' 
import bgcolordark from '../../assets/images/bg-desktop-dark.jpg' 
import Lists from "./allLists";
import Static from "./static";

export default function TodoList(){

  const { theme, onDragEnd } = useContext(ThemeContext);

  return (
        <DndContext onDragEnd={onDragEnd}>
            <div className= {`w-full min-h-screen flex justify-center py-6
                ${theme === 'light' ? 'bg-whiteColor' 
                : 'bg-blackColor'}`} 

                style= {{backgroundImage: `url(${theme === 'light'? bgcolorlight : bgcolordark})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '100% 15rem',}} >
                    <div className="w-2/5 mt-8 flex flex-col gap-6">
                        <Static/>
                        <Lists/>
                    </div>
                </div>

            </DndContext>
        )  
    };




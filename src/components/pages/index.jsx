import { useContext } from "react";
import { ThemeContext } from "../context";
import bgcolorlightDesktop from '../../assets/images/bg-desktop-light.jpg' 
import bgcolordarkDesktop from '../../assets/images/bg-desktop-dark.jpg' 
import bgcolorlightMobile from '../../assets/images/bg-mobile-light.jpg'
import bgcolordarkMobile from '../../assets/images/bg-mobile-dark.jpg'
import Lists from "./allLists";
import Static from "./static";

export default function TodoList(){

  const { theme, isMobile } = useContext(ThemeContext);

  const myBackgroundImageMobile = {
    backgroundImage: theme === 'light'? `url(${ bgcolorlightMobile})` : `url(${bgcolordarkMobile})`,
    backgroundSize: '100% 15rem'
  }
  const myBackgroundDesk = {
    backgroundImage: theme === 'light'? `url(${ bgcolorlightDesktop})` : `url(${bgcolordarkDesktop})`,
    backgroundSize: '100% 20rem'
  }


  return (
        <div className= {`w-full min-h-screen flex justify-center py-6 bg-no-repeat ${theme === 'light' ? 'bg-whiteColor' : 'bg-blackColor'}`} 
            style = {isMobile? myBackgroundImageMobile : myBackgroundDesk} >
                    <div className={`${isMobile? 'w-[90%] mt-8': 'w-[35rem] mt-28'} flex flex-col gap-6`}>
                        <Static/>
                        <Lists/>
                    </div>
                </div>
        )  
    };




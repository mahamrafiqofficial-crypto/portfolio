import React ,{useState}from 'react';
import { Home } from '../../Pages/Home/Home';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import './Layout.css';
import { Menus } from './Menus/Menus';


export const Layout = () => {

  const [toggle,setToggle] =useState(true)

  //change toggle
  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <>
     <div className="sidebar-section">
        <div className={toggle ?"sidebar-toggle sidebar" : "sidebar"}>
           <div className= "sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {
                toggle? (<MdOutlineKeyboardDoubleArrowLeft size={30} />) :(<MdOutlineKeyboardDoubleArrowRight size={30} />)
              }
              
            </p>
           
           </div>
           <Menus toggle={toggle}/>
        </div>
       <div className={toggle ? "main-content main-content-toggle" : "main-content"}>
        <Home />
       </div>
     </div>
    
    </>
  )
}

import React, { useState } from 'react';
import"./Header.css";
import { FaBars , FaXmark} from "react-icons/fa6";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {NavLink} from "react-router-dom";

function Header() {
    let [present, isPresent] = useAutoAnimate();
    let [menuOpen, setmenuOpen] = useState(false);
    
    

    let menuToggle = () => {
        setmenuOpen(!menuOpen);
        
    }

  
    
  return (
    <div className="headerContainer">
        <div className="title" >
            <span>The</span>
            <span>Siren</span>
            {menuOpen ? <FaXmark className="menuBar" onClick={menuToggle}/> : <FaBars className="menuBar" onClick={menuToggle}/>}
            
        </div>
        <div className="menu">
            <nav className={menuOpen ? "menu_nav menu_Mobile" : "menu_nav"} ref={present}>
               
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/bollywood"><li>Bollywood</li></NavLink>
                    <NavLink to="/techonology"><li>Techonology</li></NavLink>
                    <NavLink to="/hollywood"><li>Hollywood</li></NavLink>
                    <NavLink to="/fitness"><li>Fitness</li></NavLink>
                    <NavLink to="/food"><li>Food</li></NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header;
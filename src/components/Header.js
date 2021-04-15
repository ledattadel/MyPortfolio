import React, { useState } from 'react';
import Btn from './Header/Button'
import { NavLink} from "react-router-dom";

import { useLocation } from "react-router-dom";

const Header = (props) => {
  
  // /assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // 
    return (
        <div className="header">
            <NavLink  className="link" to="/MyPortfolio">
              <Btn class={splitLocation[1] === "" ? "btn-grad2" : "btn-grad"}  name="About" ></Btn>
            </NavLink>
            <NavLink className="link" to="/Contact">
              <Btn class={splitLocation[1] === "Contact" ? "btn-grad2" : "btn-grad"} name="Contact"></Btn>
            </NavLink>  
            <NavLink className="link" to="/Details">
              <Btn class={splitLocation[1] === "Details" ? "btn-grad2" : "btn-grad"} name="Skill"></Btn>
            </NavLink>  
            <NavLink className="link" to="/Project">
              <Btn class={splitLocation[1] === "Project" ? "btn-grad2" : "btn-grad"} name="Project"></Btn>
            </NavLink>  
            {/* <NavLink className="link" to="/Details">
              <Btn class={splitLocation[1] === "" ? "btn-grad2" : "btn-grad"} name="Blog"></Btn>
            </NavLink>  
            <NavLink className="link" to="/Details">
              <Btn class={splitLocation[1] === "" ? "btn-grad2" : "btn-grad"} name="Life"></Btn>
            </NavLink>  
            <NavLink className="link" to="/Details">
              <Btn class={splitLocation[1] === "" ? "btn-grad2" : "btn-grad"} name="Contact"></Btn>
            </NavLink>   */}
               
               
              
        </div>
    )
}

export default Header

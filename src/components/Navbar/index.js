import React from 'react'
import { useHistory } from 'react-router'
import './style.css'

export const Navbar = ({children}) => {
    let history = useHistory();

    return (
        <div >
            <div className="first_header3">
            <img 
                className="logo"
                src={"assets/netflix-logo.png"}
                alt="logo"
                onClick={()=>history.push("/")}></img>
            </div>
            {children}
      </div>
    )
}

export default Navbar;

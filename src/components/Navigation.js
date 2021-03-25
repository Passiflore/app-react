import React from 'react';
import {NavLink} from "react-router-dom"
import "../nav.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/"   className="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="about" className="nav-active">
                A propos
            </NavLink>
            
        </div>
    );
};

export default Navigation;
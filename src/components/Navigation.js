import React from 'react';
import {NavLink} from "react-router-dom"
import Logo from '../components/Logo';
import "../index.css"

const NavBar = () => {
    return (
        <div className="navigation">
            <div>
                <Logo />
            </div>
            <div>
                <NavLink exact to="/"   className="navActive">
                    Accueil
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
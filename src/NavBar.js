import React from "react";
import logo from './nuts-n-more.png';
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="nav">
            <img className="logo" src={logo} alt="logo" />
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;
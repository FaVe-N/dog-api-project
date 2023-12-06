import React from "react";
import logo from './nuts-n-more.png';
import './NavBar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";



const NavBar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <div className="nav">
            <img className="logo" src={logo} alt="logo" />
            <nav ref={navRef}>
            <ul id="MenuItems">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </ul>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
}

export default NavBar;
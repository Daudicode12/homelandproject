// importing react and necessary components
import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../../styles/header.css";

// defining the header component
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);  
    const toggleMenu =() => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className = "header">
            <div className = "logo">
               <a href = "/">Homeland <span>job</span></a>
            </div>

            <nav>
                <ul className = {menuOpen ? "nav-links active" : "nav-links"}>
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/contact">Contact</a></li>
                    <li><a href = "/login">sign in</a></li>
                </ul>
            </nav>

            <button className = "menu-btn" onClick = {toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}

export default Header;
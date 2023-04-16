import "./navbar.css"; 
import React, { useState } from "react"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false); 
    const changeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }; 
    window.addEventListener("scroll", changeBg);
    return (
        <>
            <nav className={
                navbar 
                ? "navbar navbar-expand fixed-top active"
                : "navbar navbar-expand fixed-top"
            }>
                <a href="/" className="navbar-brand">
                    <span>C</span>arr Showroom
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li>
                            <Link to="/about" smooth={true} duration={500} className="nav-link">
                                About
                            </Link>
                        </li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li>
                            <Link to="/gallery" smooth={true} duration={500} className="nav-link">
                                Gallery
                            </Link>
                        </li>
                    </ul>                
                </div>
            </nav>
        </>
    );
};

export default Navbar;
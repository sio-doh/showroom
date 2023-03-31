import "./navbar.css"; 
import React, { useState } from "react"; 
import { Link } from "react-scroll";

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
                <a href="#" className="navbar-brand">
                    <span>C</span>arr Showroom
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li><a href="" className="nav-link">Home</a></li>
                        <li><a href="about.jsx#about-section" className="nav-link">About</a></li>
                        {/* <li>
                            <Link to="about" smooth={true} duration={500} className="nav-link">
                                About
                            </Link>
                        </li> */}
                        <li><a href="" className="nav-link">Contact</a></li>
                        <li>
                            <Link to="details" smooth={true} duration={500} className="nav-link">
                                Gallery
                            </Link>
                        </li>
                    </ul>                
                </div>
            </nav>
        </>
    )
}

export default Navbar;
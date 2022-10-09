import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand fixed-top">
                <a href="#" className="navbar-brand">
                    <span>C</span>arr Showroom
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li><a href="" className="nav-link">Home</a></li>
                        <li><a href="" className="nav-link">About</a></li>
                        <li><a href="" className="nav-link">Contact</a></li>
                        <li><a href="" className="nav-link">Gallery</a></li>
                    </ul>                
                </div>
            </nav>
        </>
    )
}

export default Navbar;
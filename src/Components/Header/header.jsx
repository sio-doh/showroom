import HeaderImg from "../../Images/header.jpg";
import "./header.css"; 
import { Link } from "react-router-dom";

const Header = () => { 
    return (
        <>
            <div className="header">
                <div className="img">
                    <div>
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>
                <div className="Content">
                    <h6>{" "} Fancy Renting A <span>Snazzy</span> Car?</h6>
                    <Link to="/gallery" className="btn">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default Header;
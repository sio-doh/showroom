import HomeImg from "../../Images/home.jpg";
import "./home.css"; 
import { Link } from "react-router-dom";

const home = () => { 
    return (
        <>
            <div className="home">
                <div className="img">
                    <div>
                        <img src={HomeImg} alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>
                <div className="Content">
                    <h6>{" "} Fancy Renting A <span>Snazzy</span> Car?</h6>
                    <Link to="/about" className="btn">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default home;
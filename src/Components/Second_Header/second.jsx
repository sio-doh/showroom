import SecondHeaderImg from "../../Images/second_header.jpg"; 
import "./second.css"; 

const SecondHeader = () => {
    return (
        <>
            <div>
                <div>
                    <img src={SecondHeaderImg} alt="" /> 
                </div>
                <div className="Overlay"></div>
            </div>
        </>
    )
}

export default SecondHeader;
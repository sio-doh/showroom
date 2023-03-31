import ContactImg from "../../Images/contact.jpg"; 
import "./contact.css"; 

const Contact = () => {
    return (
        <>
            <div>
                <div>
                    <img src={ContactImg} alt="" /> 
                </div>
                <div className="Overlay"></div>
            </div>
        </>
    )
}

export default Contact;
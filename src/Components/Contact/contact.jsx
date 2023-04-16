import ContactImg from "../../Images/contact.jpg"; 
import "./contact.css"; 

const Contact = () => {
    return (
        <>
            <div className="contact container" id="contact-section"> 
                <div className="row">
                    <div className="col-sm-5">
                        <img src={ContactImg} className="img-fluid" alt="" /> 
                    </div>

                    <div>
                        <h5>Contact Us</h5>
                        <p>If you have any questions, please fill out the form below we will get back to you as soon as possible: </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label> 
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label> 
                                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
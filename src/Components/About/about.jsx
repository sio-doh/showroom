import AboutImg from "../../Images/about.jpg"; 
import "./about.css";

const About = () => {
    return (
        <>
            <div className="about container">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={AboutImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h5>About</h5>
                        <h6>Rent a Car</h6>
                        <p>Fusce bibendum, neque eu semper accumsan, ipsum augue lobortis turpis, 
                        vitae fringilla dolor est quis enim. Maecenas volutpat quis turpis sit amet 
                        imperdiet. Sed imperdiet ante sed eros vestibulum suscipit. <br /><br /> Nunc euismod 
                        vestibulum dui id rutrum. Etiam sollicitudin sed mi nec venenatis. Phasellus 
                        egestas aliquam nisl et iaculis. Sed laoreet aliquam orci, ultrices cursus 
                        neque rutrum ut. Nam viverra dolor a rhoncus fringilla. <br /><br /> Nulla leo risus, 
                        laoreet at feugiat sit amet, finibus ac magna. Nullam iaculis enim leo, a 
                        euismod justo dictum in.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
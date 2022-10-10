import AudiImg from "../../Images/audi.jpg";
import BmwImg from "../../Images/bmw.jpg";
import FiatImg from "../../Images/fiat.jpg";
import FordImg from "../../Images/ford.jpg";
import PeugeotImg from "../../Images/peugeot.jpg";
import RenaultImg from "../../Images/renault.jpg";
import SuzukiImg from "../../Images/suzuki.jpg";
import VwImg from "../../Images/vw.jpg"; 
import "./details.css";

const Details = () => {
    return (
        <>
            <div className="details container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={AudiImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Audi</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={BmwImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>BMW</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={FiatImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Fiat</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <img src={FordImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Ford</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <img src={PeugeotImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Peugeot</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <img src={RenaultImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Renault</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <img src={SuzukiImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>Suzuki</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mid">
                        <div className="box">
                            <img src={VwImg} className="img-fluid" alt="" />
                            <div className="box_content">
                                <h6>VW</h6>
                                <p>Quisque pretium finibus ipsum. Aliquam aliquam ex justo, 
                                vitae pulvinar nulla pretium at. Pellentesque habitant morbi 
                                tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button className="btn">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;
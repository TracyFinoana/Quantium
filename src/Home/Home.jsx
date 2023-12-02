
// ---------------------------------- import module --------------------------------
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactTyped from 'react-typed';

const Home = ({traduction}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' }); 
    return (
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

                {/* -------------------------creative & innovative --------------------------------------- */}
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <video autoPlay muted loop src='img/video.mp4' id="myVideo" className={`${isMobile ? '' : 'w-100'}`} style={isMobile?{height: 650}:{}}  />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" id='serve'>
                            <div className="p-3 " style={{ maxWidth: 900 }}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">{traduction.slogon}</h5>
                                <ReactTyped  strings={traduction.strings} className="display-2 text-white mb-md-4 animated zoomIn" typeSpeed={100} loop  backSpeed={100} cursorChar="." showCursor={true}/>
                                                                <br/>
                                {/* <h3 className="display-2 text-white mb-md-4 animated zoomIn">De meilleures solutions pour votre entreprise.</h3> */}
                                <a href="#service-home" className="btn btn-primary py-md-3 px-md-5 me-4 animated slideInLeft rounded-pill mt-3">Services</a>
                                <a href="#contact-home" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight rounded-pill  mt-3">Contactez-nous</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------Dasboard --------------------------------------------------- */}
                <div className="container-fluid facts py-5 pt-lg-0" id='serves'>
                    <div className="container py-5 pt-lg-0">
                        <div className="row gx-0">
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60, fontSize: 20 }}>
                                        <i className="fa fa-users text-primary"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">{traduction.hp}</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">40</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                                <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2 " style={{ width: 60, height: 60, fontSize: 20 }}>
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-primary mb-0">{traduction.ProDo}</h5>
                                        <h1 className="mb-0" data-toggle="counter-up">30</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60, fontSize: 20 }}>
                                        <i className="fa fa-award text-primary"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">Services</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">5</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Home;
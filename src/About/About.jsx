import React from 'react';
import { Link } from 'react-router-dom';

const About = ({traduction}) => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id='about-home'>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">{traduction.Qisn}</h5>
                            <h1 className="mb-0">{traduction.about_descrip}</h1>
                        </div>
                        <p className="mb-4">{traduction.about_descrip2} </p>
                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded-pill"
                                style={{ width: 60 + 'px ', height: 60 + 'px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">{traduction.apptq}</h5>
                                <h4 className="text-primary mb-0">+261381451186</h4>
                            </div>
                        </div>
                        {/* <Link href="/" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn rounded-pill" data-wow-delay="0.9s">{traduction.btn_esp}</Link> */}
                    </div>
                    <div className="col-lg-5" style={{ minHeight: 500 + 'px' }}>
                        <div className="position-relative d-flex h-100">
                        {/* <img className="position-absolute w-100 h-100 rounded wow zoomIn img-fluid" data-wow-delay="0.9s"
                                src="./img/about.jpg" style={{ objectFit: 'cover' }} alt='nothing' /> */}
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn img-fluid" data-wow-delay="0.9s"
                                src="./img/5182460.jpg" style={{ objectFit: 'cover' }} alt='nothing' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;
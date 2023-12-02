
// ---------------------------------- import module --------------------------------
import React from 'react';

const Services = ({traduction}) => {
    return (
        <section className='section-about bgservice' id='service-home'>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">

                    {/* ------------------------------------- services ---------------------------------- */}
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">{traduction.services}</h5>
                        <h1 className="mb-0 head-title-1">{traduction.service_descri}</h1>
                    </div>

                    {/* ----------------------------------- All Services ---------------------------------------- */}
                    <div className="row g-5 flex-row justify-content-center align-items-center">
                        {traduction.servicesList.map(service => (
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div
                                    className="service-item bg-light-service rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h4 className="mb-3">{service.title}</h4>
                                    <p className="m-0">{service.description}</p>
                                </div>
                            </div>
                        ))}
                        
                        
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div
                                className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 className="text-white mb-3">{traduction.contact_btn}</h3>
                                <p className="text-white mb-3"> contact@quant-ium.online</p>
                                <h2 className="text-white mb-0">+261381451186</h2>
                                <a href="#contact-home" className="btn-get-started scrollto fw-bold">Contacter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;
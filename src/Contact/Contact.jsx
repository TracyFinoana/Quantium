
// ---------------------------------- import module --------------------------------
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const USER_ID="_NAO1p8K8UKfW8Ror"
const YOUR_SERVICE_ID="service_ufqeg3e"
const YOUR_TEMPLATE_ID="template_1ijxpde"

const Contact = ({traduction}) => {
    const [userMail, setUserMail] = useState({
        nom: '',
        email: '',
        message: '',
    })

    emailjs.init(USER_ID)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserMail({ [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: userMail.nom,
            from_email: userMail.email,
            message: userMail.message,
          };
      
        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
            .then((response) => {
              console.log('E-mail envoyé avec succès!', response);
            })
            .catch((error) => {
              console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            });
    }
    return (
        <div className='contact' id="contact-home">
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">

                    {/* ----------------------------------- contact us --------------------------------- */}
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">{traduction.contact}</h5>
                        <h1 className="mb-0 head-title-1">{traduction.contact_descrip}</h1>
                    </div>

                    {/* ----------------------------------------- phone email adress ----------------------- */}
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded-pill" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4 head-title-5" >
                                    <h6 className="mb-2">{traduction.ctaq}</h6>
                                    <h5 className="text-primary mb-0">+261381451186</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded-pill" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ps-4 head-title-5">
                                    <h6 className="mb-2 ">{traduction.egq}</h6>
                                    <h5 className="text-primary mb-0"> contact@quant-ium.online</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded-pill" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ps-4 head-title-5">
                                    <h6 className="mb-2">{traduction.voo} </h6>
                                    <h5 className="text-primary mb-0">Analakely, Antananarivo 101</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------------- contact ' s from -------------------------------*/}
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input 
                                            type="text" 
                                            id="nom"
                                            name="nom"
                                            value={userMail.nom}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4" 
                                            placeholder={`${traduction.nom}`} 
                                            style={{ height: 55 }} />
                                    </div>
                                    <div className="col-md-6">
                                        <input t
                                            ype="email"
                                            id="email"
                                            name="email"
                                            value={userMail.email}
                                            onChange={handleChange} 
                                            className="form-control border-0 bg-light px-4" 
                                            placeholder={`${traduction.email}`} 
                                            style={{ height: 55 }} />
                                    </div>
                                    {/* <div className="col-12">
                                        <input
                                            type="text" 
                                            className="form-control border-0 bg-light px-4" 
                                            placeholder={`${traduction.sujet}`} 
                                            style={{ height: 55 }} />
                                    </div> */}
                                    <div className="col-12">
                                        <textarea 
                                            id="message"
                                            name="message"
                                            value={userMail.message}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4 py-3" 
                                            rows="4" 
                                            placeholder={`${traduction.message}`}></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3 rounded-pill" type="submit">{traduction.btn_mess}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">

                            <iframe class="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d943.6289611686466!2d47.52719175068479!3d-18.90854803047482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1693568367519!5m2!1sfr!2smg"
                                frameborder="0" style={{ minHeight: 350, border: 0 }} allowfullscreen="" aria-hidden="false" title="This is a unique title"
                                tabindex="0"></iframe>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
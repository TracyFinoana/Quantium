
// -------------Import module -----------------
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Datatraduction from '../src/data/Datatraduction';
import Home from './Home/Home';
import About from "./About/About"
import Services from "./services/Services"
import Projets from "./Projet/Projets"
import Team from "./Team/Team"
import Contact from "./Contact/Contact"
import Chatbot from './bot/ChatBot';
import Partenaire from './Partenaires/Partenaire';
const { Content, Footer } = Layout;

const Alayout = () => {

    const [selectedLangue, setSelectedlangue] = useState("FR")
    function getFormattedYear() {
        const currentYear = new Date().getFullYear();
        return `Quantium ©${currentYear}`;
      }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            {/* -----------------Header --------------- */}
            {
                Datatraduction.filter((i) => i.langue === selectedLangue).map((traduction) => (
                    <div className="container-fluid position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-0 py-lg-0  shadow-sm" >
                            <a href='/' className="navbar-brand p-0">
                                <h1 className="m-0" style={{ fontSize: 1.8 + 'rem' }}>

                                    <img src='./img/logoQuantiumBLUE.png' alt='icon' width={60} height={60} style={{
                                        position: 'relative',
                                        top: 3,
                                        left: 15
                                    }} />uantium</h1>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <a href="#" className="nav-item nav-link  nav-link-home">{traduction.home}</a>
                                    <a href="#about-home" className="nav-link nav-link nav-link-about">{traduction.apropos}</a>
                                    <a href="#project-home" className="nav-item nav-link nav-link-project">{traduction.projets}</a>
                                    <a href="#service-home" className="nav-item nav-link nav-link-service">{traduction.services}</a>
                                    <a href="#Team-home" className="nav-item nav-link nav-link-team">{traduction.team}</a>
                                    <a href="#contact-home" className="nav-item nav-link nav-link-contact">{traduction.contact}</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                            <img src={traduction.ParamsLangues} alt="" width={20} height={20} />
                                        </a>
                                        <div class="dropdown-menu m-0" style={{ cursor: "pointer" }}>
                                            {
                                                Datatraduction.map((traduction) => (
                                                    <div key={traduction.langue}
                                                        class="dropdown-item"
                                                        onClick={() => setSelectedlangue(traduction.langue)}
                                                    >
                                                        <img src={traduction.ParamsLangues} alt="" width={20} height={20} />
                                                        <span style={{ padding: 10 }}>{traduction.langue}</span></div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                ))
            }

            {/* ---------------------Body --------------------------- */}
            <Content
                className="site-layout"

            >
                <div
                    style={{
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    {
                        Datatraduction.filter((i) => i.langue === selectedLangue).map(traduction => (
                            <div>
                                <Home traduction={traduction} />
                                <About traduction={traduction} />
                                <Projets traduction={traduction} />
                                <Services traduction={traduction} />
                                <Team traduction={traduction} />
                                <Contact traduction={traduction} />
                                <Partenaire traduction={traduction} />
                            </div>
                        ))
                    }
                </div>
            </Content>

            {/* --------------------------- Footer ------------------------- */}
            <Footer
                style={{
                    backgroundColor: "#091E3E",
                    padding: 0
                }}
            >
                {
                    Datatraduction.filter((i) => i.langue === selectedLangue).map(traduction => (
                        <div>

                            <div className='container-fluid bg-dark-footer text-light  '>
                                <div className='container'>
                                    <div className='row gx-5'>
                                        <div className='col-lg-4 col-md-6 footer-about'>

                                            <div className='d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4'>
                                                <a herf={'/'} className='navbar-brand justify-content-center'>
                                                    <img src='./img/logoQuantiumBlanc.png' alt='icon' width={200} height={200} className='img-fluid' style={{marginBottom: -50}}/>
                                                    <h1 class="text-white"> Quantium</h1>
                                                </a>
                                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">{traduction.slogon}</h6>
                                                <a title='PRESTATAIRE ProgOnline' target='_blank' href='https://www.progonline.com/freelance-php-joomla-spip-progonline-02a.html' className='btn btn-primary rounded-pill' >
	                                                <img alt="PRESTATAIRE ProgOnline" src='https://www.progonline.com/images/certif.php?nickname=02a' border='0' className='img-fluid' style={{width: 30, height: 30}}/>
                                                    <span className='ms-2 ' style={{fontSize: 12}}>PRESTATAIRE ProgOnline</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-md-6">
                                            <div className="row gx-5">
                                                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                                        <h3 className="text-light mb-0">{traduction.contact_btn}</h3>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                                        <p className="mb-0">Analakely, Antananarivo, Madagascar</p>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                                        <p className="mb-0"> contact@quant-ium.online</p>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <i className="bi bi-telephone text-primary me-2"></i>
                                                        <p className="mb-0">+261381451186</p>
                                                    </div>
                                                    {/* <div className="d-flex mt-4">
                                                        <a className="btn btn-primary btn-square me-2 rounded-pill" to={'#'}><i
                                                            className="fab fa-twitter fw-normal"></i></a>
                                                        <a className="btn btn-primary btn-square me-2 rounded-pill" to={'#'}><i
                                                            className="fab fa-facebook-f fw-normal"></i></a>
                                                        <a className="btn btn-primary btn-square me-2 rounded-pill" to={'#'}><i
                                                            className="fab fa-linkedin-in fw-normal"></i></a>
                                                        <a className="btn btn-primary btn-square rounded-pill" to={'#'}><i
                                                            className="fab fa-instagram fw-normal"></i></a>
                                                    </div> */}
                                                </div>
                                                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5 footer-service">
                                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                                        <h3 className="text-light mb-0">{traduction.services}</h3>
                                                    </div>
                                                    <div className="link-animated d-flex flex-column justify-content-start">
                                                        <a className="text-light mb-2" to={'#'}><i
                                                            className="bi bi-arrow-right text-primary me-2"></i>Developpement web/Mobile</a>
                                                        <a className="text-light mb-2" to={'#'}><i
                                                            className="bi bi-arrow-right text-primary me-2"></i>SEO Optimized</a>
                                                        <a className="text-light mb-2" to={'#'}><i
                                                            className="bi bi-arrow-right text-primary me-2"></i>Data Analitycs</a>
                                                    </div>
                                                </div>
                                            </div >

                                        </div >
                                    </div >
                                </div >
                            </div >
                            
                            <h5
                                style={{
                                    textAlign: 'center',
                                    paddingTop: 25,
                                    paddingBottom: 18,
                                    marginBottom: 0 + "!important",
                                    color: "white"
                                }}>{getFormattedYear()}</h5>
                        </div>
                    ))
                }
                <Chatbot/>
            </Footer >
        </Layout >
    );
};
export default Alayout;
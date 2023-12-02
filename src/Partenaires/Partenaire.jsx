import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardPartner = ({ id, name, image, website }) => {

  return (
    <a
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' ,flexDirection: 'column',marginLeft: 10, marginRight: 10}}
      href={website}
      target='_blank'
    >
      <img src={image} alt={name} style={{ height: 50, marginBottom: 5}}/>
      <h5>{name}</h5>
    </a>
  );
};

const Partners = ({ traduction }) => {
    const Partners = [
        {
          id: 1,
          name: "Telma",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Telma-logo.jpg",
          website: "https://www.telma.mg/",
        },
        {
          id: 2,
          name: "Hairun",
          image: "https://s3-eu-west-1.amazonaws.com/sortlist-core-api/emcnfzmuykxi3lqo1vguxotruwed",
          website: "https://www.hairun-technology.com/",
        },
        {
          id: 3,
          name: "GreenReload",
          image: "https://anaden.org/uploads/media/logos_organism/5f0ed97142957_green-reloads-5e-05-transparent-5.png",
          website: "https://www.greenreloads.com/",
        },
        {
          id: 4,
          name: "Fanampiana",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeeuPaZ7lCS5nNeF6eRemCnHXGrJzRvGMVbXh0xxaiqmb7q7-iSL5Gxu1n0Iay6qvcPM&usqp=CAU",
          website: "https://www.Fanampiana.com",
        },
        {
          id: 5,
          name: "Orange",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/640px-Orange_logo.svg.png",
          website: "https://www.orange.mg/",
        },
      ];
      
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="pb-3" id="Partners-home">
      <section id="partners" className="partners section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">{traduction.PM}</h5>
            <h1 className="mb-0 head-title-1">{traduction.partners_descri}</h1>
          </div>
          <Slider
          dots={false}
          infinite = {true}
          speed={700}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          cssEase="linear"
          pauseOnHover={ true}
          afterChange={(currentSlide) => {
            setCurrentSlide(currentSlide);
          }}
          >{Partners.map((partner, index) => (
            <CardPartner
              key={index}
              id={partner.id}
              name={partner.name}
              description={partner.description}
              image={partner.image}
              website={partner.website}
            />
          ))}</Slider>

          <div className="d-flex justify-content-center mt-3">
            <ul className="nav nav-pills flex-row">
              {Partners.map((partner, index) => (
                <li key={index} className="nav-item">
                  <button
                    className={`nav-link ${currentSlide === index && 'active'}`}
                    onClick={() => {
                      setCurrentSlide(index);
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;

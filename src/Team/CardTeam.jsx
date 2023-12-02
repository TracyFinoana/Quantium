import React from "react";
import { Link } from "react-router-dom";
const CardTeam = ({id, name, title, description, image,facebook,instagram, linkedin}) => {
  return (
    <div key={id} className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
      <div className="member d-flex align-items-start">
        <div className="pic">
          <img
            src={image}
            style={{ backgroundColor: "" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{title}</span>
          <p>{description}</p>
          <div className="social">
            {/* <Link to="#">
              <i className="fab fa-twitter fw-normal"></i>
            </Link> */}
            {
              instagram !== ''&&(
                <Link to={linkedin} target="_blank">
                  <i className="fab fa-linkedin-in fw-normal"></i>
                </Link>
              )
            } 
            {
              linkedin !== '' &&(
                <Link to={instagram} target="_blank">
                  {" "}
                  <i className="fab fa-instagram fw-norma"></i>{" "}
                </Link>
              )
            }
            {
              facebook !== ''&&(
                <Link to={facebook} target="_blank">
                  <i className="fab fa-facebook-f fw-normal"></i>
                </Link>
              )
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;

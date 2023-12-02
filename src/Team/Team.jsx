import React from 'react';
import CardTeam from './CardTeam';
import { Teams } from '../data/DataTeam';

const Team = ({traduction}) => {
    return (
        <div className="team" id="Team-home">
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">{traduction.TM}</h5>
                        <h1 className="mb-0 head-title-1">{traduction.team_descri}</h1>
                    </div>

                    <div className="row justify-content-center">
                        {Teams.map(data => (
                            <CardTeam
                                id={data.id}
                                name={data.name}
                                title={data.title}
                                description={data.description}
                                image={data.image}
                                facebook={data.facebook}
                                instagram={data.instagram}
                                linkedin={data.linkedin}
                                />
                        ))}

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Team;
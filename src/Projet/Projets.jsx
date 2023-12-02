
// ---------------------------------- import module --------------------------------
import React, { useState } from 'react';
import { Modal } from "antd"

const Projets = ({traduction}) => {

    const [popModal, SetModal] = useState(false)

    const getOneProject = (uid) => {

        const Project = traduction.projectsList.find(project => project.id === uid);

        return Project
    }

    const [selectedProject, setSelectedProject] = useState()



    return (
        <div className="background" id="project-home">
            <section class="container-fluid work">

                {/* ----------------------------------------------- work ---------------------------------------------- */}
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                    <h5 className="fw-bold text-primary text-uppercase">{traduction.projets}</h5>
                    <h1 className="mb-0 head-title-1">{traduction.USM}</h1>
                </div>

                {/* -------------------------------------------- projects ----------------------------------------------- */}
                <div class="row work-main justify-content-center">

                    {
                        traduction.projectsList.map((project) => (
                            <div className="work-article col-sm-6 col-md-4 col-lg-4" onClick={() => { SetModal(true); setSelectedProject(getOneProject(project.id)) }}>
                                <div className="work-content team-item  overflow-hidden">
                                    <div className="image-popup" id="img"><img src={project.images} alt="nothing" class="img img-responsive" /></div>
                                    <div className="description text-center py-4">
                                        <h3>{project.name} </h3>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {
                        popModal &&
                        <Modal title={selectedProject.name} visible={popModal} footer={false} width={800} onCancel={() => SetModal(false)}>
                            <div class="image-popup md-5 " id="img" style={{ overflow: 'hidden' }}>
                                <img src={selectedProject.images} alt="nothing" className='img-fluid' style={{
                                    width: 750, paddingTop: 15, height: 400
                                }} />
                            </div>
                            <div className='description-modal text-center'>
                                <h3 className='primary-text'>{selectedProject.name} </h3>
                                <p>{selectedProject.description}</p>
                            </div>

                            <div className='techno-project'>
                                <div className='techno-content'>
                                    Techno  :
                                </div>
                                <ul>
                                    {
                                        selectedProject.techno.map(techno => (
                                            <li>{techno}</li>
                                        ))
                                    }
                                </ul>


                            </div>

                            {/* <div className="text-center">
                                <a href="https://www.youtube.com/" className=' btn btn-primary py-md-3 px-md-5 me-4 animated slideInLeft rounded-pill' onClick={() => { SetModal(false); }}> voir le project</a>
                            </div> */}

                        </Modal>
                    }
                </div>
            </section>
        </div>

        // ---------------------------modal ------------------------------
    );
};

export default Projets;
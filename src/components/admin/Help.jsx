import help2 from '../assets/img/help2.png'
import ppsu from '../assets/img/logo/ppsu_logo.png'
import vb from '../assets/img/about/v.png'
import nirav from '../assets/img/about/nirav.jpg'
import krish from '../assets/img/about/k.png'
import gr from '../assets/img/about/g.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import dean from '../assets/img/about/dean.jpg'

import mmam from '../assets/img/about/mmam.jpg'
import asir from '../assets/img/about/asir.jpg'

// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


import dhelp from '../assets/help_pdf/dhelp.pdf'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

const Help = () => {


    const instAdminReducer = useSelector(state => state.instAdminReducer)


    const [toggle, setToggle] = useState(null);
    let handleToggle = (id) => {
        if (toggle === id) {
            setToggle(null);
            return false
        }
        setToggle(id)
    }



    // For PDF View
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Wrapped
                    );
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageWidth);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    // //console.log(instAdminReducer, "this is student side")
    return (
        <>
            <div className="help_bgImg help_section pb-5 pb-5">
                <div className="container main_container mt-5 ">

                    <section id="hero" className="d-flex align-items-center">
                        <div className="container-fluid" data-aos="fade-up">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-6 pt-3 pt-lg-0 d-flex flex-column justify-content-center">
                                    <h4 className="mt-5 help_center">Hey👋,</h4>
                                    <h4 className=" help_center">Welcome to the Help center</h4>
                                    <h1>Better Experience With PPSU</h1>
                                    <h2>We are providing help for you.</h2>
                                    <div><a href="#about" class="btn-get-started scrollto">How to use?</a></div>
                                </div>
                                <div className="col-xl-5 col-lg-6 hero-img mt-5" data-aos="zoom-in" data-aos-delay="150">
                                    <img src={ppsu} class="img-fluid animated" alt="ppsu" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="help_card mb-5" id='about'>
                        <div className="row mb-5 pb-4 pt-4 justify-content-center">
                            <div className="nav flex-column nav-pills flex-column flex-sm-row" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active left_panel" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Activity</a>
                                <a className="nav-link left_panel" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Help</a>
                                {/* <a className="nav-link left_panel" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                                <a className="nav-link  left_panel" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About</a>
                            </div>
                        </div>
                        {/* <div className="row"> */}
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <section id="team" className="team section-bg">
                                    <div className="container mb-5">

                                        <div className='row mb-3 text-center justify-content-center mt-5'>
                                            <div className="section-title" data-aos="fade-up">
                                                <h2>CHIEF PATRON</h2>
                                                {/* <p>Design & Developed By</p> */}
                                            </div>
                                        </div>


                                        <div className="row text-center justify-content-center">

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src="https://www.ppsu.ac.in/img/ceo-profile.jpg" className="img-fluid" alt="" />
                                                    <ul>
                                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                                        <a href="https://www.linkedin.com/in/paragsanghani/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>DR. PARAG SANGHANI</h4>
                                                        <span>PROVOST, PPSU</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={dean} className="img-fluid" alt="" />
                                                    <ul>
                                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                                        <a href="https://www.linkedin.com/in/niraj-shah-2a2749191/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>DR. NIRAJ SHAH</h4>
                                                        <span>DEAN, SOE</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='row mb-3 text-center justify-content-center mt-5'>
                                            <div className="section-title" data-aos="fade-up">
                                                <h2>Meet Our Team</h2>
                                                {/* <p>Design & Developed By</p> */}
                                            </div>
                                        </div>

                                        <div className="row text-center justify-content-center mt-4">
                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src="https://ppsu.ac.in/soe/img/JasleenKaur.jpg" className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/jasleen-kaur-926bb13a/"><i className='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info">
                                                        <h4>DR. JASLEEN KAUR</h4>
                                                        <span>PROFESSOR</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src="https://ppsu.ac.in/soe/img/Ravirajsinh_Chauhan.jpg" className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/ravirajsinh-chauhan-166a2657/"><i className='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>

                                                <div className="member mt-4 ml-0 mr-0" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>MR. RAVIRAJ CHAUHAN</h4>
                                                        <span>ASST. PROFESSOR</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={asir} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/abhiparmar92/"><i className='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>MR. ABHIJIT PARMAR</h4>
                                                        <span>ASST. PROFESSOR</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={mmam} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href=""><i className='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>MS. MEGHA PATEL</h4>
                                                        <span>ASST. PROFESSOR</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </section>











                                <section id="team" className="team section-bg">
                                    <div className="container mb-5">

                                        <div className='row mb-5 text-center justify-content-center'>
                                            <div className="section-title" data-aos="fade-up">
                                                <h2>Team</h2>
                                                <p>Design & Developed By</p>
                                            </div>
                                        </div>

                                        <div className="row text-center justify-content-center">
                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={gr} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/garvitdhameliya/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                        <a href="https://www.youtube.com/c/AlphaProgrammer/"><i class='bx bxl-youtube' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info">
                                                        <h4>GARVIT DHAMELIYA</h4>
                                                        {/* <span>Web Developer</span> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={vb} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/vivekbodarya/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>

                                                    </ul>
                                                </div>

                                                <div className="member mt-4 ml-0 mr-0" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>VIVEK BODARYA</h4>
                                                        {/* <span>Web Developer</span> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={nirav} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/nirav8/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>

                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>NIRAV MORADIYA</h4>
                                                        {/* <span>Web Developer</span> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={krish} className="img-fluid" alt="" />
                                                    <ul>
                                                        <a href="https://www.linkedin.com/in/krishbm/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>KRISH MORADIYA</h4>
                                                        {/* <span>Web Developer</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>







                            </div>
                            <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div id="accordion">
                                    {
                                        instAdminReducer.selectedActivity?.map((data, ind) => {
                                            const { _id, categoryId, categoryName, description, requirement } = data;
                                            return (
                                                <div className="card activity_tab_card ml-lg-5 mr-lg-5 mb-4" key={_id}>
                                                    <div className="card-header activity_tab" onClick={() => handleToggle(_id)} style={{ cursor: "pointer", fontWeight: "400" }}> {(_id === toggle) ? '-' : '+'} {categoryId}_{categoryName}</div>
                                                    {(_id === toggle) ? <div className="card-body" style={{ fontWeight: '300' }}>
                                                        <b style={{ fontWeight: '500' }}>Description :</b> {description}<br /><br />
                                                        <b style={{ fontWeight: '500' }}>Requirement :</b> {requirement}

                                                    </div> : ''}

                                                </div>

                                            )

                                        })
                                    }


                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                                    <div style={{ height: "600px" }}>
                                        <Viewer fileUrl={dhelp} plugins={[defaultLayoutPluginInstance]} />

                                    </div>
                                </Worker>

                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">..4.</div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Help
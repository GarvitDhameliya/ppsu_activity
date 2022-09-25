import nirav from '../assets/img/about/nirav.jpg'
import gr from '../assets/img/about/g.png'


import dean from '../assets/img/about/dean.jpg'
import vi from '../assets/img/about/v.png'
import kr from '../assets/img/about/k.png'
import mmam from '../assets/img/about/mmam.jpg'
import asir from '../assets/img/about/asir.jpg'

import React from 'react'

const About = () => {
    return (
        <div className="container main_container mt-5">

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

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>DR. PARAG SANGHANI</h4>
                                    <span>PROVOST, PPSU</span>
                                    <ul>
                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                        <a href="https://www.linkedin.com/in/paragsanghani/"><i class='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={dean} className="img-fluid" alt="" />

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>DR. NIRAJ SHAH</h4>
                                    <span>DEAN, SOE</span>
                                    <ul>
                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                        <a href="https://www.linkedin.com/in/niraj-shah-2a2749191/"><i class='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                        {/* <a href=""><li><i className="bi bi-twitter"></i></li></a> */}
                                    </ul>
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

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>DR. JASLEEN KAUR</h4>
                                    <span>PROFESSOR</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/jasleen-kaur-926bb13a/"><i className='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src="https://ppsu.ac.in/soe/img/Ravirajsinh_Chauhan.jpg" className="img-fluid" alt="" />
                            </div>

                            <div className="member mt-4 ml-0 mr-0" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>MR. RAVIRAJ CHAUHAN</h4>
                                    <span>ASST. PROFESSOR</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/ravirajsinh-chauhan-166a2657/"><i className='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={asir} className="img-fluid" alt="" />

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>MR. ABHIJIT PARMAR</h4>
                                    <span>ASST. PROFESSOR</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/abhiparmar92/"><i className='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={mmam} className="img-fluid" alt="" />
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

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info">
                                    <h4>GARVIT DHAMELIYA</h4>
                                    <span>19SE02CE015</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/garvitdhameliya/"><i class='bx bxl-linkedin-square' style={{ 'fontSize': '2rem' }}></i></a>
                                        <a href="https://www.youtube.com/c/AlphaProgrammer/"><i class='bx bxl-youtube mr-5 text-danger' style={{ 'fontSize': '2rem' }}></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={vi} className="img-fluid" alt="" />

                            </div>

                            <div className="member mt-4 ml-0 mr-0" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>VIVEK BODARYA</h4>
                                    <span>19SE02CE009</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/vivekbodarya/"><i class='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={nirav} className="img-fluid" alt="" />

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>NIRAV MORADIYA</h4>
                                    <span>19SE02CE048</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/nirav8/"><i class='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 profile text-center">
                            <div className='img-box'>
                                <img src={kr} className="img-fluid" alt="" />

                            </div>
                            <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                <div className="member-info" style={{ borderRadius: '30px' }}>
                                    <h4>KRISH MORADIYA</h4>
                                    <span>19SE02CE047</span>
                                    <ul>
                                        <a href="https://www.linkedin.com/in/krishbm/"><i class='bx bxl-linkedin-square mr-5' style={{ 'fontSize': '2rem' }}></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default About
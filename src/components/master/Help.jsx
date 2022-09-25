import help2 from '../assets/img/help2.png'
import ppsu from '../assets/img/logo/ppsu_logo.png'
import vb from '../assets/img/about/vivek.jpg'
import nirav from '../assets/img/about/nirav.jpg'
import krish from '../assets/img/about/krish.jpg'
import gr from '../assets/img/about/g.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import dean from '../assets/img/about/dean.jpg'
import vi from '../assets/img/about/v.png'
import kr from '../assets/img/about/k.png'

import jmam from '../assets/img/about/jmam.jpg'
import rsir from '../assets/img/about/rsir.jpg'
import mmam from '../assets/img/about/mmam.jpg'
import asir from '../assets/img/about/asir.jpg'

// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


import chelp from '../assets/help_pdf/chelp.pdf'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

const Help = () => {

    const coeReducer = useSelector(state => state.coeReducer)


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
                                {/* <a className="nav-link  left_panel" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About</a> */}
                            </div>
                        </div>
                        {/* <div className="row"> */}
                        <div className="tab-content" id="v-pills-tabContent">

                            <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div id="accordion">
                                    {
                                        coeReducer.coeHeading?.map((data) => {
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
                                        <Viewer fileUrl={chelp} plugins={[defaultLayoutPluginInstance]} />

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
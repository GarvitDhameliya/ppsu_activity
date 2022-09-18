import React, { useState } from 'react'
import './assets/css/style.css'
import Tabs from './body/home/Tabs';
import TotalPoints from './body/home/pointsCount/TotalPoints';
import { useSelector } from 'react-redux'
import { Loader, noClass, noSchool } from '../constant/constant';
const Home = () => {
    const studentReducer = useSelector(state => state.studentReducer)
    return (
        <>
            {
                studentReducer.student_profile_dataIsLoaded === true
                    ? !studentReducer.studentProfile.class?._id && !studentReducer.studentProfile.class?.name
                        ? noClass()
                        : !studentReducer.studentProfile.school?._id && !studentReducer.studentProfile.school?.name
                            ? noSchool()
                            : studentReducer.dataIsLoaded === true && studentReducer.get_heading_dataIsLoaded === true
                                ? <>
                                    <div className="container main_container mt-5" >
                                        <div className="row">
                                            <div className="col-sm-8 col-md-8 col-lg-10">
                                                <h3 className="mb-4">Activity Request</h3>
                                                <p style={{ lineHeight: '30px' }}>
                                                    Social activities means therapeutic, educational, cultural enrichment, recreational, and other
                                                    activities on site or in the community in a planned program to meet the social needs and interests
                                                    of the participant.
                                                </p>
                                            </div>
                                            <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                                                <TotalPoints />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <section className='tabs_content_block'>
                                                <Tabs />
                                            </section>
                                        </div>
                                    </div>
                                </>
                                : Loader()
                    : Loader()
            }
        </>
    )
}

export default Home

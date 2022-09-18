import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Tabs from './body/home/Tabs'
import { Loader, noClass, noSchool } from '../constant/constant'
import SelectionClass from './body/home/SelectionClass'
import { useLocation } from 'react-router-dom'
const Home = () => {
    const location = useLocation()
    const facultyReducer = useSelector(state => state.facultyReducer)
    return (
        <div className="container main_container mt-5">
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-10">
                    {
                        location.pathname.split('/')[1] !== ''
                            ? <h3 className="mb-0">Approvals</h3>
                            : <h3 className="mb-0">Classes</h3>
                    }
                </div>
            </div>
            <div className='row'>
                <section className='tabs_content_block'>
                    {
                        facultyReducer.faculty_profile_dataIsLoaded === true
                            ? facultyReducer.facultyProfile.school?._id && facultyReducer.facultyProfile.school?.name
                                ? facultyReducer.facultyProfile.class.length !== 0
                                    ? location.pathname.split('/')[1] !== ''
                                        ? facultyReducer.activity_faculty_dataIsLoaded === true
                                            ? <Tabs />
                                            : Loader()
                                        : <SelectionClass />
                                    : noClass()
                                : noSchool()
                            : Loader()
                    }
                </section>
            </div>
        </div>
    )
}
{/* 

<div className='row'>
                <section className='tabs_content_block'>
                    {
                        facultyReducer.faculty_profile_dataIsLoaded === true
                            ? !facultyReducer.facultyProfile.school?.id && !facultyReducer.facultyProfile.school?.name
                                ? noSchool()
                                : facultyReducer.facultyProfile.class.length === 0
                                    ? noClass()
                                    : facultyReducer.activity_faculty_dataIsLoaded === true
                                        ? <Tabs />
                                        : Loader()
                            : Loader()
                    }
                </section>
            </div>
*/ }
export default Home
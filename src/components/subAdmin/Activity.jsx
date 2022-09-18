import React, { useEffect, useState } from 'react'
import Tabs from './body/activty/Tabs'
import { useSelector } from 'react-redux/es/exports'
import { Loader } from '../constant/constant'

const Activity = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <div className="container main_container mt-5">
            {
                apcReducer.apc_profile_dataIsLoaded === true
                    ? apcReducer.class_dataIsLoaded === true && apcReducer.all_student_dataIsLoaded === true && apcReducer.get_activity_by_school_apc_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-8 col-md-8 col-lg-10">
                                    <h3 className="mb-0">Approvals</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <section className='tabs_content_block'>
                                    <Tabs />
                                </section>
                            </div>
                        </>
                        : Loader()
                    : Loader()
            }
        </div>
    )
}

export default Activity
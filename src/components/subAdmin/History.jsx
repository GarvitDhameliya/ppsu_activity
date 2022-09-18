import React from 'react'
import Tabs from './body/history/Tabs'
import { useSelector } from 'react-redux/es/exports'
import { Loader } from '../constant/constant'

const History = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <div className="container main_container mt-5">
            {
                apcReducer.apc_profile_dataIsLoaded === true
                    ? apcReducer.class_dataIsLoaded === true && apcReducer.all_student_dataIsLoaded === true && apcReducer.get_activity_by_school_apc_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-8 col-md-8 col-lg-10">
                                    <h3 className="mb-0">Report</h3>
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

export default History
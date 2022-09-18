import React from 'react'
import ManagePeople from './body/manage/ManagePeople'
import { useSelector } from 'react-redux/es/exports'
import { Loader } from '../constant/constant'

const Manage = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    return (
        <div className="container main_container mt-5">
            {
                apcReducer.apc_profile_dataIsLoaded === true
                    ? apcReducer.class_dataIsLoaded === true && apcReducer.cc_dataIsLoaded === true && apcReducer.all_student_dataIsLoaded === true
                        ? <>
                            <div className="row">
                                <div className="col-sm-8 col-md-8 col-lg-10">
                                    <h3 className="mb-0">Governance</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <section className='tabs_content_block'>
                                    <ManagePeople />
                                </section>
                            </div>
                        </>
                        : Loader()
                    : Loader()
            }
        </div>
    )
}

export default Manage
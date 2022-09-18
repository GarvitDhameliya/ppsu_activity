import React from 'react'
import ManageCategory from './body/manage/collaps_card/manage_heading/ManageCategory'
import ManagePeople from './body/manage/ManagePeople'
import { useSelector } from 'react-redux'
import { Loader } from '../constant/constant'


const Manage = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    return (
        <div className="container main_container mt-5">
            {
                coeReducer.getSchool_dataIsLoaded === true && coeReducer.getDean_dataIsLoaded === true && coeReducer.get_heading_dataIsLoaded === true
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
            }
        </div>
    )
}

export default Manage
import students_grp from '../../../../assets/img/students_grp.svg'
import cc_grp from '../../../../assets/img/cc_grp.svg'
import apc from '../../../../assets/img/apc.svg'
import { useSelector } from 'react-redux/es/exports'
const Card = () => {

    const instAdminReducer = useSelector(state => state.instAdminReducer)
    return (
        <>
            <div className="row">

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="70px" width="90px" />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{instAdminReducer.adminProfile?.school?.totalCommittee}</strong></h4>
                                    <p>Activity Points Coordinators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={cc_grp} height="70px" width="100px" />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{instAdminReducer.adminProfile?.school?.totalFaculty}</strong></h4>
                                    <p>Class Coordinators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={students_grp} height="70px" width="100px" />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{instAdminReducer.adminProfile?.school?.totalStudent}</strong></h4>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card
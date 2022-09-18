import students_grp from '../../../../assets/img/students_grp.svg'
import cc_grp from '../../../../assets/img/cc_grp.svg'
import apc from '../../../../assets/img/apc.svg'
import { useSelector } from 'react-redux'
const Card = () => {

    const coeReducer = useSelector(state => state.coeReducer)
    return (
        <>
            <div className="row mt-2">

                <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="70px" width="90px" alt='ppsu' />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{coeReducer.coeSchool.total?.totalCommittee}</strong></h4>
                                    <p>Activity Point Coordinators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={cc_grp} height="70px" width="100px" alt='ppsu' />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{coeReducer.coeSchool.total?.totalFaculty}</strong></h4>
                                    <p>Class Coordinators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                    <div className="instadmin_home_card card">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={students_grp} height="70px" width="100px" alt='ppsu' />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{coeReducer.coeSchool.total?.totalStudent}</strong></h4>
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
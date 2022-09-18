import React, { useState } from 'react'
import students_grp from '../../../assets/img/students_grp.svg'
import cc_grp from '../../../assets/img/cc_grp.svg'
import apc from '../../../assets/img/classes.svg'
import Managecc from './collaps_card/manage_cc/Managecc'
import ManageStudent from './collaps_card/manage_student/ManageStudent'
import ManageClasses from './collaps_card/manage_classes/ManageClasses'
import CreateClass from './collaps_card/manage_classes/CreateClass'

const ManagePeople = () => {
    const [toggle, setToggle] = useState(null);
    let handleToggle = (id) => {
        if (toggle === id) {
            setToggle(null);
            return false
        }
        setToggle(id)

    }
    return (
        <div className='col-12 container'>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManageclasses")} style={{ cursor: 'pointer' }} id="apc_class">
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="70px" width="90px" />
                                <div className='mt-1 ml-3'>
                                    {/* <p>Manage</p> */}
                                    <h5 className='mt-4'><strong>Classes</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cc */}
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManagecc")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={cc_grp} height="70px" width="100px" alt='ppsu' />
                                <div className='mt-1 ml-2'>
                                    {/* <p>Manage</p> */}
                                    <h5 className='mt-4'><strong>Class Coordinators</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManagestudent")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={students_grp} height="70px" width="100px" />
                                <div className='mt-1 ml-3'>
                                    {/* <p>Manage</p> */}
                                    <h5 className='mt-4'><strong>Students</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {/* class cordinator collaps */}
            <div className="mt-5" id="collapsManagecc" >
                {
                    ("collapsManagecc" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                    <Managecc />
                                </div>
                            </div>
                        </>
                        : ''
                }
            </div>

            {/* class cordinator collaps */}
            <div className="mt-5 " id="collapsManagestudent" >
                {
                    ("collapsManagestudent" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                    <ManageStudent />
                                </div>
                            </div>
                        </>
                        : ''
                }
            </div>

            {/* class cordinator collaps */}
            <div className="mt-5" id="collapsManageclasses" >
                {
                    ("collapsManageclasses" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-8 col-lg-8 mb-4'>
                                    <ManageClasses />
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-4'>
                                    <CreateClass />
                                </div>
                            </div>
                        </>
                        : ''
                }

            </div>
        </div>

    )
}

export default ManagePeople
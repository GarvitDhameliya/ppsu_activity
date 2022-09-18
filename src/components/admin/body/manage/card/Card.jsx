// Images
import { useState } from 'react'
import apc from '../../../../assets/img/apc.svg'
import branch from '../../../../assets/img/branch.jpg'
import activity from '../../../../assets/img/manageActivity.jpg'
import selectActivity from '../../../../assets/img/selectActivity.jpg'
import ManageActivity from '../collpas/manageActivity/ManageActivity'


import CreateApc from '../collpas/manageApc/CreateApc'
import ManageApc from '../collpas/manageApc/ManageApc'
import CreateClass from '../collpas/manageClass/CreateClass'
import ManageClass from '../collpas/manageClass/ManageClass'
import OurActivity from '../collpas/selectActivity/OurActivity'
import SelectActivity from '../collpas/selectActivity/SelectActivity'

const Card = () => {


    const [toggle, setToggle] = useState(null);
    let handleToggle = (id) => {
        if (toggle === id) {
            setToggle(null);
            return false
        }
        setToggle(id)

    }

    // data-toggle="collapse" data-target="#collapsManageclasses" aria-expanded="false" aria-controls="collapsManageclasses" 
    // data-toggle="collapse" data-target="#collapsManageapc" aria-expanded="false" aria-controls="collapsManageapc"
    // data-toggle="collapse"  data-target="#collapsselectActivity" aria-expanded="false" aria-controls="collapsselectActivity"
    // data-toggle="collapse"  data-target="#collapsManageActivity" aria-expanded="false" aria-controls="collapsManageActivity"

    return (
        <>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManageclasses")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={branch} height="80px" width="90px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h5 className='mt-3'><strong>Branches</strong></h5>
                                    {/* <h6>Coordinators</h6> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManageapc")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="80px" width="90px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h6 className='mt-1'><strong>Activity Points</strong></h6>
                                    <h6>Coordinators</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsselectActivity")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={selectActivity} height="70px" alt='ppsu' className='mt-1' />
                                <div className='mt-3 ml-2'>
                                    <h5><strong>Activity</strong></h5>
                                    <h6>Pool</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div className="instadmin_home_card card" onClick={() => handleToggle("collapsManageActivity")} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={activity} height="70px" alt='ppsu' />
                                <div className='mt-3 ml-2'>
                                    <h6>Proposed</h6>
                                    <h5><strong>Activity</strong></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* collapse multi-collapse */}
            <div className="mt-5" id="collapsManageclasses" >

                {
                    ("collapsManageclasses" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-6 col-lg-8'>
                                    <ManageClass />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <CreateClass />
                                </div>
                            </div>
                        </>
                        : ''
                }

            </div>

            <div className="mt-5" id="collapsManageapc" >

                {
                    ("collapsManageapc" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-6 col-lg-8'>
                                    <ManageApc />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <CreateApc />
                                </div>
                            </div>
                        </>
                        : ''
                }

            </div>

            <div className="mt-5" id="collapsselectActivity" >

                {
                    ("collapsselectActivity" === toggle)
                        ? <>
                            <div className="row">
                                <div className='col-sm-12 col-md-6 col-lg-6'>
                                    <SelectActivity />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-6'>
                                    <OurActivity />
                                </div>
                            </div>
                        </>
                        : ''
                }
            </div>

            {/* manage Activity collaps */}
            <div className="mt-5" id="collapsManageActivity" >

                {
                    ("collapsManageActivity" === toggle)
                        ? <>
                            <div className="row" >
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                    <ManageActivity />
                                </div>
                            </div>
                        </>
                        : ''
                }
            </div>

        </>
    )
}
export default Card
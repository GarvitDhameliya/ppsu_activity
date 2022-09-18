import students_grp from '../../../../assets/img/students_grp.svg'
import cc_grp from '../../../../assets/img/cc_grp.svg'
import apc from '../../../../assets/img/apc.svg'
import ApcView from './ApcView'
import CCView from './CCView'

const Card = (props) => {

    const { data } = props
    // //console.log(data)
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapseapcdata" aria-expanded="false" aria-controls="collapseapcdata" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={apc} height="70px" width="90px" />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{data.totalCommittee}</strong></h4>
                                    <p>Activity Points Coodinators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="instadmin_home_card card" data-toggle="collapse" data-target="#collapsefacultydata" aria-expanded="false" aria-controls="collapsefacultydata" style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <div className='row ml-0'>
                                <img src={cc_grp} height="70px" width="100px" />
                                <div className='mt-1 ml-3'>
                                    <h4><strong>{data.totalFaculty}</strong></h4>
                                    <p>Class Coodinators</p>
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
                                    <h4><strong>{data.totalStudent}</strong></h4>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-sm-12 col-md-12 col-lg-12 mt-5 collapse multi-collapse' id="collapseapcdata">
                    <ApcView data={data} />
                </div>

                <div className='col-sm-12 col-md-12 col-lg-12 mt-5 collapse multi-collapse' id="collapsefacultydata">
                    <CCView data={data} />
                </div>



            </div>
        </>
    )
}
export default Card
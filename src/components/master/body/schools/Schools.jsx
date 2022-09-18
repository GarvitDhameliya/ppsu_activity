import { Link } from 'react-router-dom'
import soa from '../../../assets/img/logo/soa.svg'
import sod from '../../../assets/img/logo/sod.svg'
import soe from '../../../assets/img/logo/soe.svg'
import sol from '../../../assets/img/logo/sol.svg'
import son from '../../../assets/img/logo/son.svg'
import sop from '../../../assets/img/logo/sop.svg'
import sos from '../../../assets/img/logo/sos.svg'
import { useSelector } from 'react-redux'
import { base_url } from '../../../../redux/constant'

const Schools = () => {

    const coeSchool = useSelector(state => state.coeReducer)

    return (
        <>
            {
                coeSchool.coeSchool?.result.map((data, ind) => {
                    return (
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4" key={ind}>
                            <Link to={`/schools/${data._id}`}  >
                                <div className="instadmin_home_card card">
                                    <div className="card-body">
                                        <div className='row ml-0 p-2'>
                                            <img src={base_url + '/getFile' + data.image} height="60px" className='card-img' alt='ppsu' />
                                            {/* <p>{data.name}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }

            {/* <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/sod'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={sod} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/soe'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={soe} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/sol'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={sol} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/son'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={son} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/sop'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={sop} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mt-4">
                    <Link to={'/coe/schools/sos'}>
                        <div className="instadmin_home_card card">
                            <div className="card-body">
                                <div className='row ml-0 p-2'>
                                    <img src={sos} height="60px" className='card-img' alt='ppsu' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div> */}
        </>
    )
}
export default Schools
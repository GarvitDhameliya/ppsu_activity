import React from 'react'
import classImg from '../../../assets/img/class.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SelectionClass = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)
    return (
        <>
            <div className='row justify-content-center mt-5'>
                {
                    facultyReducer.facultyProfile.class.map((data) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={data._id}>
                                <div className="instadmin_home_card card" style={{ cursor: 'pointer' }}>
                                    <Link to='#' onClick={() => { window.location.href = `/faculty/${data._id}` }} className="class_selection_linkTag">
                                        <div className="card-body ">
                                            <div className='row ml-0'>
                                                <img src={classImg} height="90px" alt='ppsu' />
                                                <div className='mt-3 ml-2'>
                                                    <h5><strong>{data.name} {data.betch} </strong></h5>
                                                    <h6>Class</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SelectionClass
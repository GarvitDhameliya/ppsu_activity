import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import { studentNavMainData } from '../../constant/navData'


import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_GET_HEADING_PROGRESS,
    REQ_FOR_GET_STUDENT_PROFILE_PROGRESS
} from '../../../redux/student/action/action'



const StudentNavbar = () => {


    const dispatch = useDispatch()
    const studentReducer = useSelector(state => state.studentReducer)
    const [userData, setUserData] = useState()
    const [data, setData] = useState()
    useEffect(() => {
        dispatch({ type: REQ_FOR_GET_STUDENT_PROFILE_PROGRESS })
    }, [dispatch])

    if (studentReducer.student_profile_dataIsLoaded === true) {
        return (
            <>
                <Navbar
                    data={studentNavMainData}
                />
            </>
        )
    }

}

export default StudentNavbar
import React, { useEffect } from 'react'
import Navbar from '../../Navbar'
import { facultyNavMainData } from '../../constant/navData'

import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS,
    REQ_FOR_GET_FACULTY_PROFILE_PROGRESS
} from '../../../redux/faculty/action/action'
const FacultyNavbar = () => {

    const dispatch = useDispatch()
    const facultyReducer = useSelector(state => state.facultyReducer)
    useEffect(() => {
        dispatch({ type: REQ_FOR_GET_FACULTY_PROFILE_PROGRESS })
    }, [dispatch])

    if (facultyReducer.faculty_profile_dataIsLoaded === true) {
        return (
            <Navbar data={facultyNavMainData} />
        )
    }
}

export default FacultyNavbar
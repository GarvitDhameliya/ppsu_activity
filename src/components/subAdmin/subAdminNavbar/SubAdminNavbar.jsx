import React, { useEffect } from 'react'
import { subAdminNavMainData } from '../../constant/navData'
import Navbar from '../../Navbar'

import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_GET_APC_PROFILE_PROGRESS
} from '../../../redux/subAdmin/action/action'
const SubAdminNavbar = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)
    useEffect(() => {
        dispatch({ type: REQ_FOR_GET_APC_PROFILE_PROGRESS })
    }, [dispatch])
    if (apcReducer.apc_profile_dataIsLoaded === true) {
        return (
            <Navbar data={subAdminNavMainData} />
        )
    }
}

export default SubAdminNavbar



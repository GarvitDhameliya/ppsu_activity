import React, { useEffect } from 'react'
import Navbar from "../../Navbar"
import { adminNavMainData } from '../../constant/navData'


import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS
} from '../../../redux/admin/action/action'

const AdminNavbar = () => {

    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    useEffect(() => {
        dispatch({ type: REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS })
    }, [dispatch])

    if (instAdminReducer.instadmin_profile_dataIsLoaded === true) {
        return (
            <>
                <Navbar
                    data={adminNavMainData}
                />
            </>
        )
    }


}
export default AdminNavbar
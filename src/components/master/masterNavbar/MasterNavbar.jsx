import Navbar from '../../Navbar'
import React, { useEffect } from 'react'
import { masterNavMainData } from '../../constant/navData'
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_GET_COE_PROFILE_PROGRESS } from '../../../redux/coe/action/action'
const MasterNavbar = () => {


    const coeReducer = useSelector(state => state.coeReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: REQ_FOR_GET_COE_PROFILE_PROGRESS })
    }, [dispatch])

    if (coeReducer.coe_profile_dataIsLoaded === true)
        return (
            <>
                <Navbar
                    data={masterNavMainData}
                />
            </>
        )
}
export default MasterNavbar
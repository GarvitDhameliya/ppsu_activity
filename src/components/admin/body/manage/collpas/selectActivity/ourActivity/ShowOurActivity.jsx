import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS } from '../../../../../../../redux/admin/action/action'
import { errHandle, infoHandle, warningHandle } from '../../../../../../constant/errHandling'
const ShowOurActivity = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [status, setStatus] = useState(false)
    const heading_name = []
    const heading_data = []

    // Selection logic
    const [selected, setSelected] = useState({
        heading: [],
        allData: []
    })

    const handleClick = (e, data) => {
        const { checked, value } = e.target
        if (checked) {
            setSelected({
                heading: [
                    ...selected.heading,
                    value
                ],
                allData: [
                    ...selected.allData,
                    data
                ]
            })
        } else {
            setSelected({
                heading: selected.heading.filter((e) => e !== value),
                allData: selected.allData.filter((e) => e._id !== data._id)
            })
        }
    }
    const selectActivity = (e) => {
        e.preventDefault()
        if (selected.heading.length !== 0 && selected.allData.length != 0) {
            const data = {
                sendData: {
                    "_schoolId": instAdminReducer.adminProfile?.school._id,
                    "heading": selected.heading,
                },
                "data": selected.allData
            }
            dispatch({ type: REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS, payload: data })
            setSelected({
                heading: [],
                allData: []
            })
            setStatus(true)
            document.getElementById('deSelectActivity').reset()
        } else {
            infoHandle("Opps! Selection is Required.")
        }
    }
    // Success and Err handling message to show End-User
    if (instAdminReducer.patch_selected_activity_success === true && status === true) {
        warningHandle("Activity De-Activate Successfully!")
        setStatus(false)
        window.location.reload()
    }
    if (instAdminReducer.patch_selected_activity_duplication === true && status === true) {
        errHandle("Opps! Duplication Available!")
        setStatus(false)
    }
    // Store in arr for Heading name and Heading Data
    instAdminReducer.selectedActivity.map((data) => {
        // //console.log(data)
        // if (!heading_name.includes(data.addedBy.name)) {
        //     heading_name.push(data.addedBy.name)
        // }
        if (data?.status === 'enable' && data?.isApproved === 'Approved') {

            if (!heading_name.includes(data.addedBy?.name)) {
                heading_name.push(data.addedBy?.name)
            }

            heading_data.push(data)
        }
    })

    return (
        <>
            <div className="mt-1 inst_our_activity">
                {
                    heading_name.length !== 0 && heading_data.length !== 0
                        ? instAdminReducer.patch_deAssign_activity_progress === true
                            ? <div className=" d-flex justify-content-end pr-2">
                                <button className="btn btn-sm add_btn_req" disabled>Loading..</button>
                            </div>
                            :
                            <div className=" d-flex justify-content-end pr-2">
                                <button className="btn btn-sm add_btn_req" onClick={selectActivity}>De-Activate</button>
                            </div>
                        :
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-warning" role="alert">
                                There is  <strong>No Activity</strong>
                            </div>
                        </div>
                }
                <div className="pl-4">
                    <form id="deSelectActivity">
                        {
                            heading_name.map((headingName, ind) => {
                                //console.log(headingName)
                                return (
                                    <div key={ind} className="mb-4">
                                        <li style={{ fontSize: '17px', fontWeight: '600' }} className="mb-3" >{headingName}</li>
                                        {
                                            heading_data.map((data, index) => {
                                                if (data.addedBy?.name == headingName) {
                                                    return (
                                                        <div className="custom-control custom-checkbox my-1 mr-sm-2 d-flex" key={index}>
                                                            <input
                                                                type="checkbox"
                                                                id={data.categoryName}
                                                                value={data._id}
                                                                className="mt-1 mr-2"
                                                                onChange={e => handleClick(e, data)}
                                                            />
                                                            <label htmlFor={data.categoryName}>{data.categoryId}_{data.categoryName}</label><br></br>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
export default ShowOurActivity
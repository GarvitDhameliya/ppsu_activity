import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS } from '../../../../../../../redux/admin/action/action'
import { successHandle, errHandle, infoHandle } from '../../../../../../constant/errHandling'
const SelectionActivity = () => {
    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [status, setStatus] = useState(false)
    // used for filtering HEading
    const heading_name = []
    const heading_data = []

    const selectedActivity = []

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

        if (selected.heading.length !== 0 && selected.allData.length != 0) {
            const data = {
                sendData: {
                    "_schoolId": instAdminReducer.adminProfile?.school._id,
                    "heading": selected.heading,
                },
                "data": selected.allData
            }

            dispatch({ type: REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS, payload: data })
            setSelected({
                heading: [],
                allData: []
            })
            setStatus(true)
            document.querySelector('#selection_form').reset()
        } else {
            infoHandle("Opps! Selection is Required 😏")
        }
    }
    // Store in arr for Heading name and Heading Data
    instAdminReducer.selectedActivity.map((data) => {
        selectedActivity.push(data?._id)
    })
    coeReducer.coeHeading?.map((data) => {
        if (!selectedActivity.includes(data._id)) {
            if (data.status === 'enable' && data.isApproved === 'Approved') {

                if (!heading_name.includes(data.addedBy.name)) {
                    heading_name.push(data.addedBy.name)
                }

                heading_data.push(data)
            }
        }

    })

    // Success and Err handling message to show End-User
    if (instAdminReducer.patch_selected_activity_success === true && status === true) {
        successHandle("Activity Added Successfully! 😎")
        setStatus(false)
        window.location.reload()
    }
    if (instAdminReducer.patch_selected_activity_duplication === true && status === true) {
        errHandle("Opps! Duplication Available 🤦‍♂️")
        setStatus(false)
    }


    return (
        <>
            <div className="mt-1 inst_our_activity">
                {
                    heading_name.length !== 0 && heading_data.length !== 0
                        ? instAdminReducer.patch_selected_activity_progress === true
                            ? <div className=" d-flex justify-content-end pr-2">
                                <button className="btn btn-sm add_btn_req" disabled>Loading..</button>
                            </div>
                            : <div className=" d-flex justify-content-end pr-2">
                                <button className="btn btn-sm add_btn_req" onClick={selectActivity}>Add</button>
                            </div>
                        :
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-warning" role="alert">
                                There is  <strong>No Activity</strong>
                            </div>
                        </div>
                }
                <div className="pl-4">
                    <form id="selection_form">
                        {
                            heading_name.map((headingName, ind) => {
                                return (
                                    <div key={ind} className="mb-4">
                                        <li style={{ fontSize: '17px', fontWeight: '600' }} className="mb-3" >{headingName}</li>
                                        {
                                            heading_data.map((data, index) => {
                                                if (data.addedBy.name == headingName) {
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
export default SelectionActivity
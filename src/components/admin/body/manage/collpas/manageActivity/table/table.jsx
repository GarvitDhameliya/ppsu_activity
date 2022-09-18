import { useSelector, useDispatch } from "react-redux"
import { REQ_FOR_DELETE_HEADING_PROGRESS } from "../../../../../../../redux/admin/action/action"
import DataTable from 'react-data-table-component'
const Table = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const deleteActivity = (data) => {
        dispatch({ type: REQ_FOR_DELETE_HEADING_PROGRESS, payload: data._id })
    }
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontWeight: 600,
                fontSize: '15px',
                border: 'hidden',
                textAlign: 'center',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };


    const columns = [
        {
            name: 'Sr. No',
            cell: (row, index) => <div>
                {
                    row.addedBy._id === instAdminReducer.adminProfile.school._id
                        ? index + 1
                        : null
                }

            </div>,
        },
        {
            name: 'Category',
            selector: row => <div>
                {
                    row.addedBy._id === instAdminReducer.adminProfile.school._id
                        ? <>{row.categoryId}</>
                        : null
                }
            </div>
        },
        {
            name: 'Activity Name',
            selector: row => <div>
                {
                    row.addedBy._id === instAdminReducer.adminProfile.school._id
                        ? row.categoryName
                        : null
                }
            </div>
        },
        {
            name: 'Status',
            selector: row => <div>
                {
                    row.addedBy._id === instAdminReducer.adminProfile.school._id
                        ? <div>
                            {
                                row.isApproved == "Approved"
                                    ? <span className="status_Approved">{row.isApproved}</span>
                                    : row.isApproved == "Pending"
                                        ? <span className="status_Pending">{row.isApproved}</span>
                                        : ""
                            }
                        </div>
                        : null
                }
            </div>
        },
        {
            name: '',
            selector: row => <div>
                {
                    row.addedBy._id === instAdminReducer.adminProfile.school._id
                        ? row.isApproved !== "Approved"
                            ? <div className='btn-group'>
                                {/* <span className='mr-4'><i className='bx bxs-edit-alt'></i></span> */}
                                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteActivity(row)}></i></span>
                            </div>
                            : ''
                        : null
                }
            </div>
        },
    ];

    let i = 1
    return (
        <>
            {/* <div className='mt-2 ml-3'>
                {
                    <DataTable
                        columns={columns}
                        data={instAdminReducer.instadminActivity}
                        pagination
                        customStyles={customStyles}
                    />
                }
            </div> */}
            <div className='table-responsive  mt-5'>
                <table className="table data-table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Id</th>
                            <th scope="col">Activity Name</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {instAdminReducer.instadminActivity?.map((data, ind) => {

                            if (data.addedBy._id === instAdminReducer.adminProfile.school._id) {
                                i = i + 1
                                return (
                                    <tr key={ind}>
                                        <td>{i - 1}</td>
                                        <td>{data.categoryId}</td>
                                        <td>{data.categoryName}</td>
                                        <td>
                                            {
                                                data.isApproved == "Approved"
                                                    ? <span className="status_Approved">{data.isApproved}</span>
                                                    : data.isApproved == "Pending"
                                                        ? <span className="status_Pending">{data.isApproved}</span>
                                                        : ""
                                            }
                                        </td>
                                        <td>

                                            {
                                                data.isApproved !== "Approved"
                                                    ? <div className='btn-group'>
                                                        {/* <span className='mr-4'><i className='bx bxs-edit-alt'></i></span> */}
                                                        <span><i className='bx bxs-trash ml-auto' onClick={() => deleteActivity(data)}></i></span>
                                                    </div>
                                                    : null
                                            }

                                        </td>
                                    </tr>
                                )
                            }
                            else
                                return (
                                    <></>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table
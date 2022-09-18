import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_DELETE_DEAN_PROGRESS } from '../../../../../../../redux/coe/action/action'
import EditSchoolModal from '../modal/EditDeanModal'

import DataTable from 'react-data-table-component'
import { errHandle, successHandle } from '../../../../../../constant/errHandling'

const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(false)

    const [deanEdit, setdeanEdit] = useState("")

    const deleteDean = (data) => {
        dispatch({ type: REQ_FOR_DELETE_DEAN_PROGRESS, payload: data })
        setStatus(true)
    }

    if (coeReducer.delete_coe_dean_status === true && status === true) {
        successHandle("Dean Deleted Succesffully!")
        setStatus(false)
        window.location.reload()
    }
    if (coeReducer.delete_dean_error === true && status === true) {
        errHandle("Opps! Something went wrong.")
        setStatus(false)
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
            name: '#',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'Name',
            selector: row => row.admin?.name,
            width: '21rem'
        },
        {
            name: 'School Name',
            selector: row => row.name,
            width: '10rem'
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.name}`} onClick={() => setdeanEdit(row)}></i></span>
                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteDean(row.admin?.username)}></i></span>
            </div>,
            width: '13rem'
        },

    ];

    return (
        <>
            {/* <div className=" mt-4">
                <DataTable
                    columns={columns}
                    data={coeReducer.coeSchool?.result}
                    pagination
                    customStyles={customStyles}
                />
            </div> */}
            <div className='table-responsive-sm mt-5'>
                <table className="table data-table">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            {/* <th scope="col">Profile Image</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">School Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coeReducer.coeSchool?.result?.map((data, index) => {
                                return (
                                    data.admin != null ?
                                        <tr key={index}>
                                            <th scope="row" >{index + 1}</th>
                                            {/* <td><img src={`http://43.205.206.37:3006/getFile${data.admin?.image}`} className='img-fluid' width={50} height={50} alt='ppsu' style={{ borderRadius: '50%' }} /></td> */}
                                            <td>{data.admin?.name}</td>
                                            <td>{data.name}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${data.admin?.username}`} onClick={() => setdeanEdit(data)}></i></span>
                                                    <span><i className='bx bxs-trash ml-auto' onClick={() => deleteDean(data.admin?.username)}></i></span>
                                                </div>
                                            </td>
                                        </tr> : ''
                                )
                            })
                        }
                    </tbody>
                </table>
                <EditSchoolModal data={deanEdit} />
            </div>
        </>
    )
}

export default Table


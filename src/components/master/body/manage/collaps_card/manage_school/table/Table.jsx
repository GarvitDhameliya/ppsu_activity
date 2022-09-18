import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { REQ_FOR_DELETE_SCHOOL_PROGRESS } from '../../../../../../../redux/coe/action/action'
import EditSchoolModal from '../modal/EditSchoolModal'
import DataTable from 'react-data-table-component'


const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)
    const dispatch = useDispatch()
    const location = useLocation()
    // //console.log(coeReducer)

    const [schoolEdit, setschoolEdit] = useState({})

    const deleteSchool = (data) => {
        dispatch({ type: REQ_FOR_DELETE_SCHOOL_PROGRESS, payload: data })
        window.location.reload()
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
            name: 'Sr No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'School Name',
            selector: row => row.name,
            width: '21rem'
        },
        {
            name: 'Total APC',
            selector: row => row.totalCommittee,
            width: '10rem'
        },
        {
            name: 'Total Faculty',
            selector: row => row.totalFaculty,
            width: '10rem'
        },
        {
            name: 'Total Student',
            selector: row => row.totalStudent,
            width: '13rem'
        },
        {
            name: '',
            selector: row =>
                <div className='btn-group'>
                    {
                        location.pathname == '/governance'
                            ? <>
                                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.name}`} onClick={() => setschoolEdit(row)}></i></span>
                                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteSchool(row._id)}></i></span>
                            </>
                            : null
                    }

                </div>,
            width: '5rem'
        },
    ];


    return (
        <>
            <div className=" mt-4">
                <DataTable
                    columns={columns}
                    data={coeReducer.coeSchool?.result}
                    pagination
                    customStyles={customStyles}
                />
            </div>
            <EditSchoolModal data={schoolEdit} />
        </>
    )
}


export default Table
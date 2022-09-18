import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { REQ_FOR_DELETE_CLASS_CONST_PROGRESS } from '../../../../../../../redux/admin/action/action'
import EditClassModel from '../model/EditClassModel'
import DataTable from 'react-data-table-component'

const ManageClassTable = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [apcId, setApcId] = useState("")
    const classDelete = (e) => {
        const data = {
            'classname': e,
            'school': instAdminReducer.adminProfile?.school?._id
        }
        // //console.log(data)
        dispatch({ type: REQ_FOR_DELETE_CLASS_CONST_PROGRESS, payload: data })
    }

    const location = useLocation()

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
            cell: (row, index) => index + 1,
            width: '10rem'
        },
        {
            name: 'Branch Code',
            selector: row => row.name,
            width: '10rem'
        },
        {
            name: 'Branch Name',
            selector: row => row.description,
            width: '17rem'
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                {/* <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#model${data.name}`} onClick={() => setApcId(data)}></i></span> */}
                <span><i className='bx bxs-trash ml-auto' onClick={() => classDelete(row)}></i></span>
            </div>,
            width: '4rem'
        },
    ];


    return (
        <>
            <div className='mt-2 ml-3'>
                {
                    <DataTable
                        columns={columns}
                        data={instAdminReducer.getClass_instadmin}
                        pagination
                        customStyles={customStyles}
                    />
                }
            </div>
            {/* <EditClassModel data={apcId} /> */}
        </>
    )
}
export default ManageClassTable
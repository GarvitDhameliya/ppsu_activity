import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { REQ_FOR_DELETE_APC_PROGRESS } from '../../../../../../../redux/admin/action/action'
import EditApcModel from '../model/EditApcModel'
import DataTable from 'react-data-table-component'

const ManageApcTable = () => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [apcId, setApcId] = useState("")
    const apcDelete = (data) => {
        dispatch({ type: REQ_FOR_DELETE_APC_PROGRESS, payload: data })
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


    const columns1 = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '10rem'
        },
        {
            name: 'Username',
            selector: row => row.username,
            width: '25rem'
        },
        {
            name: 'Name',
            selector: row => row.name,
            width: '20rem'
        },
    ];
    const columns2 = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'Username',
            selector: row => row.username,
            width: '17rem'
        },
        {
            name: 'Name',
            selector: row => row.name,
            width: '17rem'
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#model${row.name}`} onClick={() => setApcId(row)}></i></span>
                <span><i className='bx bxs-trash ml-auto' onClick={() => apcDelete(row._id)}></i></span>
            </div>,
            width: '5rem'
        },
    ];

    if (location.pathname == '/')
        return (
            <>
                <div className='mt-3 ml-3'>
                    {
                        <DataTable
                            columns={columns1}
                            data={instAdminReducer.getApc_instadmin}
                            pagination
                            customStyles={customStyles}
                        />
                    }
                </div>
                {/* <EditApcModel data={apcId} /> */}
            </>
        )
    else {
        return (
            <>
                <div className='mt-4 ml-3'>
                    {
                        <DataTable
                            columns={columns2}
                            data={instAdminReducer.getApc_instadmin}
                            pagination
                            customStyles={customStyles}
                        />
                    }
                </div>
                <EditApcModel data={apcId} />
            </>
        )
    }
}
export default ManageApcTable
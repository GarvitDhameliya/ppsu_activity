import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditClassModel from '../../manage_classes/editClass/EditClassModel'
import DataTable from 'react-data-table-component'
import { REQ_FOR_DELETE_CLASS_PROGRESS } from '../../../../../../../redux/subAdmin/action/action'
import { successHandle } from '../../../../../../constant/errHandling'
const Table = () => {
    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)
    const [selectbatch, setSelectbatch] = useState('')

    const [classEdit, setClassEdit] = useState("") // for props data to EditModel
    // Delete Class
    const [status, setStatus] = useState(false)
    const deleteClass = (id) => {

        // 100% Working
        dispatch({ type: REQ_FOR_DELETE_CLASS_PROGRESS, payload: { id } })
        setStatus(true)
    }
    if (apcReducer.delete_apc_class_status === true && status === true) {
        successHandle(`Delete Class Successfully! 🔥\n Deleted Student: ${apcReducer.deleted_student_apc}`)
        setStatus(false)
    }


    // For DATA TAble
    const columns = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '8rem'
        },
        {
            name: 'Batch',
            selector: row => row.betch,
            width: '8rem'
        },
        {
            name: 'Class Name',
            selector: row => row.name,
            width: '8rem'
        },
        {
            name: 'Course Duration',
            selector: row => row.duration,
            width: '10rem'
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.name}`} onClick={() => setClassEdit(row)}></i></span>
                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteClass(row._id)}></i></span>
            </div>,
            width: '5rem'
        },
    ];

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

    let data, classbatch = [], data_arr = []
    if (apcReducer.class_dataIsLoaded === true && apcReducer.apc_profile_dataIsLoaded === true) {
        // GET Batch and data add into classbatch arr
        apcReducer.apcClass.map((data) => {
            if (!classbatch.includes(data.betch)) {
                classbatch.push(data.betch)
            }
        })
    }


    const [filter, setFilter] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (selectbatch !== '') {
            setFilter({ year: selectbatch })
        }
    }
    const resetSort = () => {
        // Forcefully state chnage
        setFilter('')
        setSelectbatch('')
        document.getElementById("filter_form_apc_class").reset()
    }

    if (filter) {
        // Only for batch filter
        data_arr = []
        apcReducer.apcClass.map((data) => {
            if (data.betch == filter.year) {
                data_arr.push(data)
            }
        })
        data = data_arr
    } else {
        data = apcReducer.apcClass
    }

    return (
        <>
            <form className='row mt-5 ml-3' id='filter_form_apc_class' onSubmit={onSubmit}>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        onChange={e => setSelectbatch(e.target.value)}
                    >
                        <option defaultValue value="">Batch</option>
                        {
                            classbatch.map((data, index) => {
                                return (
                                    <option value={data} key={index}>{data}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='mt-2 mr-4'>
                    <button className='btn btn-sm filter_apply_btn' type='submit'>Apply</button>
                    <button className='btn btn-sm filter_reset_btn' type='button' onClick={resetSort}>Reset</button>
                </div>
            </form>
            <div className='mt-5 ml-3'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={customStyles}
                />
            </div>
            <EditClassModel data={classEdit} />
        </>

    )
}

export default Table
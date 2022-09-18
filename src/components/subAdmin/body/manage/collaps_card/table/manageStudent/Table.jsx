import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_DELETE_STUDENT_PROGRESS } from '../../../../../../../redux/subAdmin/action/action'
import EditStudentModal from '../../manage_student/editStudent/EditStudentModal'

import DataTable from 'react-data-table-component'
import { useForm } from "react-hook-form";
const Table = () => {
    const apcReducer = useSelector(state => state.apcReducer)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const [studentEdit, setStudentEdit] = useState("") // for props data to EditModel
    // Delete Class
    const deleteClass = (e) => {
        const data = e.enrollmentNo
        dispatch({ type: REQ_FOR_DELETE_STUDENT_PROGRESS, payload: data })
    }
    // For get Year,Class,Enrollment
    const [selectyear, setSelectyear] = useState('')
    const [selectclass, setSelectclass] = useState('')
    const [selectenroll, setSelectenroll] = useState('')

    // For DATA TAble
    const columns = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '8rem'
        },
        {
            name: 'Class',
            selector: row => row.class.batchName,
            width: '12rem'
        },
        {
            name: 'Name',
            selector: row => row.name,
            width: '18rem'
        },
        {
            name: 'Username',
            selector: row => row.enrollmentNo,
            width: '15rem'
        },
        {
            name: '',
            selector: row => <div className='btn-group'>
                <span className='mr-4'><i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.name}`} onClick={() => setStudentEdit(row)}></i></span>
                <span><i className='bx bxs-trash ml-auto' onClick={() => deleteClass(row)}></i></span>
            </div>,
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


    // let sort = { data: "all" }
    const [filter, setFilter] = useState('')
    const onSubmit = (data) => {
        // //console.log(data)
        if (data.year === '' && data.class === '' && data.enroll === '') {
            // TDOD
            // Err handle
            // //console.log("Any one Requied")
        } else {
            setFilter({ year: selectyear, class: selectclass, enroll: selectenroll })
        }
    }
    const resetSort = () => {
        setFilter('')
        // This is used for forcefully chnage value
        setSelectyear('')
        setValue('year', '')

        setSelectclass('')
        setValue('class', '')

        setSelectenroll('')
        setValue('enroll', '')

        document.getElementById("filter_form_apc_student").reset()
    }

    let data, studentYear = [], studentClassName = [], studentEnroll = [], data_arr = []
    // GET DATA

    // Student Year GET for filter
    apcReducer.apcClass.map((data) => {
        if (!studentYear.includes(data.betch)) {
            studentYear.push(data.betch)
        }
    })

    // For getting all Classname for filtering Form using Year
    apcReducer.apcClass.map((data) => {
        if (data.betch == selectyear) {
            if (!studentClassName.includes(data.name)) {
                studentClassName.push(data.name)
            }
        }

    })
    // For getting all Enrollment for filtering Form using Class and Year
    apcReducer.apcStudent.map((data) => {
        if (data.class.betch == selectyear && data.class.name == selectclass) {
            if (!studentEnroll.includes(data.enrollmentNo)) {
                studentEnroll.push(data.enrollmentNo)
            }

        }

    })

    // SET data for filter
    if (filter) {
        // Only Year
        if (filter.year !== '' && filter.class === '' && filter.enroll === '') {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == filter.year) {
                    data_arr.push(data)
                }
            })
            data = data_arr
        }
        // Only year and Class
        else if (filter.year !== '' && filter.class !== '' && filter.enroll === '') {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == filter.year && data.class.name == filter.class) {
                    data_arr.push(data)
                }
            })
            data = data_arr
        }
        // Only year and Class and enroll
        else if (filter.year !== '' && filter.class !== '' && filter.enroll !== '') {
            data_arr = []
            apcReducer.apcStudent.map((data) => {
                if (data.class.betch == filter.year && data.class.name == filter.class && data.enrollmentNo == filter.enroll) {
                    data_arr.push(data)
                }
            })
            data = data_arr
        }
    } else {
        data = apcReducer.apcStudent
    }
    studentEnroll.sort()
    studentClassName.sort()
    studentYear.sort()


    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.name}</div><br />
        <div><strong>Username</strong> :  {data.enrollmentNo}</div>
        <div><strong>Class</strong> :  {data.class.name}</div>
        <div><strong>Batch</strong> :  {data.class.betch}</div>

    </div>;

    return (
        <>

            <form className='row mt-5 ml-3' id='filter_form_apc_student' onSubmit={handleSubmit(onSubmit)}>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        {...register("year")}
                        onChange={e => setSelectyear(e.target.value)}
                    >
                        <option defaultValue value="">Year</option>
                        {
                            studentYear.map((data, index) => {
                                return (
                                    <option value={data} key={index}>{data}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        {...register("class")}
                        onChange={e => setSelectclass(e.target.value)}
                    >
                        <option defaultValue value="">Class</option>
                        {
                            studentClassName.map((data, index) => {
                                return (
                                    <option value={data} key={index}>{data}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='mt-2 mr-4'>
                    <select className="filter_select_menu"
                        style={{ cursor: 'pointer' }}
                        {...register("enroll")}
                        onChange={e => setSelectenroll(e.target.value)}
                    >
                        <option defaultValue value="">Enroll No.</option>
                        {
                            studentEnroll.map((data, index) => {
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
                    expandableRows expandableRowsComponent={ExpandedComponent}
                />
            </div>
            <EditStudentModal data={studentEdit} />
        </>

    )
}


export default Table
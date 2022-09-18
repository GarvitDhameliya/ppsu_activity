import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { useForm } from "react-hook-form";
import { Pending, Recommend, Approved, ToBeRevised, NotRecommend, NotApproved } from '../../../../constant/constant';
const Table = (props) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const apcReducer = useSelector(state => state.apcReducer)
    const [selectedRowsData, setSelectedRowsData] = useState()
    // const handleChanges = ({ selectedRows }) => {
    //     // You can set state or dispatch with something like Redux so we can use the retrieved data
    //     // //console.log('Selected Rows: ', selectedRows);
    //     setSelectedRowsData(selectedRows)
    // };

    const columns = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'En. Number',
            selector: row => row.student?.enrollmentNo,
            width: '10rem'
        },
        // {
        //     name: 'Name',
        //     selector: row => row.student?.name,
        // },
        {
            name: 'Title',
            selector: row => <div>{row.heading?.categoryId}_{row.heading?.categoryName}</div>,
            width: '18rem'
        },
        {
            name: 'Status',
            selector: row => <div className={`status_${row.status}`}>{row.status}</div>,
            width: '13rem'
        },
        {
            name: 'Publish Date',
            selector: row => <div>{row.publishDate.split('T')[0]}</div>,
            width: '10rem'
        },
        {
            name: '',
            selector: row => <Link to={`/apc/view/${row._id}`} >
                <span className='mr-5'>view</span>
            </Link>,
            width: '7rem'
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

    let data_arr = []
    let data
    if (props.data.data_tabs === Recommend) {
        data_arr = []
        // Check len of arr
        if (apcReducer.apcActivityReqBySchool.length > 0) {

            if (props.data.year || props.data.class || props.data.enroll) {
                if (props.data.year !== '' && props.data.class === '' && props.data.enroll === '') {
                    apcReducer.apcActivityReqBySchool.map((data) => {
                        if (data.class.betch == props.data.year && data.status === Recommend) {
                            data_arr.push(data)
                        }
                    })
                    data = data_arr
                }
                else if (props.data.year !== '' && props.data.class !== '' && props.data.enroll === '') {
                    apcReducer.apcActivityReqBySchool.map((data) => {
                        if (data.class.name == props.data.class && data.status === Recommend) {
                            data_arr.push(data)
                        }
                    })
                    data = data_arr
                }
                else if (props.data.year !== '' && props.data.class !== '' && props.data.enroll !== '') {
                    apcReducer.apcActivityReqBySchool.map((data) => {
                        if (data.student.enrollmentNo == props.data.enroll && data.status === Recommend) {
                            data_arr.push(data)
                        }
                    })
                    data = data_arr
                }


            } else {
                // Only those request, that have Status Approved --> Show only on End USer (APC)
                data_arr = []
                apcReducer.apcActivityReqBySchool.map((data) => {
                    if (data.status === Recommend) {
                        data_arr.push(data)
                    }
                })
                data = data_arr
            }

        }
    }

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.student.name}</div><br />
        <div><strong>Activity</strong> :  {data.heading?.categoryId}_{data.heading.categoryName}</div>
        <div><strong>Class</strong> :  {data.class.name}</div>
        <div><strong>Publish Date</strong> :  {data.publishDate.split('T')[0]}</div>
    </div>;

    const onSubmit = (data) => {

        if (!selectedRowsData.length == 0) {
            // //console.log(selectedRows)
            // //console.log(selectedRowsData)
        } else {
            // //console.log("Select row")
        }
    }

    return (
        <>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex justify-content-end mb-3 mt-3'>
                    <div className='mr-2'>
                        <select className="form-control form-control-sm "
                            style={{ cursor: 'pointer' }}
                            name="selectStatus"
                            {...register("selectStatus", {
                                required: true
                            })}
                        >
                            <option defaultValue value="">Select Status</option>
                            <option value="12">Approved</option>
                            <option value="21">Revise</option>
                            <option value="33">Rejected</option>
                        </select>
                        <span className="text-danger">{errors.selectStatus?.type === 'required' && "Status is required!"}</span>
                    </div>
                    <button className='btn btn-sm mb-2' type='submit'>Submit</button>
                </div>
            </form> */}

            <DataTable
                columns={columns}
                data={data}
                pagination
                // selectableRows
                // onSelectedRowsChange={handleChanges}
                customStyles={customStyles}
                expandableRows expandableRowsComponent={ExpandedComponent}
            />


        </>
    )
}

export default Table
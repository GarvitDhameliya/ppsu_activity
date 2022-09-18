import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import ExportModal from '../exportModal/ExportModal'
const Table = (props) => {

    const apcReducer = useSelector(state => state.apcReducer)

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

    // Format is define for Export PDF
    let data, data_arr = [], format

    // FOR FILTER-1
    // Status

    // Status
    if (props.data.status != '' && props.data.year == '' && props.data.class == '' && props.data.enroll == '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.status == props.data.status) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Status"
        }
    }
    // Year
    else if (props.data.status == '' && props.data.year != '' && props.data.class == '' && props.data.enroll == '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.class.betch == props.data.year) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Joining Year"
        }
    }
    // Status and Year
    else if (props.data.status != '' && props.data.year != '' && props.data.class == '' && props.data.enroll == '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.status == props.data.status && data.class.betch == props.data.year) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Status and Joining Year"
        }
    }
    // Year and Class
    else if (props.data.status == '' && props.data.year != '' && props.data.class != '' && props.data.enroll == '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.class.betch == props.data.year && data.class.name == props.data.class) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Joining Year and Class"
        }
    }
    // Year and Class and enroll
    else if (props.data.status == '' && props.data.year != '' && props.data.class != '' && props.data.enroll != '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.class.betch == props.data.year && data.class.name == props.data.class && data.student.enrollmentNo == props.data.enroll) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Joining Year, Class and Enrollment Number"
        }
    }
    // Year and Class and Status
    else if (props.data.status != '' && props.data.year != '' && props.data.class != '' && props.data.enroll == '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.class.betch == props.data.year && data.class.name == props.data.class && data.status == props.data.status) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Joining Year, Class and Status"
        }
    }
    // Year and Class and Status and Enroll
    else if (props.data.status != '' && props.data.year != '' && props.data.class != '' && props.data.enroll != '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.class.betch == props.data.year && data.class.name == props.data.class && data.status == props.data.status && data.student.enrollmentNo == props.data.enroll) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Joining Year, Class, Status and Enrollment Number"
        }
    }
    else {
        data = apcReducer.apcActivityReqBySchool
        format = "All Request by School"
    }


    const columns = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'En. Number',
            selector: row => row.student?.enrollmentNo,
            width: '8rem'
        },
        {
            name: 'Name',
            selector: row => row.student?.name,
            width: '10rem'
        },
        {
            name: 'Activity Name',
            selector: row => <div>{row?.heading?.categoryId}_{row?.heading?.categoryName}</div>,
            width: '20rem'
        },
        {
            name: 'Status',
            selector: row => <div className={`status_${row.status}`}>{row.status}</div>,
            width: '12rem'
        },

        // {
        //     name: 'Publish Date',
        //     selector: row => <div>{row.publishDate.split('T')[0]}</div>,
        //     width: '8rem'
        // },
        {
            name: '',
            selector: row => <Link to={`/instadmin/view/${row._id}`} >
                <span className='mr-5'>view</span>
            </Link>,
            width: '7rem'
        },
    ];

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.student.name}</div><br />
        <div><strong>Heading</strong> :  {data.heading.categoryId}_{data.heading.categoryName}</div>
        <div><strong>Class</strong> :  {data.class.name}</div>
        <div><strong>Batch</strong> :  {data.class.betch}</div>
        <div><strong>Publish Date</strong> :  {data.publishDate.split('T')[0]}</div>
    </div>;
    return (
        <>
            <div className='row'>
                <button className='btn btn-sm ml-auto' data-toggle="modal" data-target="#exportReport">Export</button>
            </div>
            <ExportModal data={[data, format, { role: 'filter1' }]} />
            <div className='mt-2 ml-3'>
                {
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        customStyles={customStyles}
                        expandableRows expandableRowsComponent={ExpandedComponent}
                    />
                }
            </div>
        </>
    )
}
export default Table
import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
const Table3 = (props) => {

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

    let data, data_arr = [], format

    if (props.data.category != '') {
        if (apcReducer.apcActivityReqBySchool.length > 0) {
            data_arr = []
            apcReducer.apcActivityReqBySchool.map((data) => {
                if (data.heading?._id == props.data.category) {
                    data_arr.push(data)
                }
            })
            data = data_arr
            format = "All Request by Activity Name"
        }
    }

    const data_column = [
        {
            name: 'Sr. No',
            cell: (row, index) => index + 1,
            width: '5rem'
        },
        {
            name: 'Batch',
            selector: row => row.class?.betch,
            width: '8rem'
        },
        {
            name: 'Class',
            selector: row => row.class?.name,
            width: '8rem'
        },
        {
            name: 'En. Number',
            selector: row => row.student?.enrollmentNo,
            sortable: true,
            width: '10rem'
        },
        {
            name: 'Name',
            selector: row => row.student?.name,
            width: '15rem'
        },
        {
            name: 'Total Point',
            selector: row => row.student?.totalPoint,
            width: '15rem'
        },
    ];

    const ExpandedComponent = ({ data }) => <div className="alert alert-success" role="alert">
        <div><strong>Name</strong> :  {data.student?.name}</div><br />
        <div><strong>Heading Id</strong> :  {data.heading?.categoryId}</div>
        <div><strong>Heading Name</strong> :  {data.heading?.categoryName}</div>
        <div><strong>Class</strong> :  {data.class?.name}</div>
        <div><strong>Batch</strong> :  {data.class?.betch}</div>
    </div>;

    const handleSort = (column, direction) => (column.selector, direction);

    return (
        <>
            {/* <div className='row'>
                <button className='btn btn-sm ml-auto' data-toggle="modal" data-target="#exportReport">Export</button>
            </div> */}
            {/* <ExportModel data={[data, format, { role: 'filter2' }]} /> */}
            <div className='mt-2 ml-3'>
                {
                    <DataTable
                        columns={data_column}
                        data={data}
                        pagination
                        customStyles={customStyles}
                        expandableRows expandableRowsComponent={ExpandedComponent}
                        onSort={handleSort}
                    />
                }
            </div>
        </>
    )
}
export default Table3
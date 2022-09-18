import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ApproveModel from '../modal_body/ApproveModel'
import DataTable from 'react-data-table-component'

const Table = () => {
    const coeReducer = useSelector(state => state.coeReducer)

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
            name: 'Id',
            selector: row => row.categoryId,
            width: '10rem'
        },
        {
            name: 'Activity Name',
            selector: row => row.categoryName,
            width: '25rem'
        },
        {
            name: 'School Name',
            selector: row => row.addedBy?.name,
            width: '14rem'
        },
        {
            name: 'isApproved',
            selector: row => <div className={`status_${row.isApproved.toString()}`}>{row.isApproved.toString()}</div>,
            width: '10rem'
        },
        {
            name: '',
            selector: row => <i className='bx bxs-edit-alt' data-toggle="modal" data-target={`#edit${row.categoryName}`} onClick={() => setApproveData(row)} ></i>,
            width: '2rem'
        },
    ];

    const paginationOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: 5,
    };

    const [ApproveData, setApproveData] = useState("")

    return (

        <>
            <div className=" mt-4">
                <DataTable
                    columns={columns}
                    data={coeReducer.coeHeading}
                    pagination
                    paginationComponentOptions={paginationOptions}
                    customStyles={customStyles}
                />
            </div>
            <ApproveModel data={ApproveData} />
        </>
    )
}


export default Table
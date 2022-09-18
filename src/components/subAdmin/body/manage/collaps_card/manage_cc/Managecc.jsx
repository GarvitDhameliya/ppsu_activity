import React from 'react'
import Table from '../table/manageCC/Table'
import UploadCSV from '../modal/cc_modal/UploadCSV'
import CCModal from '../modal/cc_modal/CCModal'

const Managecc = () => {
    return (
        <div className="card instadmin_home_card p-3">
            <div className='row'>
                <h5 className="pl-4 mt-4">Class Coordinators</h5>
                <div className='ml-auto mr-4'>
                    <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#addModal">
                        <span><i className='bx bx-user-plus mr-1'></i>Add</span>
                    </button>
                    <CCModal />
                    <button type="button" className="btn btn-sm add_export_btn  mt-3" data-toggle="modal" data-target="#uploadModal">
                        <span><i className='bx bx-export mr-2'></i>Upload CSV</span>
                    </button>
                    <UploadCSV />
                </div>
            </div>
            <Table />

        </div>
    )
}

export default Managecc
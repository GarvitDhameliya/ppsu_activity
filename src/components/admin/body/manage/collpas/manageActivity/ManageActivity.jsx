import React from 'react'
import ActivityReqModal from './model/ActivityReqModal'
import Table from './table/table'

const ManageActivity = () => {
    return (
        <div className="card instadmin_home_card p-3">
            <div className='row'>
                <h5 className="pl-4 mt-4">Proposed Activity Request</h5>
                <div className='ml-auto mr-4'>
                    <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#activityreqModal">
                        <span><i className='bx bx-user-plus mr-1'></i>Add</span>
                    </button>
                    <ActivityReqModal />
                </div>
            </div>
            <Table />
        </div>
    )
}

export default ManageActivity
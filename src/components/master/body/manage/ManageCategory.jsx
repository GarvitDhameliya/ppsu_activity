import React from 'react'
import Table from '../manage/modal/heading_modal/table/Table'
import HeadingModal from './modal/HeadingModal'

const ManageCategory = () => {
    return (
        <div className="card instadmin_home_card p-3">
            <div className='row'>
                <h5 className="pl-4 mt-4">Manage Activity</h5>
                <div className='ml-auto mr-4'>
                    <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#headingModal">
                        <span><i className='bx bx-user-plus mr-1'></i>Add</span>
                    </button>
                    <HeadingModal />
                </div>
            </div>
            <Table />

        </div>
    )
}

export default ManageCategory
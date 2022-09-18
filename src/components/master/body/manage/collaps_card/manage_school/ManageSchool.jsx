import React from 'react'
import Table from './table/Table'
import AddModal from './AddModal'

const ManageSchool = () => {
    return (
        <div className="card instadmin_home_card p-3">
            <div className='row'>
                <h5 className="pl-4 mt-4">Schools</h5>
                <div className='ml-auto mr-4'>
                    <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#addSchool">
                        <span><i className='bx bxs-school mr-1'></i>Add</span>
                    </button>
                    <AddModal />
                </div>
            </div>
            <Table />
        </div>
    )
}

export default ManageSchool
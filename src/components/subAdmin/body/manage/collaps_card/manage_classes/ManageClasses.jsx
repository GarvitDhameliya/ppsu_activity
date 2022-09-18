import React from 'react'
import AssignClassModal from '../modal/class_modal/AssignClassModal'
import Table from '../table/manegeClasses/Table'



const ManageClasses = () => {
    return (
        <>
            <div className="card instadmin_home_card p-3">
                <div className="row">
                    <h5 className="pl-4 mt-4">Classes</h5>
                    <div className='ml-auto mr-4'>
                        <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#assignModal">
                            <span><i className='bx bx-user-plus mr-1'></i>Assign Class</span>
                        </button>
                        <AssignClassModal />
                    </div>
                </div>
                <Table />
            </div>

        </>
    )
}

export default ManageClasses
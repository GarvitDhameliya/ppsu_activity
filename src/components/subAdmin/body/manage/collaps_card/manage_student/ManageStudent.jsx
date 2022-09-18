import React from 'react'
import StudentModal from '../modal/student_modal/StudentModal'
import UploadCSV from '../modal/student_modal/UploadCSV'
import Table from '../table/manageStudent/Table'

const ManageStudent = () => {
    return (
        <div className="card instadmin_home_card p-3">
            <div className='row'>
                <h5 className="pl-4 mt-4">Students</h5>
                <div className='ml-auto mr-4'>
                    <button type="button" className="btn btn-sm add_export_btn  mt-3 mr-3" data-toggle="modal" data-target="#addStudentModal">
                        <span><i className='bx bx-user-plus mr-1'></i>Add Student</span>
                    </button>
                    <StudentModal />
                    <button type="button" className="btn btn-sm add_export_btn  mt-3" data-toggle="modal" data-target="#uploadStudentModal">
                        <span><i className='bx bx-export mr-2'></i>Upload CSV</span>
                    </button>
                    <UploadCSV />
                </div>
            </div>

            <Table />
        </div>
    )
}

export default ManageStudent
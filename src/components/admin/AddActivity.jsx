import React from 'react'
import ManageActivity from './body/add_activity/ManageActivity'

const AddActivity = () => {
    return (
        <>
            <div className="container main_container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h4 className="mb-4">Manage Activity</h4>
                    </div>
                </div>
                <ManageActivity />
            </div>
        </>
    )
}

export default AddActivity
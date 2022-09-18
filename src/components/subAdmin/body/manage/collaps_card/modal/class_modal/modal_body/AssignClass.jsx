
import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';
import { errHandle, successHandle } from '../../../../../../../constant/errHandling';

const AssignClass = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    // //console.log(apcReducer)



    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        const data = {
            "facultyID": e.faculty,
            "classID": e.class
        }
        // //console.log(data)
        dispatch({ type: REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (apcReducer.patch_apc_assign_class_status === true && status === true) {
        successHandle("Class Assign Successfully!")
        setStatus(false)
        setValue('faculty', "")
        setValue('class', "")


    }
    if (apcReducer.patch_apc_assign_class_status_duplicate === true && status === true) {
        errHandle("Already Assigned!")
        setStatus(false)
    }

    if (apcReducer.patch_apc_assign_class_error === true && status === true) {
        errHandle("Already Assigned!")
        setStatus(false)
    }

    // Login for no reapet class
    let unAssignClass_faculty = [], assignClass = []
    apcReducer.apcCC?.map((data) => {
        if (data.class.length === 0) {
            unAssignClass_faculty.push(data._id)
        } else {
            assignClass.push(data.class[0].batchName)
        }
    })

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Mandatory!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-5 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="class"
                        {...register("class", {
                            required: true
                        })}

                    >
                        <option defaultValue value="">Select Class</option>
                        {
                            apcReducer.apcClass.map((data, ind) => {
                                {/* if (!assignClass.includes(data.batchName)) {
                                   
                                } */}
                                return (
                                    <option key={ind} value={data._id}>{data.batchName}</option>
                                )
                            })
                        }

                    </select>
                    <span className="text-danger">{errors.class?.type === 'required' && "Class is required!"}</span>
                </div>


                <div className='mb-5 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="faculty"
                        {...register("faculty", {
                            required: true
                        })}

                    >
                        <option defaultValue value="">Select Faculty</option>
                        {
                            apcReducer.apcCC.map((data, ind) => {
                                {/* if (unAssignClass_faculty.includes(data._id)) {
                                   
                                } */}
                                return (
                                    <option key={ind} value={data._id}>{data.name}</option>
                                )
                            })
                        }

                    </select>

                    <span className="text-danger">{errors.faculty?.type === 'required' && "Faculty is required!"}</span>
                </div>


                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    {
                        apcReducer.patch_apc_assign_class_progress === true
                            ? <button className="btn submit-btn">Assigning...</button>
                            : <button type="submit" className="btn submit-btn">Assign</button>
                    }
                </div>

            </form>
        </>
    )

}

export default AssignClass
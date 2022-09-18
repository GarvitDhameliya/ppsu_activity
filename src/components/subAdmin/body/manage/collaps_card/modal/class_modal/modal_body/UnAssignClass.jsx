
import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { REQ_FOR_UNASSIGN_CLASS_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';


const UnAssignClass = (props) => {

    const { data } = props
    // //console.log(data._id)

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    // //console.log(apcReducer)


    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    setValue('facultyID', data._id)
    const onSubmit = (e) => {
        // //console.log(e)
        // e.preventDefault()
        const data = {
            'facultyID': e.facultyID,
            'classID': e.classID,
        }
        dispatch({ type: REQ_FOR_UNASSIGN_CLASS_PROGRESS, payload: data })
        setStatus(true)
    }

    if (apcReducer.patch_apc_unassign_class_status === true && status === true) {
        const button = document.getElementById('closeModal_unassign')
        button.click()
        setStatus(false)
        // window.location.reload()
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Mandatory!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="hidden" defaultValue={data._id}
                    {...register("facultyID")}
                />

                <div className='mb-5 mt-2 '>

                    <label>Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        defaultValue={data.name}
                        disabled
                    />

                </div>

                <div className='mb-5 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="class"
                        {...register("classID", {
                            required: true
                        })}

                    >
                        <option defaultValue value="">Select Class</option>
                        {
                            data.class?.map((data, ind) => {
                                return (
                                    <option key={ind} value={data._id}>{data.batchName}</option>
                                )
                            })
                        }

                    </select>
                    <span className="text-danger">{errors.classID?.type === 'required' && "Class is required!"}</span>
                </div>


                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" id='closeModal_unassign' data-dismiss="modal">Close</button>
                    <button type="submit" className="btn submit-btn">UnAssign</button>
                </div>

            </form>
        </>
    )

}

export default UnAssignClass

import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_CREATE_STUDENT_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';
import { errHandle, successHandle } from '../../../../../../../constant/errHandling';


const AddStudent = () => {
    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)
    // //console.log(apcReducer)

    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    // const selected = watch("class");
    const onSubmit = (e) => {

        const data = {
            'name': e.name,
            'enrollmentNo': e.enrollmentNo,
            'school': e.school,
            'class': e.class,
            'gender': e.gender,
            'cast': e.cast
        }

        dispatch({ type: REQ_FOR_POST_CREATE_STUDENT_PROGRESS, payload: { data } })
        setStatus(true)

    }

    if (apcReducer.add_apc_student_status === true && status === true) {
        successHandle("Class Coordinator Added Succesffully! 😎")
        setStatus(false)
        setValue('class', '')
        setValue('name', '')
        setValue('enrollmentNo', '')
        setValue('gender', '')
        setValue('cast', '')

    }
    if (apcReducer.add_apc_student_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

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
                            apcReducer.apcClass.map((data, ind) => <option key={ind} value={data._id}>{data.batchName}</option>)
                        }
                    </select>

                    <span className="text-danger">{errors.class?.type === 'required' && "Class is required!"}</span>
                </div>

                {/* <div className='mb-5 mt-2 '>
                        <select className="form-control form-control-sm "
                            style={{ cursor: 'pointer' }}
                            name="year"
                            {...register("year", {
                                required: true
                            })}
                        >
                            {
                                apcReducer.apcClass.map((data, ind) => {
                                    if (selected === data.name) {
                                        return (
                                            <option key={ind} value={data.batchName}>{data.batchName}</option>
                                        )
                                    }


                                })
                            }
                        </select>

                        <span className="text-danger">{errors.year?.type === 'required' && "Batch is required!"}</span>
                    </div> */}

                <div className='mb-4 mt-2 '>
                    <label>Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Z ]*$/
                        })}
                    />
                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                </div>


                <div className='mb-4 mt-2 '>
                    <label>Enrollment Number<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="enrollmentNo"
                        className="form-control"
                        {...register("enrollmentNo", {
                            required: true,
                            pattern: /^[A-Z0-9]*$/
                        })}
                    />
                    <span className="text-danger">{errors.enrollmentNo?.type === 'required' && "En. Number is required!"}</span>
                    <span className="text-danger">{errors.enrollmentNo?.type === 'pattern' && "You are permitted to input only uppercase and 0-9 in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <input
                        type="hidden"
                        name="school"
                        className="form-control"
                        defaultValue={apcReducer.apcProfile.school._id}
                        {...register("school", {
                            required: true
                        })}
                    />
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Gender<span className='text-danger'> *</span></label>
                    <div>
                        <label>Male :&nbsp;</label>
                        <input
                            type="radio"
                            value="male"
                            className=" mr-3"
                            {...register("gender", {
                                required: true
                            })}

                        />
                        <label>Female :&nbsp;</label>
                        <input
                            type="radio"
                            value="female"
                            className=""
                            {...register("gender", {
                                required: true
                            })}
                        />

                    </div>
                    <span className="text-danger">{errors.gender?.type === 'required' && "Name is required!"}</span>
                </div>
                {
                    apcReducer.add_apc_create_student_progress === true
                        ? <div className="mt-5 d-flex justify-content-end">
                            <button className="btn submit-btn" disabled>Loading..</button>
                        </div>
                        : <div className="mt-5 d-flex justify-content-end">
                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                            <button type="sumit" className="btn submit-btn">Add</button>
                        </div>
                }
            </form>
        </>
    )

}

export default AddStudent
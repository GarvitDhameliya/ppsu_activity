
import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_CREATE_CC_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';
import { toast } from 'react-toastify';
import { errHandle, successHandle } from '../../../../../../../constant/errHandling';

const AddCC = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_POST_CREATE_CC_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (apcReducer.add_apc_cc_status === true && status === true) {
        successHandle("Class Coordinator Added Succesffully! 😎")
        setStatus(false)
        setValue('username', '')
        setValue('name', '')
        setValue('gender', '')

    }
    if (apcReducer.add_apc_cc_status_duplicate === true && status === true) {
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
                    <span className="text-danger">{errors.gender?.type === 'required' && "Gender is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Email (Username) <span className='text-danger'> *</span></label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        {...register("username", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.username?.type === 'required' && "Email is required!"}</span>
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




                {
                    apcReducer.add_apc_create_cc_progress === true
                        ? <div className="mt-5 d-flex justify-content-end">
                            <button className="btn submit-btn" disabled>Loading..</button>
                        </div>
                        : <div className="mt-5 d-flex justify-content-end">
                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn submit-btn">Submit</button>
                        </div>
                }
            </form>
        </>
    )
}

export default AddCC

import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { errHandle, successHandle } from '../../../../../../constant/errHandling';
import { REQ_FOR_POST_CREATE_HEADING_PROGRESS } from '../../../../../../../redux/coe/action/action';

const AddHeading = () => {

    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)

    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        // //console.log(e)

        const data = {
            // 'categoryId': e.categoryId,
            'categoryName': e.categoryName,
            'description': e.description,
            'requirement': e.requirement,
            'parameter': [
                {
                    "name": e.date,
                    "type": "date"
                },
                {
                    "name": e.startdate,
                    "type": "date"
                },
                {
                    "name": e.enddate,
                    "type": "date"
                },
                {
                    "name": e.location,
                    "type": "text"
                },
                {
                    "name": e.compnayName,
                    "type": "text"
                },
                {
                    "name": e.other,
                    "type": "text"
                },
            ],
            isApproved: 'Approved'
        }
        // //console.log(data)
        dispatch({ type: REQ_FOR_POST_CREATE_HEADING_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (coeReducer.add_coe_heading_status === true && status === true) {
        successHandle("Heading Added Succesffully! 😎")
        setStatus(false)
    }
    if (coeReducer.add_coe_heading_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }
    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Required!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <div className='mb-4 mt-2 '>
                    <label>Category Id <span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="categoryId"
                        className="form-control"
                        {...register("categoryId", {
                            required: true,
                            pattern: /^[A-Z0-9_]*$/
                        })}
                    />
                    <span className="text-danger">{errors.categoryId?.type === 'required' && "Category Id is required!"}</span>
                    <span className="text-danger">{errors.categoryId?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                </div> */}

                <div className='mb-4 mt-2 '>
                    <label>Activity Name <span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="categoryName"
                        className="form-control"
                        {...register("categoryName", {
                            required: true,
                            pattern: /^[[A-Z0-9_ *{}()=+!-/]*$/
                        })}
                    />
                    <span className="text-danger">{errors.categoryName?.type === 'required' && "categoryName is required!"}</span>
                    <span className="text-danger">{errors.categoryName?.type === 'pattern' && "You are permitted to input only uppercase or `{}()/_=+-*!` in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Description<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        {...register("description", {
                            required: true,
                            pattern: /^[A-Z0-9_ *{}()=+!-/]*$/
                        })}
                    />
                    <span className="text-danger">{errors.description?.type === 'required' && "description is required!"}</span>
                    <span className="text-danger">{errors.description?.type === 'pattern' && "You are permitted to input only uppercase or `{}()/_=+-*!` in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Requirement<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="requirement"
                        className="form-control"
                        {...register("requirement", {
                            required: true,
                            pattern: /^[A-Z0-9_ *{}()=+!-/]*$/
                        })}
                    />
                    <span className="text-danger">{errors.requirement?.type === 'required' && "Requirement is required!"}</span>
                    <span className="text-danger">{errors.requirement?.type === 'pattern' && "You are permitted to input only uppercase or `{}()/_=+-*!` in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Parameter<span className='text-danger'> *</span></label>
                    <div>
                        <label>Date :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="date"
                            className=" mr-3"
                            {...register("date", {
                                required: false
                            })}

                        />
                    </div>
                    <div>
                        <label>Start Date :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="startdate"
                            className=" mr-3"
                            {...register("startdate", {
                                required: false
                            })}

                        />
                    </div>
                    <div>
                        <label> End Date :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="enddate"
                            className=" mr-3"
                            {...register("enddate", {
                                required: false
                            })}

                        />
                    </div>
                    <div>
                        <label>Location :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="location"
                            className=" mr-3"
                            {...register("location", {
                                required: false
                            })}

                        />
                    </div>
                    <div>
                        <label>Company Name :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="compnayName"
                            className=" mr-3"
                            {...register("compnayName", {
                                required: false
                            })}

                        />
                    </div>
                    <div>
                        <label>Other :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="other"
                            className=" mr-3"
                            {...register("other", {
                                required: false
                            })}

                        />
                    </div>
                </div>


                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn submit-btn">Submit</button>
                </div>

            </form>
        </>
    )
}

export default AddHeading
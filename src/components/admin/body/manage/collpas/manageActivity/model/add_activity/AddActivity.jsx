
import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";

import { errHandle, successHandle } from '../../../../../../../constant/errHandling';
import { REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS } from '../../../../../../../../redux/admin/action/action';


const AddActivity = () => {

    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    // //console.log(apcReducer)


    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = (e) => {

        const data = {
            'addedBy': e.addedBy,
            // 'categoryId': e.categoryId,
            '_schoolId': e._schoolId,
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
        }
        dispatch({ type: REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (instAdminReducer.add_instadmin_activity_status === true && status === true) {
        successHandle("Activity Request Added Succesffully! 😎")
        setStatus(false)
        window.location.reload()
    }
    if (instAdminReducer.add_instadmin_activity_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feilds are Mandatory!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-4 mt-2 '>
                    <input
                        type="hidden"
                        name="addedBy"
                        defaultValue={instAdminReducer.adminProfile?.school._id}
                        className="form-control"
                        {...register("addedBy", {
                            required: true
                        })}
                    />
                </div>


                <div className='mb-4 mt-2 '>
                    <input
                        type="hidden"
                        name="_schoolId"
                        defaultValue={instAdminReducer.adminProfile?.school._id}
                        className="form-control"
                        {...register("_schoolId", {
                            required: true
                        })}
                    />
                </div>

                {/* <div className='mb-4 mt-2 '>
                    <label>Category Id <span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="categoryId"
                        className="form-control"
                        {...register("categoryId", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.categoryId?.type === 'required' && "Category Id is required!"}</span>
                </div> */}

                <div className='mb-4 mt-2 '>
                    <label>Activity Name <span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="categoryName"
                        className="form-control"
                        {...register("categoryName", {
                            required: true,
                            pattern: /^[A-Z0-9()#%+>=_/,.?! ]*$/
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.categoryName?.type === 'required' && "categoryName is required!"}</span>
                    <span className="text-danger">{errors.categoryName?.type === 'pattern' && "You are permitted to input uppercase and '0-9()#%+>=_!/,.?' in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Description<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        {...register("description", {
                            required: true,
                            pattern: /^[A-Z0-9()#%+>=_/,.?! ]*$/
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.description?.type === 'required' && "description is required!"}</span>
                    <span className="text-danger">{errors.description?.type === 'pattern' && "You are permitted to input uppercase and '0-9()#%+>=_!/,.?' in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Requirement<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="requirement"
                        className="form-control"
                        {...register("requirement", {
                            required: true,
                            pattern: /^[A-Z0-9()#%+>=_/,.?! ]*$/
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.requirement?.type === 'required' && "Requirement is required!"}</span>
                    <span className="text-danger">{errors.requirement?.type === 'pattern' && "You are permitted to input uppercase and '0-9()#%+>=_!/,.?' in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Parameter</label>
                    <div>
                        <label>Date :&nbsp;</label>
                        <input
                            type="checkbox"
                            value="date"
                            className=" mr-3"
                            {...register("date", {
                                required: false
                            })}
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

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
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

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
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

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
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

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
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        />
                    </div>
                </div>


                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    {
                        instAdminReducer.add_instadmin_create_activity_progress === true
                            ? <button className="btn submit-btn" disabled>Submiting..</button>
                            : <button type="submit" className="btn submit-btn">Submit</button>
                    }

                </div>

            </form>
        </>
    )
}

export default AddActivity

import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_CREATE_DEAN_PROGRESS, REQ_FOR_POST_CREATE_SCHOOL_PROGRESS } from '../../../../../../../redux/coe/action/action';
import { errHandle, successHandle } from '../../../../../../constant/errHandling';




const AddDean = () => {
    const dispatch = useDispatch()

    const coeReducer = useSelector(state => state.coeReducer)
    const adata = coeReducer.coeSchool?.result?.map((data, ind) => {
        if (data.admin == null) {
            return (data._id)
        }
    })
    // //console.log(adata)
    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const selected = watch("class");
    const onSubmit = (e) => {
        // //console.log(e)
        const data = {
            'username': e.username,
            'password': e.password,
            'school': e.school,
            'name': e.name
        }
        dispatch({ type: REQ_FOR_POST_CREATE_DEAN_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (coeReducer.add_coe_dean_status === true && status === true) {
        successHandle("Dean Added Succesffully!")
        setStatus(false)
        window.location.reload()

    }
    if (coeReducer.add_coe_dean_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry!")
        setStatus(false)
    }
    if (coeReducer.add_coe_create_dean_error === true && status === true) {
        errHandle("Opps! Something went wrong.")
        setStatus(false)
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Required!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-4 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="school"
                        {...register("school", {
                            required: true
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

                    >
                        <option defaultValue value="">Select School</option>
                        {
                            coeReducer.coeSchool?.result?.map((data, ind) => adata.includes(data._id) ? <option key={ind} value={data._id}>{data.name}</option> : null)
                        }
                    </select>

                    <span className="text-danger">{errors.school?.type === 'required' && "School is required!"}</span>
                </div>


                <div className='mb-4 mt-2 '>
                    <label>Dean Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Z ]*$/
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Email<span className='text-danger'> *</span></label>
                    <input
                        type="email"
                        name="username"
                        className="form-control"
                        {...register("username", {
                            required: true,
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.username?.type === 'required' && "User Name is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Password<span className='text-danger'> *</span></label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        {...register("password", {
                            required: true
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                </div>


                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    {
                        coeReducer.add_coe_create_dean_progress === true
                            ? <button className="btn submit-btn" disabled>Adding..</button>
                            : <button type="sumit" className="btn submit-btn">Add</button>
                    }
                </div>

            </form>
        </>
    )
}

export default AddDean
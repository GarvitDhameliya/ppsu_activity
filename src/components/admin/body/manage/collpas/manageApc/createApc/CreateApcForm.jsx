import { useForm } from "react-hook-form";
import { useState } from "react";

// Import for validation err or success to user
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_POST_APC_PROGRESS
} from '../../../../../../../redux/admin/action/action'

const CreateApcForm = () => {


    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_POST_APC_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (instAdminReducer.add_apc_status_success === true && status === true) {
        successHandle("APC Added Succesffully!")
        setValue('name', '');
        setValue('username', '');
        setStatus(false)
    }
    if (instAdminReducer.add_apc_status_duplicate === true && status === true) {
        errHandle("Duplication available!")
        setStatus(false)
    }
    if (instAdminReducer.add_apc_instadmin_error === true && status === true) {
        errHandle("Opps! Something went wrong.")
        setStatus(false)
    }

    return (
        <>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
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
                            required: true
                        })}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                    <span className="text-danger">{errors.username?.type === 'required' && "Email is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <input
                        type="hidden"
                        name="school"
                        className="form-control"
                        defaultValue={instAdminReducer.adminProfile?.school._id}
                        {...register("school", {
                            required: true
                        })}
                    />
                </div>
                {
                    instAdminReducer.add_apc_instadmin_progress === true
                        ? <button className="btn submit-btn" disabled>Creating..</button>
                        : <button type="submit" className="btn submit-btn">Create</button>
                }
            </form>
        </>
    )
}
export default CreateApcForm
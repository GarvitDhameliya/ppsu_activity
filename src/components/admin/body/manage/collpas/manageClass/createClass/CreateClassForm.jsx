import { useForm } from "react-hook-form";
import { useState } from "react";

// Import for validation err or success to user
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_POST_CLASS_CONST_PROGRESS
} from '../../../../../../../redux/admin/action/action'

const CreateClassForm = () => {


    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_POST_CLASS_CONST_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (instAdminReducer.add_class_status_success === true && status === true) {
        successHandle("Branch Added Succesffully!")
        setValue('name', '');
        setValue('description', '');
        setStatus(false)
    }
    if (instAdminReducer.add_class_status_duplicate === true && status === true) {
        errHandle("Duplication available!")
        setStatus(false)
    }
    if (instAdminReducer.add_class_instadmin_error === true && status === true) {
        errHandle("Opps! Somthing went wrong.")
        setStatus(false)
    }

    return (
        <>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4 mt-2 '>
                    <label>Branch Code<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Z_]*$/
                        })}
                    />
                    <span className="text-danger">{errors.name?.type === 'required' && "Branch Code is required!"}</span>
                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input uppercase and '_' !"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Branch Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        {...register("description", {
                            required: true,
                            pattern: /^[A-Z ]*$/
                        })}
                    />
                    <span className="text-danger">{errors.description?.type === 'required' && "Branch Name is required!"}</span>
                    <span className="text-danger">{errors.description?.type === 'pattern' && "You are permitted to input only uppercase!"}</span>

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
                    instAdminReducer.add_class_instadmin_progress === true
                        ? <button className="btn submit-btn" disabled>Creating..</button>
                        : <button type="submit" className="btn submit-btn">Create</button>
                }
            </form>
        </>
    )
}
export default CreateClassForm
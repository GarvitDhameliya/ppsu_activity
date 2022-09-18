import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_STUDENT_PROGRESS } from "../../../../../../../redux/subAdmin/action/action";
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

const EditStudentModal = (props) => {
    // //console.log(props)
    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    const [state, setState] = useState({
        "enrollmentNo": props.data.enrollmentNo,
        "username": props.data.username,
        "password": props.data.password,
        "name": props.data.name
    })

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        setValue("_id", props.data._id)
        setValue("username", props.data.enrollmentNo)
        setValue("password", props.data.password)
        setValue("name", props.data.name)
    }, [props])


    const [status, setStatus] = useState(false)
    const onSubmit = (dataa) => {
        const data = {
            "_id": dataa._id,
            "name": dataa.name,
            "password": dataa.password
        }
        dispatch({ type: REQ_FOR_PATCH_STUDENT_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (apcReducer.patch_apc_cc_status === true && status === true) {
        successHandle("Student Updated Succesffully! 😎")
        setStatus(false)

    }
    if (apcReducer.patch_apc_cc_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    const handleValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    if (apcReducer.apc_update_student_duplicate === false && apcReducer.apc_update_student_success === true && status === true) {
        successHandle("Update Class Successfully 😎!")
        setStatus(false)
        var button = document.getElementById('closeModal_Student');
        button.click()
        // window.location.reload()
    }
    if (apcReducer.apc_update_student_duplicate === true && apcReducer.apc_update_student_success === false && status === true) {
        errHandle("Opps! Duplication is Available 😏")
        setStatus(false)
        var button = document.getElementById('closeModal_Student');
        button.click()
    }

    return (
        <>
            <div className="modal fade" id={`edit${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.name}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Student</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="hidden"
                                    name="_id"
                                    className="form-control"
                                    defaultValue={props.data._id}
                                    {...register("_id", {
                                        required: true,
                                    })}
                                />

                                <div className='mb-4 mt-2 '>
                                    <label>User Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        defaultValue={state.enrollmentNo}
                                        {...register("username", {
                                            required: true,
                                        })}
                                        disabled

                                    />
                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        name="password"
                                        className="form-control"
                                        {...register("password", {
                                            required: true
                                        })}
                                        onChange={handleValue}
                                        defaultValue={state.password}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.betch?.type === 'required' && "Password is required!"}</span>
                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        {...register("name", {
                                            required: true,
                                            pattern: /^[A-Z ]*$/
                                        })}
                                        onChange={handleValue}
                                        defaultValue={state.name}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase letters in a row!"}</span>
                                </div>
                                {
                                    apcReducer.apc_update_student_progress === true
                                        ? <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_Student">Close</button>
                                            <button className="btn submit-btn" disabled>Loading</button>
                                        </div>
                                        : <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_Student">Close</button>
                                            <button type="submit" className="btn submit-btn">Update</button>
                                        </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditStudentModal
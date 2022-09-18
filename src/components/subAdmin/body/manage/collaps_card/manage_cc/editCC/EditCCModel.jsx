import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_CC_PROGRESS } from "../../../../../../../redux/subAdmin/action/action";
import { successHandle, errHandle } from "../../../../../../constant/errHandling";

const EditCCModel = (props) => {
    // //console.log(props)

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)

    const [state, setState] = useState({
        "username": props.data.username,
        "password": props.data.password,
        "name": props.data.name
    })

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        setValue("_id", props.data._id)
        setValue("username", props.data.username)
        setValue("password", props.data.password)
        setValue("name", props.data.name)
    }, [props])

    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_PATCH_CC_PROGRESS, payload: { data } })
        setStatus(true)
    }
    if (apcReducer.patch_apc_cc_status === true && status === true) {
        successHandle("Class Coordinator Updated Succesffully! 😎")
        setStatus(false)
        // Option1
        var button = document.getElementById('closeModal_CC');
        button.click()
        // Option 2
        // window.location.reload()
    }
    if (apcReducer.patch_apc_cc_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
        var button = document.getElementById('closeModal_CC');
        button.click()
    }

    const handleValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    return (
        <>
            <div className="modal fade" id={`edit${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.name}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Class Coordinator</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className='mb-4 mt-2 '>
                                    <label>User Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        defaultValue={props.data.username}
                                        disabled
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.username?.type === 'required' && "User Name is required!"}</span>
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
                                    <input
                                        type="hidden"
                                        name="school"
                                        defaultValue={apcReducer.apcProfile.school._id}
                                        className="form-control"
                                        {...register("school", {
                                            required: true
                                        })}
                                    />

                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        {...register("name", {
                                            required: true
                                        })}
                                        onChange={handleValue}
                                        defaultValue={state.name}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                                </div>
                                {
                                    apcReducer.patch_apc_cc_progress === true
                                        ? <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_CC">Close</button>
                                            <button className="btn submit-btn" disabled>Loading</button>
                                        </div>
                                        : <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_CC">Close</button>
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

export default EditCCModel
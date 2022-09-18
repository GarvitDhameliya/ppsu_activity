import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { REQ_FOR_PATCH_APC_PROGRESS } from "../../../../../../../redux/admin/action/action";
import { errHandle, successHandle } from '../../../../../../constant/errHandling';

const EditApcModel = (props) => {
    const dispatch = useDispatch()
    const instAdminReducer = useSelector(state => state.instAdminReducer)
    const [status, setStatus] = useState(false)
    const [apcValue, setApcValue] = useState({
        name: '',
        _id: '',
        username: '',
        password: '',
    })

    function handleValue(event) {
        const value = event.target.value.toString();
        setApcValue({
            ...apcValue,
            [event.target.name]: value,

        });
    }

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    useEffect(() => {
        setValue("_id", props.data._id)
        setValue("name", props.data.name)
        setValue("username", props.data.username)
        setValue("password", props.data.password)
        setApcValue({
            name: props.data.name,
            _id: props.data._id,
            username: props.data.username,
            password: props.data.password,
        })
    }, [props])

    const onSubmit = (data) => {
        if (dispatch({ type: REQ_FOR_PATCH_APC_PROGRESS, payload: data })) {
            setStatus(true)
        }
    }

    if (instAdminReducer.update_apc_instadmin_duplicate === false && instAdminReducer.update_apc_instadmin_success === true && status === true) {
        successHandle("Update APC Successfully!")
        setStatus(false)
        var button = document.getElementById('closeModal_instAdmin_EditAPC');
        button.click()
        // window.location.reload()
    }
    if (instAdminReducer.update_apc_instadmin_duplicate === true && instAdminReducer.update_apc_instadmin_success === false && status === true) {
        errHandle("Opps! Duplication is Available.")
        setStatus(false)
    }
    if (instAdminReducer.update_apc_instadmin_error === true && status === true) {
        errHandle("Opps! Something went wrong.")
        setStatus(false)
    }
    return (
        <>
            <div className="modal fade" id={`model${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`model${props.data.name}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">APC</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >

                                <div className=''>
                                    <input
                                        type="hidden"
                                        name="_id"
                                        className="form-control"
                                        {...register("_id", {
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
                                        defaultValue={apcValue.name}
                                        onChange={handleValue}
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
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="username"
                                        className="form-control"
                                        defaultValue={apcValue.username}
                                        onChange={handleValue}
                                        {...register("username", {
                                            required: true
                                        })}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.username?.type === 'required' && "Email is required!"}</span>
                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        name="password"
                                        className="form-control"
                                        defaultValue={apcValue.password}
                                        onChange={handleValue}
                                        {...register("password", {
                                            required: true
                                        })}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                                </div>

                                <div className="mt-5 d-flex justify-content-end">
                                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_instAdmin_EditAPC">Close</button>
                                    {
                                        instAdminReducer.update_apc_instadmin_progress === true
                                            ? <button className="btn submit-btn" disabled>Updating..</button>
                                            : <button type="submit" className="btn submit-btn">Update</button>
                                    }

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default EditApcModel
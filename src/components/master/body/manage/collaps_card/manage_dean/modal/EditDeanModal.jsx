import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_DEAN_PROGRESS } from "../../../../../../../redux/coe/action/action";
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

const EditDeanModal = (props) => {

    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)
    const [data, setData] = useState({
        name: '',
        username: '',
        password: ''
    })
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [status, setStatus] = useState(false)

    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_PATCH_DEAN_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (coeReducer.patch_coe_dean_status === true && status === true) {
        successHandle("Dean Updated Succesffully!")
        setStatus(false)
        var button = document.getElementById('coe_dean_update');
        button.click()
        // window.location.reload()
    }
    if (coeReducer.patch_coe_dean_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry!")
        setStatus(false)
    }
    if (coeReducer.patch_coe_dean_error === true && status === true) {
        errHandle("Opps! Something went wrong.")
        setStatus(false)
    }

    const handleValue = (e) => {
        setData({ [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setValue("username", props.data?.admin?.username)
        setValue("name", props.data?.admin?.name)
        setValue("password", props.data?.admin?.password)
        setData({
            name: props.data?.admin?.name,
            username: props.data?.admin?.username,
            password: props.data?.admin?.password
        })
    }, [props])

    return (
        <>
            <div className="modal fade" id={`edit${props.data.admin?.username}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.admin?.username}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Dean</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    type="hidden"
                                    name="username"
                                    className="form-control"
                                    {...register("username")}
                                />

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
                                        defaultValue={data.name}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        name="password"
                                        className="form-control"
                                        {...register("password", {
                                            required: true,
                                        })}
                                        onChange={handleValue}
                                        defaultValue={data.password}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    />
                                    <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                                </div>

                                <div className="mt-5 d-flex justify-content-end">
                                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="coe_dean_update">Close</button>
                                    {
                                        coeReducer.patch_coe_dean_progress === true
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

export default EditDeanModal
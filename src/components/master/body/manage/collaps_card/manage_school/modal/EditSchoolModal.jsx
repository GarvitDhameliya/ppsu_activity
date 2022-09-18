import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { REQ_FOR_PATCH_SCHOOL_PROGRESS } from "../../../../../../../redux/coe/action/action";
import { errHandle, successHandle } from "../../../../../../constant/errHandling";

const EditSchoolModal = (props) => {

    // //console.log(props.data)
    const dispatch = useDispatch()
    const coeReducer = useSelector(state => state.coeReducer)

    const [status, setStatus] = useState(false)

    const [state, setState] = useState({
        "name": ''
    })

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();



    const onSubmit = (e) => {

        const data = {
            '_id': e._id,
            'name': e.name
        }
        // //console.log(data)
        dispatch({ type: REQ_FOR_PATCH_SCHOOL_PROGRESS, payload: { data } })
        setStatus(true)
    }

    if (coeReducer.patch_coe_school_status === true && status === true) {
        successHandle("school Updated Succesffully!")
        setStatus(false)
        var button = document.getElementById('coe_school_update');
        button.click()
        // window.location.reload()
    }
    if (coeReducer.patch_coe_school_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry!")
        setStatus(false)
    }

    const handleValue = (e) => {
        setState({ [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setValue("_id", props.data._id)
        setValue("name", props.data.name)
        setState({
            "name": props.data.name
        })
    }, [props])
    return (
        <>
            <div className="modal fade" id={`edit${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.name}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update School</h5>
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
                                    {...register("_id")}
                                />

                                <div className='mb-4 mt-2 '>
                                    <label>School Name</label>
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
                                    <span className="text-danger">{errors.name?.type === 'required' && "School Name is required!"}</span>
                                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                                </div>

                                <div className="mt-5 d-flex justify-content-end">
                                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="coe_school_update">Close</button>
                                    {
                                        coeReducer.patch_coe_school_progress === true
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

export default EditSchoolModal
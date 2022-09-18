import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { REQ_FOR_UPDATE_CLASS_PROGRESS } from "../../../../../../../redux/subAdmin/action/action";
import { successHandle, errHandle } from "../../../../../../constant/errHandling";
const EditClassModel = (props) => {
    const apcReducer = useSelector(state => state.apcReducer)
    const { data } = props
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [state, setState] = useState({
        "_id": data._id,
        "name": data.name,
        "betch": data.betch,
    })
    const [batch, setbatch] = useState()


    useEffect(() => {
        setValue("_id", props.data._id)
        setValue("name", props.data.name)
        setValue("betch", props.data.betch)
        setValue("duration", props.data.duration)
        setState({
            "_id": props.data._id,
            "name": props.data.name,
            "betch": props.data.betch,
            "duration": props.data.duration
        })
        setbatch(props.data.betch)

    }, [props])

    const [status, setStatus] = useState(false)
    const onSubmit = (data) => {
        dispatch({ type: REQ_FOR_UPDATE_CLASS_PROGRESS, payload: { data } })
        setStatus(true)
    }
    const handleValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    if (apcReducer.update_class_duplicate === false && apcReducer.update_class_success === true && status === true) {
        successHandle("Update Class Successfully!")
        setStatus(false)
        var button = document.getElementById('closeModal_Class');
        button.click()
        // window.location.reload()
    }
    if (apcReducer.update_class_duplicate === true && apcReducer.update_class_success === false && status === true) {
        errHandle("Opps! Duplication is Available.")
        setStatus(false)
        // var button = document.getElementById('closeModal_Class');
        // button.click()
    }

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(6), (val, index) => index - 2 + year);

    return (
        <>
            <div className="modal fade" id={`edit${props.data.name}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.name}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Class</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                {/* {//console.log(state)} */}
                                <div className=''>
                                    <input
                                        type="hidden"
                                        name="_id"
                                        className="form-control"
                                        {...register("_id", {
                                            required: true
                                        })}
                                        defaultValue={data._id}
                                    />
                                </div>

                                <div className='mb-4 mt-2 '>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        {...register("name", {
                                            required: true,
                                            pattern: /^[A-Z_]*$/
                                        })}
                                        defaultValue={state.name}
                                        onChange={handleValue}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}

                                    />
                                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase or '_' letters in a row!"}</span>
                                </div>
                                {
                                    !years.includes(parseInt(state.betch))
                                        ? <div className='mb-4 mt-2 '>
                                            <label>Batch</label>
                                            <input
                                                type="number"
                                                name="betch"
                                                className="form-control"
                                                defaultValue={state.betch}
                                                {...register("betch", {
                                                    required: true
                                                })}
                                                disabled
                                            />
                                        </div>
                                        : <div className='mb-4 mt-2 '>
                                            <label>Batch</label>
                                            <select className="form-control "
                                                style={{ cursor: 'pointer' }}
                                                name="betch"
                                                {...register("betch", {
                                                    required: true
                                                })}
                                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            >
                                                <option value="">Select Class</option>
                                                {
                                                    years.map((data, ind) => <option key={ind} value={data}>{data}</option>)
                                                }
                                            </select>

                                            <span className="text-danger">{errors.betch?.type === 'required' && "Class is required!"}</span>
                                        </div>
                                }

                                <div className='mb-4 mt-2 '>
                                    <label>Cource Duration</label>
                                    <select className="form-control "
                                        style={{ cursor: 'pointer' }}
                                        name="betch"
                                        {...register("duration", {
                                            required: true
                                        })}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    >
                                        <option value="">Select Class</option>
                                        <option value={2}>2 year</option>
                                        <option value={3}>3 year</option>
                                        <option value={4}>4 year</option>
                                        <option value={5}>5 year</option>
                                    </select>

                                    <span className="text-danger">{errors.duration?.type === 'required' && "Cource duration is required!"}</span>
                                </div>
                                {
                                    apcReducer.update_class_progress === true
                                        ? <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_Class">Close</button>
                                            <button className="btn submit-btn" disabled>Loading</button>
                                        </div>
                                        : <div className="mt-5 d-flex justify-content-end">
                                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" id="closeModal_Class">Close</button>
                                            <button type="sumit" className="btn submit-btn">Update</button>
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

export default EditClassModel
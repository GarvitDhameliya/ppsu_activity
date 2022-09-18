import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS } from "../../../../../redux/student/action/action";
import { errHandle, successHandle } from "../../../../constant/errHandling";

const ChnagePassword = () => {

    const studentReducer = useSelector(state => state.studentReducer)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const chnagePassword = (e) => {
        const data = {
            "enrollmentNo": studentReducer.studentProfile.enrollmentNo,
            "oldPassword": e.oldPassword,
            "newPassword": e.newPassword
        }
        dispatch({ type: REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS, payload: data })
        setStatus(true)
    }
    if (studentReducer.update_student_change_password_status_success === true && status === true) {
        successHandle("Password Change Successfull! 😎")
        setValue('enrollmentNo', '');
        setValue('oldPassword', '');
        setValue('newPassword', '');
        setStatus(false)
        // window.location.reload()
    }
    if (studentReducer.update_student_password_status_duplicate === true && status === true) {
        errHandle("Opps! Auth not valid 😏")
        setStatus(false)
        // window.location.reload()
    }
    return (
        <>
            <form className="mt-5" onSubmit={handleSubmit(chnagePassword)}>

                <div className='mb-5 mt-2 '>
                    <label>Old Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="oldPassword"
                        className="form-control"
                        {...register("oldPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.oldPassword?.type === 'required' && "Old Password is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>New Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="newPassword"
                        className="form-control"
                        {...register("newPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.newPassword?.type === 'required' && "New Password is required!"}</span>
                </div>

                <input type="submit" className="btn submit-btn" value="Update" />
            </form>
        </>
    )
}
export default ChnagePassword
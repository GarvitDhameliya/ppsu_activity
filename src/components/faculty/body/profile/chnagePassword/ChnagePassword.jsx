import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { base_url } from "../../../../../redux/constant";
import { errHandle, successHandle } from "../../../../constant/errHandling";
const ChnagePassword = () => {
    const facultyReducer = useSelector(state => state.facultyReducer)
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const chnagePassword = (data) => {
        setStatus(true)
        const FinalData = {
            '_id': facultyReducer.facultyProfile._id,
            'oldPassword': data.oldPassword,
            'newPassword': data.newPassword
        }
        axios.patch(base_url + '/faculty/resetPassword', FinalData)
            .then((res) => {
                setStatus(false)
                if (res.status === 200) {
                    successHandle("Password updated successfully!")
                } else {
                    errHandle("Opps! Auth not match.")
                }
            })
            .catch((err) => {
                setStatus(false)
                errHandle("Opps! Auth not match.")
            })
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
                {
                    status === true
                        ? <button className="btn submit-btn" disabled >Updating..</button>
                        : <button type="submit" className="btn submit-btn">Update</button>
                }

            </form>
        </>
    )
}
export default ChnagePassword
import ppsu_logo from '../../assets/img/ppsu_logo.png'
import { useForm } from "react-hook-form";
import { errHandle, successHandle } from '../errHandling';
import { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../../redux/constant';
const Login = () => {
    // For Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    // This is for validation and use for validation in if condition
    const [status, setStatus] = useState(false)
    // Data
    const [resData, setResData] = useState({})
    const [err, setErr] = useState('')

    const [loader, setLoader] = useState(false)
    const onSubmit = (data) => {

        setLoader(true)

        if (data.username !== '' && data.role === undefined && data.password === undefined) {
            axios.post(base_url + '/login/1', data)
                .then((res) => {
                    if (res.status === 200) {
                        // //console.log(res)
                        setStatus(true)
                        setResData(res.data)
                        setErr('')
                        setLoader(false)
                    } else {
                        setStatus(false)
                        setErr('Somthing went wrong!')
                        setLoader(false)
                    }
                })
                .catch((err) => {
                    setStatus(false)
                    if (err.response.status === 301) {
                        setErr("Username not Found!")
                        setLoader(false)
                    } else {
                        setErr('Somthing went wrong!')
                        setLoader(false)
                    }
                })
        }

        if (data.username !== '' && data.role !== undefined && data.password !== undefined) {
            setLoader(true)
            axios.post(base_url + '/login/2', data)
                .then((res) => {
                    if (res.status === 200) {
                        setErr('')
                        setLoader(false)
                        window.location.reload()
                    } else {
                        setErr('Somthing went wrong!')
                        setLoader(false)
                    }
                })
                .catch((err) => {
                    if (err.response.status === 301) {
                        setErr("Auth no match!")
                        setLoader(false)
                    } else {
                        setErr('Somthing went wrong!')
                        setLoader(false)
                    }
                })
        }



    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-3"></div>
                    <div className="col-sm-12 col-md-8 col-lg-6">

                        <div className="alert alert-info mb-4" role="alert">
                            <strong>Notice</strong>
                            <li>If you don't remember your password, Please contact respective Higher Authority!</li>
                        </div>

                        <div className='mt-5 mb-5 login_section'>
                            <div className='justify-content-center d-flex pt-5'>
                                <img src={ppsu_logo} alt="ppsu" className='' />
                            </div>
                            <form className='p-5' onSubmit={handleSubmit(onSubmit)}>

                                {
                                    err !== ''
                                        ? <div className="alert alert-danger mb-4" role="alert">
                                            <strong>Error</strong>
                                            <li>{err}</li>
                                        </div>
                                        : null
                                }

                                <div className='mb-4 mt-5 '>
                                    <label>Username<span className='text-danger'> *</span></label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        {...register("username", {
                                            required: true,
                                        })}
                                    />
                                    <span className="text-danger">{errors.userid?.type === 'required' && "UserId is required!"}</span>
                                </div>


                                {
                                    status === false
                                        ? null
                                        : <>
                                            {
                                                resData.role.length === 1
                                                    ?
                                                    <input
                                                        className="form-check-input"
                                                        type="hidden"
                                                        value={resData.role[0]}
                                                        {...register("role", {
                                                            required: true
                                                        })} />
                                                    : <>
                                                        <label className='mt-3'>Role</label><br />
                                                        {
                                                            resData.role.map((data, ind) => {
                                                                return (
                                                                    <div className="form-check form-check-inline" key={ind}>
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name="role"
                                                                            value={data}
                                                                            {...register("role", {
                                                                                required: true
                                                                            })} />
                                                                        <label className="form-check-label" >&nbsp;{data == 'subAdmin' ? 'APC' : data.toUpperCase()}</label>
                                                                    </div>

                                                                )
                                                            })
                                                        }

                                                    </>
                                            }

                                            <div className='mb-4 mt-4 '>
                                                <label>Password<span className='text-danger'> *</span></label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    {...register("password", {
                                                        required: true,
                                                    })}
                                                />
                                                <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>
                                            </div>
                                        </>
                                }


                                {
                                    loader === true ?
                                        <button className="btn submit-btn mt-4 mb-5" disabled>Loading..</button>
                                        : <button type="submit" className="btn submit-btn mt-4 mb-5">Login</button>
                                }


                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
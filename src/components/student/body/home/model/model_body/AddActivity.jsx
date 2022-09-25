import icon_pdf from '../../../../../assets/img/icon_pdf.svg'
import icon_upload from '../../../../../assets/img/icon_upload.svg'
import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux'
import {
    REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS,
} from '../../../../../../redux/student/action/action'
import { NotApproved, NotRecommend } from '../../../../../constant/constant';


const AddActivity = () => {

    const dispatch = useDispatch()
    const studentReqReducer = useSelector(state => state.studentReducer)

    // Err Handling
    const errHandle = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });
    }

    const successHandle = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });
    }

    // For All File Upload (If you have serious chnaged then change it otherwise do not change it)

    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [fileErr, setFileErr] = useState("")

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            if (newFile.type === 'application/pdf') {
                if (newFile.size < 1048576) {
                    const updatedList = [newFile];
                    setFileList(updatedList);

                } else {
                    setFileErr("File Size must be less than 1 MB!")
                }
            }
            else {
                setFileErr("Only PDF file allowed!")
            }
        }
    }

    const fileRemove = () => {
        setFileList([]);
    }

    const [heading, setheading] = useState({})
    const handle = (e) => {
        // //console.log(e.target.value)
        setheading(JSON.parse(e.target.value))
    }


    // File Upload Logic Section End------------

    // Using UseForm to get All feild data (not file upload)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [status, setStatus] = useState(false)

    const onSubmitForm = (e) => {
        // heading.parameter.map(result => {
        //     //console.log({ name: `${result.name}`, value: e[`${result.name}`], type: `${result.type}` })
        // })
        // //console.log(e)
        const data = {
            'heading': heading._id,
            'discription': e.discription,
            'parameter': heading.parameter.map(result => {
                return { name: `${result.name}`, value: e[`${result.name}`], type: `${result.type}` }
            }),
            'class': studentReqReducer.studentProfile.class._id,
            'school': studentReqReducer.studentProfile.school._id,
            'student': studentReqReducer.studentProfile._id,
        }
        if (fileList.length === 1) {
            // //console.log(fileList)
            // //console.log(data)
            setFileErr('')
            const formData = new FormData();
            formData.append('requestDoc', fileList[0])
            formData.append('json', JSON.stringify(data))
            dispatch({ type: REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS, payload: formData })
            setStatus(true)
        } else {
            setFileErr("File is Required!")
        }


    }
    const AddRequest = (data) => {
        // //console.log(data)
    }


    if (studentReqReducer.add_student_activity_status_duplicate === true && status === true) {
        errHandle("Duplicate entry! 🤦‍♂️")
        setStatus(false)

    }
    if (studentReqReducer.add_student_activity_status_success === true && status === true) {
        successHandle("Request Added Succesffully! 😎")

        setValue('heading', '');
        setValue('discription', '');
        setValue('document', '');
        setFileList([])
        setStatus(false)
        window.location.reload()

    }
    const resetForm = () => {
        document.getElementById("student_activity_req").reset()
        setValue('heading', '');
        setValue('discription', '');
        setValue('document', '');
        setFileList([])
    }

    // for Each request unique
    let used_request = []
    if (studentReqReducer.studentActivityRequest.length > 0) {
        studentReqReducer.studentActivityRequest.map((data) => {
            if (!used_request.includes(data.heading._id) && data.status !== NotRecommend && data.status !== NotApproved) {
                used_request.push(data.heading._id)
            }
        })
    }
    // //console.log(used_request)
    // for Validation -- to restrict future date
    var maxDate = new Date().toISOString().split("T")[0]

    // if (studentReqReducer.dataIsLoaded === true && studentReqReducer.student_profile_dataIsLoaded === true && studentReqReducer.get_heading_dataIsLoaded === true) {
    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All field are Required!</li>
                <li>Only <strong>PDF</strong> File Allowed!</li>
                <li>File size must be less than <strong>1 MB</strong></li>
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)} id="student_activity_req">
                <div className='mb-4 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="select"
                        {...register("heading", {
                            required: true
                        })}
                        onChange={handle}
                        value={heading.name}
                    >
                        <option defaultValue value="">Select Activity</option>
                        {
                            studentReqReducer.heading?.map((data, ind) => {
                                if (!used_request.includes(data._id)) {
                                    return (
                                        <option key={ind} value={JSON.stringify(data)}>{data.categoryName}</option>
                                    )
                                }
                            })
                        }
                    </select>

                    <span className="text-danger">{errors.heading?.type === 'required' && "Main Category is required!"}</span>
                </div>

                {
                    studentReqReducer.heading?.map((data, ind) => {
                        if (heading._id === data._id) {
                            return (
                                <div key={ind}>
                                    {
                                        data.parameter.map((data, indx) => {

                                            return (
                                                <div className='mb-4 ' key={indx}>
                                                    <label>{data.name}<span className='text-danger'> *</span></label>
                                                    <input
                                                        type={data.type}
                                                        name={data.name}
                                                        max={
                                                            data.type == 'date'
                                                                ? maxDate
                                                                : null
                                                        }
                                                        className="form-control"
                                                        {...register(`${data.name}`, {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={ind}></div>
                            )
                        }
                    })
                }



                <div className='mb-4 mt-2 '>
                    <label>Description<span className='text-danger'> *</span></label>
                    <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        {...register("discription", {
                            required: true,
                            pattern: /^[a-zA-Z0-9\s_.()&#@!*-=+:"~?]+$/i,
                        })}
                    ></textarea>
                    <span className="text-danger">{errors.discription?.type === 'required' && "Description is required!"}</span>
                    <span className="text-danger">{errors.discription?.type === 'pattern' && "Only Number,Chnaracter and ()_.&#@!*-++:?~ is Allowed!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <input
                        type="hidden"
                        name="student"
                        defaultValue={studentReqReducer.studentProfile._id}
                        className="form-control"
                        {...register("student", {
                            required: true
                        })}
                    />
                </div>
                {/* ----------------------------------- */}

                {/* This is for file Uploding Section */}
                <div className='file_upload_for_all '>
                    {
                        fileList.length === 0 ? (
                            <>
                                <div
                                    ref={wrapperRef}
                                    className="drop-file-input"
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}
                                >
                                    <div className="drop-file-input__label">
                                        <img src={icon_upload} alt="" />
                                        <p>Drag & Drop your files here</p>
                                        <p>Only PDF Allow<span className='text-danger'> *</span></p>
                                    </div>
                                    <input type="file"
                                        name='file'
                                        {
                                        ...register("file", {
                                            required: true
                                        })
                                        }
                                        onChange={onFileDrop}
                                    />
                                </div>
                                <span className='text-danger'>{fileErr}</span>
                                <span className="text-danger">{errors.file?.type === 'required' && "File is required!"}</span>
                            </>
                        ) : null
                    }

                    {
                        fileList.length > 0 ? (
                            <div className="drop-file-preview">
                                <p className="drop-file-preview__title">
                                    Ready to upload
                                </p>
                                {
                                    fileList.map((item, index) => (
                                        <div key={index} className="drop-file-preview__item">
                                            <img src={icon_pdf} alt="ppsu" />
                                            <div className="drop-file-preview__item__info">
                                                <p>{item.name}</p>
                                                <p>{(item.size / 1048576).toFixed(0)} MB</p>
                                            </div>
                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
                {/* End of File Uploading Section */}
                {/* studentReqReducer.add_student_req_activity_progress */}
                {
                    studentReqReducer.add_student_req_activity_progress === true ?
                        <div className="mt-5 d-flex justify-content-end">
                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" onClick={resetForm}>Close</button>
                            <button type="submit" className="btn submit-btn" disabled>Loading..</button>
                        </div> :
                        <div className="mt-5 d-flex justify-content-end">
                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal" onClick={resetForm}>Close</button>
                            <button type="submit" className="btn submit-btn">Submit</button>
                        </div>
                }


            </form>
        </>
    )
}


export default AddActivity
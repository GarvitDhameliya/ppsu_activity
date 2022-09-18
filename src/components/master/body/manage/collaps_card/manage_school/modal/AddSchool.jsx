
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_CREATE_SCHOOL_PROGRESS } from '../../../../../../../redux/coe/action/action';
import { errHandle, successHandle } from '../../../../../../constant/errHandling';


const AddSchool = () => {
    const dispatch = useDispatch()

    const coeSchool = useSelector(state => state.coeReducer)

    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [fileErr, setFileErr] = useState("")

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            if (newFile.type === 'image/png' || newFile.type === 'image/jpeg' || newFile.type === 'image/svg+xml') {
                const updatedList = [newFile];
                setFileList(updatedList);
            }
            else {
                setFileErr("Only jpeg/jpg/png/svg file allowed!")
            }
        }
    }

    const fileRemove = () => {
        setFileList([]);
    }


    // Using UseForm to get All feild data (not file upload)
    const [status, setStatus] = useState(false)
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    // const selected = watch("class");
    const onSubmit = (e) => {

        if (fileList.length === 1) {
            setFileErr('')
            const data = new FormData();
            data.append('name', e.name)
            data.append('schoolImage', fileList[0])
            dispatch({ type: REQ_FOR_POST_CREATE_SCHOOL_PROGRESS, payload: { data } })
            setStatus(true)

        } else {
            setFileErr("File is Required!")
        }

    }

    if (coeSchool.add_coe_school_status === true && status === true) {
        successHandle("School Added Succesffully! 😎")
        setStatus(false)
        window.location.reload()

    }
    if (coeSchool.add_coe_school_status_duplicate === true && status === true) {
        errHandle("Duplicate Entry! 🤦‍♂️")
        setStatus(false)
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Required!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-4 mt-2 '>
                    <label>Name<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        {...register("name", {
                            required: true,
                            pattern: /^[A-Z ]*$/
                        })}
                    />
                    <span className="text-danger">{errors.name?.type === 'required' && "Name is required!"}</span>
                    <span className="text-danger">{errors.name?.type === 'pattern' && "You are permitted to input only uppercase in a row!"}</span>
                </div>

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
                                        <img src={""} alt="" />
                                        <p>Upload Logo</p>
                                        <p>Drag & Drop your image here</p>
                                        <p>Only JPG/JPEG/PNG/SVG Allow<span className='text-danger'> *</span></p>
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
                                            <img src={""} alt="" />
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

                <div className="mt-5 d-flex justify-content-end">
                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                    <button type="sumit" className="btn submit-btn">Submit</button>
                </div>

            </form>
        </>
    )
}

export default AddSchool
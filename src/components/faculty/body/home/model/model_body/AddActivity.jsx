import icon_csv from '../../../../../assets/img/icon_csv.svg'
import icon_upload from '../../../../../assets/img/icon_upload.svg'
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
const AddActivity = () => {
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
                if (newFile.size < 5242880) {
                    const updatedList = [newFile];
                    setFileList(updatedList);

                } else {
                    setFileErr("File Size must be less than 5 MB!")
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
    // File Upload Logic Section End------------

    // Using UseForm to get All feild data (not file upload)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (fileList.length === 1) {
            setFileErr('')
            // //console.log(data)
            // //console.log(fileList[0])
        } else {
            setFileErr("File is Required!")
        }
    }
    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>All feild are Required!</li>
                <li>Only <strong>PDF</strong> File Allowed!</li>
                <li>File size must be less than <strong>5 MB</strong></li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-5 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="select"
                        {...register("title", {
                            required: true
                        })}
                    >
                        <option defaultValue value="">Select Main Category</option>
                        <option value="1">1</option>
                        <option value="2">Al2l</option>
                        <option value="3">3</option>
                    </select>

                    <span className="text-danger">{errors.title?.type === 'required' && "Main Category is required!"}</span>
                </div>

                <div className='mb-5 mt-2 '>
                    <select className="form-control form-control-sm "
                        style={{ cursor: 'pointer' }}
                        name="select"
                        {...register("subTitle", {
                            required: true
                        })}
                    >
                        <option defaultValue value="">Select Sub Category</option>
                        <option value="12">1</option>
                        <option value="21">Al2l</option>
                        <option value="33">3</option>
                    </select>

                    <span className="text-danger">{errors.subTitle?.type === 'required' && "Sub Category is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Heading<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="heading"
                        className="form-control"
                        {...register("heading", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.heading?.type === 'required' && "Heading is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>Description</label>
                    <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        {...register("description", {
                            required: true
                        })}
                    ></textarea>
                    <span className="text-danger">{errors.description?.type === 'required' && "Description is required!"}</span>
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
                                            <img src={icon_csv} alt="" />
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

export default AddActivity
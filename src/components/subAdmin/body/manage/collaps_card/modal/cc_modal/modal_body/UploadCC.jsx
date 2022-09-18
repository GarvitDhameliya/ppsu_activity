import icon_csv from '../../../../../../../assets/img/icon_csv.svg'
import icon_upload from '../../../../../../../assets/img/icon_upload.svg'
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS } from '../../../../../../../../redux/subAdmin/action/action';
import { errHandle, successHandle } from '../../../../../../../constant/errHandling';
const UploadCC = () => {

    const dispatch = useDispatch()
    const apcReducer = useSelector(state => state.apcReducer)
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
            if (newFile.type === 'text/csv') {
                const updatedList = [newFile];
                setFileList(updatedList);
            }
            else {
                setFileErr("Only CSV file allowed!")
            }
        }
    }

    const fileRemove = () => {
        setFileList([]);
    }
    // File Upload Logic Section End------------

    const [status, setStatus] = useState(false)
    // Using UseForm to get All feild data (not file upload)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        if (fileList.length === 1) {
            setFileErr('')
            const formData = new FormData();
            formData.append('facultyCSV', fileList[0])
            formData.append('school', `${apcReducer.apcProfile.school._id}`)
            dispatch({ type: REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS, payload: formData })
            setStatus(true)

        } else {
            setFileErr("File is Required!")
        }
    }

    if (apcReducer.upload_csv_apc_cc_status === true && status === true) {
        successHandle("CSV Uploaded Succesffully! 😎")
        setStatus(false)
        setFileList([]);
    }

    if (apcReducer.upload_csv_apc_cc_status_duplicate === true && status === true) {
        const duplicate_entry = apcReducer.upload_csv_apc_cc_duplicate.length

        errHandle(duplicate_entry + " Duplicate Entry! 🤦‍♂️ Remaining Entry Added Successfully..")
        setStatus(false)
    }

    return (
        <>
            <div className="alert alert-info mb-4" role="alert">
                <strong>Instruction</strong>
                <li>Only <strong>CSV</strong> File Allowed!</li>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

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
                                        <p>Only CSV File!<span className='text-danger'> *</span></p>
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
                {
                    apcReducer.upload_csv_apc_cc_progress === true
                        ? <div className="mt-5 d-flex justify-content-end">
                            <button className="btn submit-btn" disabled>Loading..</button>
                        </div>
                        : <div className="mt-5 d-flex justify-content-end">
                            <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                            <button type="sumit" className="btn submit-btn">Submit</button>
                        </div>
                }
            </form>
        </>
    )
}

export default UploadCC
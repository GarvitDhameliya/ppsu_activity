// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useForm } from "react-hook-form";
import icon_pdf from '../../../assets/img/icon_pdf.svg'
import icon_upload from '../../../assets/img/icon_upload.svg'
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS } from '../../../../redux/student/action/action'
import { successHandle } from '../../../constant/errHandling';
import { Pending, Recommend, Approved, ToBeRevised, NotApproved, NotRecommend } from '../../../constant/constant'
import { base_url } from '../../../../redux/constant';

const View = (props) => {

    const { data } = props;
    // //console.log(data)
    const dispatch = useDispatch()
    const studentReqReducer = useSelector(state => state.studentReducer)

    // Using UseForm to get All feild data (not file upload)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // For PDF View
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Wrapped
                    );
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageWidth);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    // const [heading, setheading] = useState({})
    // const handle = (e) => {
    //     //console.log(e.target.value)
    //     const data = JSON.parse(e.target.value)
    //     //console.log(data)
    //     setheading(data)

    // }


    const [heading, setheading] = useState({})
    const handle = (e) => {
        // //console.log(e.target.value)
        setheading(JSON.parse(e.target.value))
    }

    // //console.log(heading, "this is state heading")
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

    const [status, setStatus] = useState(false)
    const [isfileUploadShow, setIsfileUploadShow] = useState(0);
    const setShow = () => {
        setIsfileUploadShow(1)
    }
    const onSubmit = (e) => {
        if (isfileUploadShow === 0) {

        } else if (isfileUploadShow === 1) {
            // //console.log(e)
            // //console.log(fileList[0])

            const update_data =
            {
                "_id": e.srid,
                "description": e.description,
                "parameter": data.heading.parameter.map(result => {
                    return { name: `${result.name}`, value: e[`${result.name}`], type: `${result.type}` }
                })
            }


            // //console.log(data, "thhis is final")
            const formData = new FormData();
            formData.append('requestDoc', fileList[0])
            formData.append('json', JSON.stringify(update_data))
            dispatch({ type: REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS, payload: formData })
            setStatus(true)
        }
    }

    if (studentReqReducer.update_student_activity_status_success === true && status === true) {
        successHandle("Request Revised Succesffully! 😎")
        setStatus(false)
        window.location.reload()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <input type="hidden" value={data._id}
                    {...register("srid", {
                        required: true
                    })}
                />
                <input type="hidden" value={data.school._id}
                    {...register("sid", {
                        required: true
                    })}
                />
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h5 className="mb-4">{data.heading?.categoryName}</h5>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                        <span className="font_title_viewpage">Enrollment No :&nbsp;&nbsp;</span>
                        <span className="font_value_viewpage">{data.student.enrollmentNo}</span>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                        <span className="font_title_viewpage">Publish Date :&nbsp;&nbsp;</span>
                        <span className="font_value_viewpage">{data.publishDate.split('T')[0]}</span>

                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                        <span className="font_title_viewpage">Total Points :&nbsp;&nbsp;</span>
                        <span className="font_value_viewpage">{data.student.totalPoint}</span>

                    </div>
                    {
                        data.status === Recommend ?
                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                                <span className="font_title_viewpage">Recommend Date :&nbsp;&nbsp;</span>
                                <span className="font_value_viewpage">{data.approvedDate.split("T")[0]}</span>

                            </div> : ''
                    }

                    {
                        data.status === Approved ?
                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                                <span className="font_title_viewpage">Approved Date :&nbsp;&nbsp;</span>
                                <span className="font_value_viewpage"></span>

                            </div> : ''
                    }

                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">

                        <span className="font_title_viewpage">Status :&nbsp;&nbsp;</span>
                        <span className={`status_${data.status}`}>{data.status}</span>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h6 className="">Activity Request</h6>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">


                        <div className='mb-4 mt-4 form-group row'>
                            <label className="col-sm-12 col-md-2 font_title_viewpage">Heading:</label>
                            <input
                                type="text"
                                name="heading"
                                className="form-control ml-3 col-md-8 col-sm-12"
                                defaultValue={data.heading?.categoryName}
                                disabled

                            />
                            <input
                                type="hidden"
                                name="heading"
                                className="form-control ml-3 col-md-8 col-sm-12"
                                defaultValue={data.heading?.categoryName}
                                {...register("heading", {
                                    required: true
                                })}

                            />
                            <span className="text-danger">{errors.heading?.type === 'required' && "Heading is required!"}</span>

                            {/* <div className='mb-4 mt-2 '>
                                <select className="form-control form-control-sm "
                                    style={{ cursor: 'pointer' }}
                                    name="select"
                                    {...register("heading", {
                                        required: true
                                    })}
                                    onChange={handle}
                                    value={heading.name}
                                >
                                  
                                    <option defaultValue value={JSON.stringify(data.heading)}>{data.heading?.categoryName}</option>
                                    {
                                        studentReqReducer.heading?.map((data, ind) => <option key={ind} value={JSON.stringify(data)}>{data.categoryName}</option>)
                                    }
                                </select>

                                <span className="text-danger">{errors.heading?.type === 'required' && "Main Category is required!"}</span>
                            </div> */}
                        </div>

                        <div className='mb-4 mt-4 form-group row'>
                            <label className="font_title_viewpage col-sm-12 col-md-2">Description: </label>
                            <textarea
                                type="text"
                                name="description"
                                className="form-control ml-3 d-flex col-md-8 col-sm-12"
                                rows={5}
                                defaultValue={data.discription}
                                {...register("description", {
                                    required: true
                                })}
                            ></textarea>
                            <span className="text-danger">{errors.description?.type === 'required' && "Description is required!"}</span>
                        </div>

                        {


                            data.parameter?.map((data) => {
                                {/* //console.log(data) */ }
                                return (
                                    <div className='mb-4 mt-4 form-group row'>
                                        <label className="col-sm-12 col-md-2 font_title_viewpage">{data.name}</label>
                                        <input
                                            type={data.type}
                                            name={data.name}
                                            className="form-control ml-3 col-md-8 col-sm-12"
                                            defaultValue={data.value}
                                            {...register(`${data.name}`, {
                                                required: true
                                            })}

                                        />
                                    </div>
                                )

                            })

                        }




                        {/* {
                            studentReqReducer.heading?.map((dat, ind) => {

                                if (heading._id === dat._id) {
                                    return (
                                        dat.parameter.map((dat, ind) => {
                                            return (
                                                <div className='mb-4 ' >
                                                    <label>{dat.name}<span className='text-danger'> *</span></label>
                                                    <input
                                                        key={ind}
                                                        type={dat.type}
                                                        name={dat.name}
                                                        className="form-control"
                                                        {...register(`${dat.name}`, {
                                                            required: true,
                                                        })}
                                                        value={data.parameter[ind].value}

                                                    />
                                                    <span className="text-danger">{errors.heading?.type === 'required' && `${dat.name} is required!`}</span>
                                                </div>

                                            )
                                        })

                                    )
                                }
                                else {
                                    return (
                                        <></>
                                    )
                                }
                            })
                        } */}




                        {/* This is for file Uploding Section */}

                        {
                            isfileUploadShow === 0
                                ? <div>
                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                                        <div style={{ height: "600px" }}>
                                            <Viewer fileUrl={`http://aps.ppsu.ac.in:3006/getFile${data.document}`} plugins={[defaultLayoutPluginInstance]} />

                                        </div>
                                    </Worker>
                                    <div className="mt-2 mb-3 d-flex justify-content-end">
                                        {
                                            data.status === Pending || data.status === ToBeRevised ?
                                                <button type="button" className="btn close-btn" onClick={setShow}><i className='bx bxs-trash-alt text-danger'></i></button>
                                                : ''
                                        }
                                    </div>
                                </div>
                                : <div className='file_upload_for_all'>
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
                                                        <p>Only CSV Allow<span className='text-danger'> *</span></p>
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
                        }

                        {/* End of File Uploading Section */}



                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        {
                            data.message.fts.length !== 0 || data.message.ats.length !== 0
                                ? <>
                                    <div className="card" style={{ borderRadius: '15px' }}>
                                        <div className="card-body">
                                            {
                                                data.message.fts.length !== 0
                                                    ? <>
                                                        <h5 className="card-title">Remarks<small> (from faculty)</small></h5>
                                                        {
                                                            data?.message?.fts.map((data) => {
                                                                return (
                                                                    <ul>
                                                                        {
                                                                            data.remark
                                                                                ? <li className='m-0 p-0'><small>{data?.remark} ({data?.date.split('T')[0]})</small></li>
                                                                                : null
                                                                        }
                                                                    </ul>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                    : null
                                            }
                                            {
                                                data.message.ats.length !== 0
                                                    ? <>
                                                        <h5 className="card-title">Remarks<small> (from Activity point coordinator)</small></h5>
                                                        {
                                                            data?.message?.ats.map((data) => {
                                                                return (
                                                                    <ul>
                                                                        {
                                                                            data.remark
                                                                                ? <li className='m-0 p-0'><small>{data?.remark} ({data?.date.split('T')[0]})</small></li>
                                                                                : null
                                                                        }
                                                                    </ul>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </>
                                : null
                        }
                        <div className='row mt-5 pr-3'>
                            {
                                data.status === Pending || data.status === ToBeRevised
                                    ? studentReqReducer.update_student_req_activity_progress === true
                                        ? <button className="btn submit-btn ml-auto" disabled>Loading..</button>
                                        : <button type="submit" className="btn submit-btn ml-auto">Update</button>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default View
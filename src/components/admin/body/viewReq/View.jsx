// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from 'react-redux'
import { REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS } from '../../../../redux/subAdmin/action/action';
import { errHandle, successHandle } from '../../../constant/errHandling';
import { useState } from 'react';
import { base_url } from '../../../../redux/constant';

const View = (props) => {
    const { data } = props
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

    return (
        <>

            <div className="row mt-3">

                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <span className="font_title_viewpage">Publish Date :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.publishDate.split("T")[0]}</span>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <span className="font_title_viewpage">Student Total Points :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.totalPoint}</span>
                </div>

                {
                    data.status === "Approved" || data.status === "Completed" ?
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                            <span className="font_title_viewpage">Approve Date :&nbsp;&nbsp;</span>
                            <span className="font_value_viewpage">{data.approvedDate.split("T")[0]}</span>
                        </div> : ''
                }
                {
                    data.status === "Completed" ?
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                            <span className="font_title_viewpage">Completed Date :&nbsp;&nbsp;</span>
                            <span className="font_value_viewpage">{data.completedDate.split("T")[0]}</span>
                        </div> : ''
                }

                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <span className="font_title_viewpage">Status :&nbsp;&nbsp;</span>
                    <span className={`status_${data.status}`}>{data.status}</span>
                </div>
            </div>


            <div className="row mt-3">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <span className="font_title_viewpage">Student Name :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.name}</span>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <span className="font_title_viewpage">Enrollment Number :&nbsp;&nbsp;</span>
                    <span className="font_value_viewpage">{data.student.enrollmentNo}</span>
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

                    <div className="mb-4 mt-4 form-group row" data-toggle="tooltip" data-placement="top" title="Heading id _ Heading Name">
                        <span className="col-sm-12 col-md-2 font_title_viewpage">Heading: </span>
                        <div className="ml-3 heading_show col-md-8 col-sm-12">{data.heading?.categoryId}_{data.heading?.categoryName}</div>
                    </div>

                    <div className="mb-4 mt-4 form-group row">
                        <span className="col-sm-12 col-md-2 font_title_viewpage">Heading Description: </span>
                        <div className="ml-3 heading_show col-md-8 col-sm-12">{data.heading?.description}</div>
                    </div>

                    <div className='mb-4 mt-4 form-group row'>
                        <label className="font_title_viewpage col-sm-12 col-md-2">Description: </label>
                        <textarea
                            type="text"
                            name="description"
                            className="form-control ml-3 d-flex col-md-8 col-sm-12"
                            rows={8}
                            disabled
                            defaultValue={data.discription}
                        ></textarea>
                        <span className="text-danger"></span>
                    </div>
                    <div>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                            <div style={{ height: "600px" }}>
                                <Viewer fileUrl={`http://aps.ppsu.ac.in:3006/getFile${data.document}`} plugins={[defaultLayoutPluginInstance]} />
                            </div>
                        </Worker>
                    </div>
                </div>



                <div className="col-sm-12 col-md-4 col-lg-4">
                    {
                        data.message.fts.length !== 0 || data.message.ats.length !== 0 || data.message.fta.length !== 0 || data.message.atf.length !== 0
                            ? <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body details_point_remark">
                                    {
                                        data.message.atf.length !== 0
                                            ? <>
                                                <h5 className="card-title">Remarks<small> (APC to faculty)</small></h5>
                                                {
                                                    data?.message?.atf.map((data) => {
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
                                        data.message.fta.length !== 0
                                            ? <>
                                                <h5 className="card-title">Remarks<small> (Faculty to APC)</small></h5>
                                                {
                                                    data?.message?.fta.map((data) => {
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
                                                <h5 className="card-title">Remarks<small> (APC to Student)</small></h5>
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
                                    {
                                        data.message.fts.length !== 0
                                            ? <>
                                                <h5 className="card-title">Remarks<small> (Faculty to Student)</small></h5>
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
                                </div>
                            </div>
                            : null
                    }
                </div>
            </div>
        </>
    )
}
export default View

import React, { useRef, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { errHandle, successHandle } from '../../../../../../constant/errHandling';
import { REQ_FOR_POST_CREATE_HEADING_PROGRESS } from '../../../../../../../redux/coe/action/action';
import axios from 'axios';
import { base_url } from '../../../../../../../redux/constant';
const ApproveModel = (props) => {
    const ApproveRequest = (id) => {
        const data = {
            "_id": id,
            "isApproved": 'Approved'
        }
        axios.patch(base_url + '/heading/approveHeading', data).then((res) => {
            if (res.status === 200) {
                successHandle("Request Approved Successfuly!😀")
                window.location.reload()
            }
        }).catch((err) => {

        })
    }

    const RejectRequest = (id) => {
        const data = {
            "_id": id,
            "isApproved": 'Rejected'
        }
        axios.patch(base_url + '/heading/approveHeading', data).then((res) => {
            if (res.status === 200) {
                errHandle("Request Rejected Successfuly!😀")
                window.location.reload()
            }
        }).catch((err) => {

        })
    }

    return (
        <>
            <div className="modal fade" id={`edit${props.data.categoryName}`} tabIndex="-1" role="dialog" aria-labelledby={`edit${props.data.categoryName}label`} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Activity Request</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">
                            <div className='mb-4 mt-2 '>
                                <label>AddedBy</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    defaultValue={props.data.addedBy?.name}
                                    disabled
                                />
                            </div>

                            <div className='mb-4 mt-2 '>
                                <label>Category Name</label>
                                <input
                                    type="text"
                                    name="categoryName"
                                    className="form-control"
                                    defaultValue={props.data?.categoryName}
                                    disabled
                                />
                            </div>

                            <div className='mb-4 mt-2 '>
                                <label>Category ID</label>
                                <input
                                    type="text"
                                    name="categoryId"
                                    className="form-control"
                                    defaultValue={props.data?.categoryId}
                                    disabled
                                />
                            </div>

                            <div className='mb-4 mt-2 '>
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    defaultValue={props.data?.description}
                                    disabled
                                />
                            </div>
                            <div className='mb-4 mt-2 ' >
                                <label>Parameters:</label>
                                {
                                    props.data.parameter?.map((data, ind) => {
                                        return (

                                            <input
                                                key={ind}
                                                type="text"
                                                name="description"
                                                className="form-control mb-3"
                                                defaultValue={data.name}
                                                disabled
                                            />

                                        )
                                    })
                                }
                            </div>
                            <div className='mb-4 mt-2 '>
                                <label>Requirement</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    defaultValue={props.data?.requirement}
                                    disabled
                                />
                            </div>
                            <div className='mb-4 mt-2 '>
                                <label>Status</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    defaultValue={props.data?.status}
                                    disabled
                                />
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <button type="submit" className="btn close-btn mr-2" onClick={() => RejectRequest(props.data._id)}>Reject</button>
                                <button type="submit" className="btn submit-btn" onClick={() => ApproveRequest(props.data._id)}>Approve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApproveModel
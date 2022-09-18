import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_POST_CREATE_CC_SUCCESS,
    REQ_FOR_POST_CREATE_CC_ERROR,
    REQ_FOR_POST_CREATE_CC_DUPLICATE,
    REQ_FOR_GET_CC_SUCCESS,
    REQ_FOR_GET_CC_ERROR,
    REQ_FOR_PATCH_CC_SUCCESS,
    REQ_FOR_PATCH_CC_DUPLICATE,
    REQ_FOR_PATCH_CC_ERROR,
    REQ_FOR_POST_UPLOAD_CC_CSV_SUCCESS,
    REQ_FOR_POST_UPLOAD_CC_CSV_DUPLICATE,
    REQ_FOR_POST_UPLOAD_CC_CSV_ERROR,
    REQ_FOR_DELETE_CC_SUCCESS,
    REQ_FOR_DELETE_CC_ERROR,

} from '../../../subAdmin/action/action'
// API
import {
    apc_delete_cc_req,
    apc_get_cc_req,
    apc_patch_cc_req,
    apc_post_cc_req,
    apc_post_upload_cc_csv,

} from '../../../subAdmin/api/api'





// GET Class coordinator 
export function* handleApcGetCC(action) {
    try {
        const res = yield call(apc_get_cc_req, action)
        const status = res.status
        const data = res.data.message
        // //console.log(data, "this is data from manageCC")
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_CC_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_CC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_CC_ERROR, e })
    }
}


// POST Class (add Class Coordinator)
export function* handleApcPostCC(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_post_cc_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_CC_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_CC_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_CC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_CC_ERROR, e })
    }
}


// PATCH CC (Update Class Coordinator)
export function* handleApcPatchCC(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_patch_cc_req, action.payload.data)
        const status = res.status
        const data = res.update_data
        // //console.log(data, "this is handleapc")
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_CC_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_CC_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_CC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_CC_ERROR, e })
    }
}


// POST upload CSV ( Class Coordinator)
export function* handleApcUploadCCCSV(action) {
    // //console.log(action.payload, "This is action for add cc")
    try {
        const res = yield call(apc_post_upload_cc_csv, action.payload)
        const status = res.status
        const data = res.data
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_UPLOAD_CC_CSV_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_UPLOAD_CC_CSV_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_UPLOAD_CC_CSV_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_UPLOAD_CC_CSV_ERROR, e })
    }
}


// DELETE Class (delete Class Coordinator)
export function* handleApcDeleteCC(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_delete_cc_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_CC_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_CC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_CC_ERROR, e })
    }
}

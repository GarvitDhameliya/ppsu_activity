import { call, put } from 'redux-saga/effects';

// -------- Manage APC in INST-ADMIN --------------------

// ACTION
import {

    // GET APC DATA ACTION
    REQ_FOR_GET_APC_SUCCESS,
    REQ_FOR_GET_APC_ERROR,

    // POST APC DATA ACTION
    REQ_FOR_POST_APC_SUCCESS,
    REQ_FOR_POST_APC_DUPLICATE,
    REQ_FOR_POST_APC_ERROR,
    REQ_FOR_PATCH_APC_SUCCESS,
    REQ_FOR_PATCH_APC_DUPLICATE,
    REQ_FOR_PATCH_APC_ERROR,
    REQ_FOR_DELETE_APC_SUCCESS,
    REQ_FOR_DELETE_APC_ERROR,
} from '../../../admin/action/action'

// API
import {
    instadmin_apc_delete_req,
    instadmin_apc_get_req,
    instadmin_apc_patch_req,
    instadmin_apc_post_req
} from '../../../admin/api/api'


// GET Details of APC for Each School
export function* handleInstAdmin_ApcGetReq(action) {
    try {
        const res = yield call(instadmin_apc_get_req, action)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_APC_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_APC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_APC_ERROR, e })
    }
}

// POST Details of APC for Each School
export function* handleInstAdmin_ApcPostReq(action) {
    try {
        const res = yield call(instadmin_apc_post_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_APC_SUCCESS, data })
        }
        else if (status === 301) {
            const data = "Duplication Available!😏"
            yield put({ type: REQ_FOR_POST_APC_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_APC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_APC_ERROR, e })
    }
}



// DELETE School
export function* handleInstAdmin_ApcDeleteReq(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(instadmin_apc_delete_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_APC_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_APC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_APC_ERROR, e })
    }
}


// PATCH  (Assign Class)
export function* handleInstAdmin_ApcPatchReq(action) {
    try {
        const res = yield call(instadmin_apc_patch_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_APC_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_APC_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_APC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_APC_ERROR, e })
    }
}
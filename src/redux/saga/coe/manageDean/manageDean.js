import { call, put } from "redux-saga/effects"
import { REQ_FOR_DELETE_DEAN_ERROR, REQ_FOR_DELETE_DEAN_SUCCESS, REQ_FOR_GET_DEAN_ERROR, REQ_FOR_GET_DEAN_SUCCESS, REQ_FOR_PATCH_DEAN_DUPLICATE, REQ_FOR_PATCH_DEAN_ERROR, REQ_FOR_PATCH_DEAN_SUCCESS, REQ_FOR_POST_CREATE_DEAN_DUPLICATE, REQ_FOR_POST_CREATE_DEAN_ERROR, REQ_FOR_POST_CREATE_DEAN_SUCCESS } from "../../../coe/action/action"
import { coe_dean_get_req, coe_delete_dean_req, coe_patch_dean, coe_post_create_dean_req } from "../../../coe/api/api"


// GET School detail
export function* handleCoe_DeanGetReq(action) {
    // //console.log(action)
    try {
        const res = yield call(coe_dean_get_req, action)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_DEAN_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_DEAN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_DEAN_ERROR, e })
    }
}



// POST Add School
export function* handleCoePostCreateDean(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(coe_post_create_dean_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_DEAN_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_DEAN_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_DEAN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_DEAN_ERROR, e })
    }
}



// DELETE School
export function* handleCoeDeleteDean(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(coe_delete_dean_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_DEAN_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_DEAN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_DEAN_ERROR, e })
    }
}


// PATCH  (Assign Class)
export function* handleCoePatchDean(action) {
    // //console.log(action, "This is action for patch school")
    try {
        const res = yield call(coe_patch_dean, action.payload.data)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_DEAN_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_DEAN_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_DEAN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_DEAN_ERROR, e })
    }
}
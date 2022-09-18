import { call, put } from "redux-saga/effects"
import { REQ_FOR_DELETE_SCHOOL_ERROR, REQ_FOR_DELETE_SCHOOL_SUCCESS, REQ_FOR_GET_SCHOOL_ERROR, REQ_FOR_GET_SCHOOL_SUCCESS, REQ_FOR_PATCH_SCHOOL_DUPLICATE, REQ_FOR_PATCH_SCHOOL_ERROR, REQ_FOR_PATCH_SCHOOL_SUCCESS, REQ_FOR_POST_CREATE_SCHOOL_DUPLICATE, REQ_FOR_POST_CREATE_SCHOOL_ERROR, REQ_FOR_POST_CREATE_SCHOOL_SUCCESS } from "../../../coe/action/action"
import { coe_delete_school_req, coe_patch_school, coe_post_create_school_req, coe_school_get_req } from "../../../coe/api/api"

// GET School detail
export function* handleCoe_SchoolGetReq(action) {
    // //console.log(action)
    try {
        const res = yield call(coe_school_get_req, action)
        const status = res.status
        const data = res.data
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_SCHOOL_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_SCHOOL_ERROR, e })
    }
}



// POST Add School
export function* handleCoePostCreateSchool(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(coe_post_create_school_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_SCHOOL_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_SCHOOL_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_SCHOOL_ERROR, e })
    }
}



// DELETE School
export function* handleCoeDeleteSchool(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(coe_delete_school_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_SCHOOL_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_SCHOOL_ERROR, e })
    }
}


// PATCH  (Assign Class)
export function* handleCoePatchSchool(action) {
    //console.log(action, "This is action for patch school")
    try {
        const res = yield call(coe_patch_school, action.payload.data)
        //console.log(res)
        const status = res.status
        const data = res.update_data
        // //console.log(data)
        // //console.log(data, "this is handleapc")
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_SCHOOL_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.update_data
            yield put({ type: REQ_FOR_PATCH_SCHOOL_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_SCHOOL_ERROR, e })
    }
}
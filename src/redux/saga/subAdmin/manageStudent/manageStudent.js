import { call, put } from "redux-saga/effects"
import {
    REQ_FOR_PATCH_STUDENT_SUCCESS,
    REQ_FOR_PATCH_STUDENT_ERROR,
    REQ_FOR_PATCH_STUDENT_DUPLICATE,

    REQ_FOR_DELETE_STUDENT_ERROR,
    REQ_FOR_DELETE_STUDENT_SUCCESS,
    REQ_FOR_GET_ALL_STUDENT_ERROR,
    REQ_FOR_GET_ALL_STUDENT_SUCCESS,
    REQ_FOR_POST_CREATE_STUDENT_DUPLICATE,
    REQ_FOR_POST_CREATE_STUDENT_ERROR,
    REQ_FOR_POST_CREATE_STUDENT_SUCCESS,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_DUPLICATE,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_ERROR,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_SUCCESS
} from "../../../subAdmin/action/action"
import { apc_patch_student_req, apc_delete_student_req, apc_get_all_student_req, apc_post_student_req, apc_post_upload_student_csv } from "../../../subAdmin/api/api"

// GET Class of Each school's
export function* handleApcGetAllStudent(action) {
    try {
        const res = yield call(apc_get_all_student_req, action)
        const status = res.status
        const data = res.data.message
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_ALL_STUDENT_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_ALL_STUDENT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_ALL_STUDENT_ERROR, e })
    }
}



// POST upload CSV (student)
export function* handleApcUploadStudentCSV(action) {
    //console.log(action, "This is action for add student")
    try {
        const res = yield call(apc_post_upload_student_csv, action.payload)
        const status = res.status
        const data = res.data
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_UPLOAD_STUDENT_CSV_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_UPLOAD_STUDENT_CSV_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_UPLOAD_STUDENT_CSV_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_UPLOAD_STUDENT_CSV_ERROR, e })
    }
}


// POST Student (add student)
export function* handleApcPostStudent(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_post_student_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_STUDENT_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_STUDENT_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_STUDENT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_STUDENT_ERROR, e })
    }
}



// DELETE Class (delete Class Coordinator)
export function* handleApcDeleteStudent(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_delete_student_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_STUDENT_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_STUDENT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_STUDENT_ERROR, e })
    }
}



// Update Student (add student)
export function* handleApcPatchStudent(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_patch_student_req, action.payload.data)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_STUDENT_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_STUDENT_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_STUDENT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_STUDENT_ERROR, e })
    }
}

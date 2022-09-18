import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_POST_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_POST_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_POST_STUDENT_ACTIVITY_DUPLICATE,

    REQ_FOR_GET_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_GET_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_DUPLICATE,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_ERROR,

} from '../../student/action/action'

// API
import {
    student_post_req,
    student_get_req,
    student_delete_student_req,
    student_patch_req,
} from '../../student/api/api'
import { apc_delete_student_req } from '../../subAdmin/api/api';




// Student Section

// GET Activity Details of Each student
export function* handleStudentGetReq(action) {
    try {
        const res = yield call(student_get_req, action)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_STUDENT_ACTIVITY_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_STUDENT_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_STUDENT_ACTIVITY_ERROR, e })
    }
}

// POST Activity Detils
export function* handleStudentPostReq(action) {
    try {
        const res = yield call(student_post_req, action.payload)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_STUDENT_ACTIVITY_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_POST_STUDENT_ACTIVITY_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_STUDENT_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_STUDENT_ACTIVITY_ERROR, e })
    }
}


// DELETE Student REQuest 
export function* handleStudentDeleteReq(action) {
    // //console.log(action, "This is action for delete req")
    try {
        const res = yield call(student_delete_student_req, action.payload)
        const status = res.status
        const data = res.delete_data
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_STUDENT_ACTIVITY_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_STUDENT_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_STUDENT_ACTIVITY_ERROR, e })
    }
}

// PATCH Activity Detils
export function* handleStudentPatchReq(action) {
    try {
        const res = yield call(student_patch_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_STUDENT_ACTIVITY_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_STUDENT_ACTIVITY_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_STUDENT_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_STUDENT_ACTIVITY_ERROR, e })
    }
}

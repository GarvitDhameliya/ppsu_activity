import { call, put } from 'redux-saga/effects';
import {
    // Student Profile
    REQ_FOR_GET_STUDENT_PROFILE_SUCCESS,
    REQ_FOR_GET_STUDENT_PROFILE_ERROR,
    REQ_FOR_PATCH_STUDENT_PASSWORD_SUCCESS,
    REQ_FOR_PATCH_STUDENT_PASSWORD_ERROR,
    REQ_FOR_PATCH_STUDENT_PASSWORD_DUPLICATE,
} from '../../student/action/action'

// API
import {
    student_get_profile, student_patch_password_req,
} from '../../student/api/api'


// ------------------ STUDENT PROFILE -------------------

// GET Profile of Each student
export function* handleStudentGetProfile(action) {
    try {
        const res = yield call(student_get_profile, action)
        const status = res.status
        const data = res.data.message[0]
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_STUDENT_PROFILE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_STUDENT_PROFILE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_STUDENT_PROFILE_ERROR, e })
    }
}



//------------change password------------------------//


// PATCH Activity Detils
export function* handleStudentPatchPasswordReq(action) {
    try {
        const res = yield call(student_patch_password_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_STUDENT_PASSWORD_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_STUDENT_PASSWORD_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_STUDENT_PASSWORD_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_STUDENT_PASSWORD_ERROR, e })
    }
}

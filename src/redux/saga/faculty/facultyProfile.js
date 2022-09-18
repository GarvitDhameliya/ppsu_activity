import { call, put } from 'redux-saga/effects';
import {
    // Student Profile
    REQ_FOR_GET_FACULTY_PROFILE_SUCCESS,
    REQ_FOR_GET_FACULTY_PROFILE_ERROR,

} from '../../faculty/action/action'

// API
import {
    faculty_get_profile,

} from '../../faculty/api/api'


// ------------------ FACULTY PROFILE -------------------

// GET Profile of Each FACULTY
export function* handleFacultyGetProfile(action) {
    try {
        const res = yield call(faculty_get_profile, action)
        const status = res.status
        const data = res.data.message[0]
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_FACULTY_PROFILE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_FACULTY_PROFILE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_FACULTY_PROFILE_ERROR, e })
    }
}


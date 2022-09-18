import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_LOGIN_SUCCESS_FACULTY,
    REQ_FOR_LOGIN_ERROR_FACULTY,
    REQ_FOR_LOGIN_FAILED_FACULTY
} from '../../login/faculty/action'

// API

import {
    faculty_post_login
} from '../../login/faculty/api'



// Login Activity Detils (faculty)
export function* handleFacultyLoginReq(action) {
    try {
        const res = yield call(faculty_post_login, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS_FACULTY, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED_FACULTY, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR_FACULTY, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR_FACULTY, e })
    }
}
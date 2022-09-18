import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_LOGIN_SUCCESS,
    REQ_FOR_LOGIN_ERROR,
    REQ_FOR_LOGIN_FAILED
} from '../../login/student/action'

// API

import {
    student_post_login
} from '../../login/student/api'



// Login Activity Detils (Student)
export function* handleStudentLoginReq(action) {
    try {
        const res = yield call(student_post_login, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR, e })
    }
}
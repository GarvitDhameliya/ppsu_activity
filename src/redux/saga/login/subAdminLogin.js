import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_LOGIN_SUCCESS_APC,
    REQ_FOR_LOGIN_ERROR_APC,
    REQ_FOR_LOGIN_FAILED_APC
} from '../../login/subAdmin/action'

// API

import {
    apc_post_login
} from '../../login/subAdmin/api'



// Login Activity Detils (Student)
export function* handleApcLoginReq(action) {
    try {
        const res = yield call(apc_post_login, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS_APC, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED_APC, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR_APC, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR_APC, e })
    }
}
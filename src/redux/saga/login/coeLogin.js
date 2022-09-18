import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_LOGIN_SUCCESS_COE,
    REQ_FOR_LOGIN_ERROR_COE,
    REQ_FOR_LOGIN_FAILED_COE
} from '../../login/coe/action'

// API

import {
    coe_post_login
} from '../../login/coe/api'



// Login Activity Detils (COE)
export function* handleCoeLoginReq(action) {
    try {
        const res = yield call(coe_post_login, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS_COE, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED_COE, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR_COE, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR_COE, e })
    }
}
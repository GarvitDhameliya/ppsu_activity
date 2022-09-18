import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_GET_APC_PROFILE_ERROR,
    REQ_FOR_GET_APC_PROFILE_SUCCESS,
    REQ_FOR_PATCH_APC_PASSWORD_DUPLICATE,
    REQ_FOR_PATCH_APC_PASSWORD_ERROR,
    REQ_FOR_PATCH_APC_PASSWORD_SUCCESS
} from '../../../subAdmin/action/action'

import {
    apc_get_profile, apc_patch_password_req
} from '../../../subAdmin/api/api'

// ------------------ APC PROFILE -------------------

// GET Profile of Each student
export function* handleApcGetProfile(action) {
    try {
        const res = yield call(apc_get_profile, action)
        // //console.log(res)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_APC_PROFILE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_APC_PROFILE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_APC_PROFILE_ERROR, e })
    }
}





//------------change password------------------------//


// PATCH Activity Detils
export function* handleApcPatchPasswordReq(action) {
    try {
        const res = yield call(apc_patch_password_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_APC_PASSWORD_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_APC_PASSWORD_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_APC_PASSWORD_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_APC_PASSWORD_ERROR, e })
    }
}

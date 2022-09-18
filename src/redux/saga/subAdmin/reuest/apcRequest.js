import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_SUCCESS,
    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_ERROR,

    REQ_FOR_PATCH_APC_STATUS_CHANGE_SUCCESS,
    REQ_FOR_PATCH_APC_STATUS_CHANGE_ERROR
} from '../../../subAdmin/action/action'

import {
    apc_get_req_by_school,
    apc_patch_status_chnage
} from '../../../subAdmin/api/api'

// GET Activity Details 
export function* handleApcGetReqBySchool(action) {
    try {
        const res = yield call(apc_get_req_by_school, action)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_ERROR, e })
    }
}


// PATCh Activity Details 
// Chnage stattus form SubAdmin
export function* handleApcStatusChnagePatchReq(action) {
    try {
        const res = yield call(apc_patch_status_chnage, action)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_APC_STATUS_CHANGE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_APC_STATUS_CHANGE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_APC_STATUS_CHANGE_ERROR, e })
    }
}
import { call, put } from 'redux-saga/effects';
import { REQ_FOR_GET_COE_PROFILE_ERROR, REQ_FOR_GET_COE_PROFILE_SUCCESS, REQ_FOR_PATCH_COE_PASSWORD_DUPLICATE, REQ_FOR_PATCH_COE_PASSWORD_ERROR, REQ_FOR_PATCH_COE_PASSWORD_SUCCESS } from '../../coe/action/action';
import { coe_get_profile, coe_patch_password_req } from '../../coe/api/api';




// GET Profile of COE
export function* handleCoeGetProfile(action) {
    try {
        const res = yield call(coe_get_profile, action)
        // //console.log(res)
        const status = res.status
        const data = res.data.message
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_COE_PROFILE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_COE_PROFILE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_COE_PROFILE_ERROR, e })
    }
}



//------------change password------------------------//


// PATCH Activity Detils
export function* handleCoePatchPasswordReq(action) {
    try {
        const res = yield call(coe_patch_password_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_COE_PASSWORD_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_COE_PASSWORD_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_COE_PASSWORD_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_COE_PASSWORD_ERROR, e })
    }
}

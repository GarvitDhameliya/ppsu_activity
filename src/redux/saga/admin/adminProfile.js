import { call, put } from 'redux-saga/effects';
import { REQ_FOR_GET_INSTADMIN_PROFILE_ERROR, REQ_FOR_GET_INSTADMIN_PROFILE_SUCCESS, REQ_FOR_PATCH_INSTADMIN_PASSWORD_DUPLICATE, REQ_FOR_PATCH_INSTADMIN_PASSWORD_ERROR, REQ_FOR_PATCH_INSTADMIN_PASSWORD_SUCCESS } from '../../admin/action/action';
import { instadmin_get_profile, instadmin_patch_password_req } from '../../admin/api/api';



// ------------------ Admin PROFILE -------------------

// GET Profile of Each instadmin
export function* handleInstadminGetProfile(action) {
    try {
        const res = yield call(instadmin_get_profile, action)
        const status = res.status
        const data = res.data.message[0]
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_INSTADMIN_PROFILE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_INSTADMIN_PROFILE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_INSTADMIN_PROFILE_ERROR, e })
    }
}



//------------change password------------------------//


// PATCH Activity Detils
export function* handleInstadminPatchPasswordReq(action) {
    try {
        const res = yield call(instadmin_patch_password_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_INSTADMIN_PASSWORD_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_INSTADMIN_PASSWORD_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_INSTADMIN_PASSWORD_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_INSTADMIN_PASSWORD_ERROR, e })
    }
}

import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_SUCCESS,
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_ERROR,
    //  faculty change status - PATCH
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_SUCCESS,
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_ERROR
} from '../../faculty/action/action'

import {
    faculty_get_req_by_class,
    faculty_patch_status_chnage
} from '../../faculty/api/api'


// Faculty Section

// GET Activity Details 
export function* handleFacultyGetReqByClass(action) {
    try {
        const res = yield call(faculty_get_req_by_class, action)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_ERROR, e })
    }
}
// PATCh Activity Details 
// Chnage stattus form facutly
export function* handleFacultyStatusChnagePatchReq(action) {
    try {
        const res = yield call(faculty_patch_status_chnage, action)
        //console.log(res)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_ERROR, e })
    }
}


// 


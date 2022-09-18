import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_GET_HEADING_TO_SCHOOL_SUCCESS,
    REQ_FOR_GET_HEADING_TO_SCHOOL_ERROR,

    REQ_FOR_PATCH_HEADING_TO_SCHOOL_SUCCESS,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_ERROR,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_DUPLICATE,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_SUCCESS,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_DUPLICATE,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_ERROR,
    REQ_FOR_POST_CREATE_ACTIVITY_SUCCESS,
    REQ_FOR_POST_CREATE_ACTIVITY_DUPLICATE,
    REQ_FOR_POST_CREATE_ACTIVITY_ERROR,
    REQ_FOR_GET_ACTIVITY_SUCCESS,
    REQ_FOR_GET_ACTIVITY_ERROR,
    REQ_FOR_DELETE_HEADING_SUCCESS,
    REQ_FOR_DELETE_HEADING_ERROR
} from '../../../admin/action/action';
import {
    instadmin_deAssign_activity_patch_req,
    instadmin_get_activity_req,
    instadmin_get_selection_activity,
    instadmin_heading_delete_req,
    instadmin_post_create_activity_req,
    instadmin_selection_activity_patch_req
} from '../../../admin/api/api'

// ------------------ MANAGE ACTIVITY -------------------

// GET activity
export function* handleInstadminGetSelectionActivity(action) {
    try {
        const res = yield call(instadmin_get_selection_activity, action)
        const status = res.status
        const data = res.data.message
        //console.log(res)
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_HEADING_TO_SCHOOL_ERROR, e })
    }
}

// Patch activity --> Assign to School
export function* handleInstadminPatchSelectionActivity(action) {
    try {
        const res = yield call(instadmin_selection_activity_patch_req, action)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_HEADING_TO_SCHOOL_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_HEADING_TO_SCHOOL_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_HEADING_TO_SCHOOL_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_HEADING_TO_SCHOOL_ERROR, e })
    }
}

// Patch activity --> De Assign from School
export function* handleInstadminPatchDeAssignActivity(action) {
    try {
        const res = yield call(instadmin_deAssign_activity_patch_req, action)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_SCHOOL_TO_HEADING_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_PATCH_SCHOOL_TO_HEADING_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_SCHOOL_TO_HEADING_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_SCHOOL_TO_HEADING_ERROR, e })
    }
}






//-----------------Add activity req-------------------------------//



// GET heading
export function* handleInstadmin_ActivityGetReq(action) {
    // //console.log(action)
    try {
        const res = yield call(instadmin_get_activity_req, action)
        const status = res.status
        const data = res.data.message
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_ACTIVITY_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_ACTIVITY_ERROR, e })
    }
}



// POST Add Heading 
export function* handleInstadminPostCreateActivity(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(instadmin_post_create_activity_req, action.payload.data)
        // //console.log(res)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_ACTIVITY_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_ACTIVITY_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_ACTIVITY_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_ACTIVITY_ERROR, e })
    }
}


// Delete heading
export function* handleInstadmin_ActivityDeleteReq(action) {
    try {
        const res = yield call(instadmin_heading_delete_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_HEADING_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_HEADING_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_HEADING_ERROR, e })
    }
}

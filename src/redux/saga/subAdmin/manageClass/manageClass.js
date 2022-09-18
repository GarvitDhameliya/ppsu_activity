import { call, put } from 'redux-saga/effects';
import {
    REQ_FOR_POST_CREATE_CLASS_SUCCESS,
    REQ_FOR_POST_CREATE_CLASS_ERROR,
    REQ_FOR_POST_CREATE_CLASS_DUPLICATE,

    REQ_FOR_GET_CLASS_SUCCESS,
    REQ_FOR_GET_CLASS_ERROR,

    REQ_FOR_PATCH_ASSIGN_CLASS_SUCCESS,
    REQ_FOR_PATCH_ASSIGN_CLASS_DUPLICATE,
    REQ_FOR_PATCH_ASSIGN_CLASS_ERROR,

    REQ_FOR_UNASSIGN_CLASS_SUCCESS,
    REQ_FOR_UNASSIGN_CLASS_ERROR,

    REQ_FOR_DELETE_CLASS_SUCCESS,
    REQ_FOR_DELETE_CLASS_ERROR,

    REQ_FOR_UPDATE_CLASS_SUCCESS,
    REQ_FOR_UPDATE_CLASS_DUPLICATE,
    REQ_FOR_UPDATE_CLASS_ERROR,
} from '../../../subAdmin/action/action'
// API
import {
    apc_post_class_req,
    apc_get_class_req,
    apc_patch_assign_class_req,
    apc_unassign_class_req,
    apc_delete_class_req,
    apc_update_class_req
} from '../../../subAdmin/api/api'




// APC

// GET Class of Each school's
export function* handleApcGetClass(action) {
    try {
        const res = yield call(apc_get_class_req, action)
        const status = res.status
        const data = res.data.message
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_CLASS_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_CLASS_ERROR, e })
    }
}



// POST Class (add Class)
export function* handleApcPostClass(action) {
    try {
        const res = yield call(apc_post_class_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_CLASS_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_CLASS_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_CLASS_ERROR, e })
    }
}




// PATCH  (Assign Class)
export function* handleApcPatchAssignClass(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_patch_assign_class_req, action.payload.data)
        const fac = res.facultyID
        const status = res.status
        const data = {
            class: res.update_data.class,
            facultyID: fac
        }
        // //console.log(data)
        // //console.log(data, "this is handleapc")
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_ASSIGN_CLASS_SUCCESS, data })
        }
        else if (status === 201) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_ASSIGN_CLASS_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_ASSIGN_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_ASSIGN_CLASS_ERROR, e })
    }
}


// PATCH  (Class)
export function* handleApcPatchClass(action) {
    try {
        const res = yield call(apc_update_class_req, action.payload.data)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_UPDATE_CLASS_SUCCESS, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_UPDATE_CLASS_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_UPDATE_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_UPDATE_CLASS_ERROR, e })
    }
}


// UnAssign Class
export function* handleApcUnassignClass(action) {
    // //console.log(action, "This is action for add cc")
    try {
        const res = yield call(apc_unassign_class_req, action.payload)
        const status = res.status
        const data = res.delete_data
        if (status === 200) {
            yield put({ type: REQ_FOR_UNASSIGN_CLASS_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_UNASSIGN_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_UNASSIGN_CLASS_ERROR, e })
    }
}


// DELETE Class
export function* handleApcDeleteClass(action) {
    try {
        const res = yield call(apc_delete_class_req, action.payload)
        const status = res.status
        const data = res.data
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_CLASS_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_CLASS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_CLASS_ERROR, e })
    }
}
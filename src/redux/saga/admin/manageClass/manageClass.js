import { call, put } from 'redux-saga/effects';

// -------- Manage APC in INST-ADMIN --------------------

// ACTION
import {


    // POST CLASS DATA ACTION

    REQ_FOR_GET_CLASS_CONST_SUCCESS,
    REQ_FOR_GET_CLASS_CONST_ERROR,
    REQ_FOR_POST_CLASS_CONST_SUCCESS,
    REQ_FOR_POST_CLASS_CONST_DUPLICATE,
    REQ_FOR_POST_CLASS_CONST_ERROR,
    REQ_FOR_PATCH_CLASS_CONST_SUCCESS,
    REQ_FOR_PATCH_CLASS_CONST_DUPLICATE,
    REQ_FOR_PATCH_CLASS_CONST_ERROR,
    REQ_FOR_DELETE_CLASS_CONST_SUCCESS,
    REQ_FOR_DELETE_CLASS_CONST_ERROR,
} from '../../../admin/action/action'

// API
import {

    instadmin_class_delete_req,
    instadmin_class_get_req,
    instadmin_class_patch_req,
    instadmin_class_post_req
} from '../../../admin/api/api'



// GET Details of Class for Each School
export function* handleInstAdmin_ClassGetReq(action) {
    try {
        const res = yield call(instadmin_class_get_req, action)
        const status = res.status
        const data = res.data
        //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_CLASS_CONST_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_CLASS_CONST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_CLASS_CONST_ERROR, e })
    }
}

// POST Details of class for Each School
export function* handleInstAdmin_ClassPostReq(action) {
    try {
        const res = yield call(instadmin_class_post_req, action.payload.data)
        const status = res.status
        const data = res.data
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CLASS_CONST_SUCCESS, data })
        }
        else if (status === 301) {
            const data = "Duplication Available!"
            yield put({ type: REQ_FOR_POST_CLASS_CONST_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CLASS_CONST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CLASS_CONST_ERROR, e })
    }
}



// DELETE Class
export function* handleInstAdmin_ClassDeleteReq(action) {
    //console.log(action, "This is action for add class")
    let final_data = {
        classname: action.payload.classname.name,
        school: action.payload.school
    }
    try {
        const res = yield call(instadmin_class_delete_req, final_data)
        const status = res.status
        const data = res.delete_data.classname
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_DELETE_CLASS_CONST_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_DELETE_CLASS_CONST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_DELETE_CLASS_CONST_ERROR, e })
    }
}


// PATCH  
export function* handleInstAdmin_ClassPatchReq(action) {
    try {
        const res = yield call(instadmin_class_patch_req, action.payload)
        const status = res.status
        const data = res.update_data
        if (status === 200) {
            yield put({ type: REQ_FOR_PATCH_CLASS_CONST_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_PATCH_CLASS_CONST_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_PATCH_CLASS_CONST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_PATCH_CLASS_CONST_ERROR, e })
    }
}
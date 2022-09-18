import { takeLatest } from '@redux-saga/core/effects';


import {
    REQ_FOR_DELETE_APC_PROGRESS,
    REQ_FOR_DELETE_CLASS_CONST_PROGRESS,
    REQ_FOR_DELETE_HEADING_PROGRESS,
    REQ_FOR_GET_ACTIVITY_PROGRESS,
    // GET MANAGE APC
    REQ_FOR_GET_APC_PROGRESS,
    REQ_FOR_GET_CLASS_CONST_PROGRESS,
    REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS,
    REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS,
    REQ_FOR_PATCH_APC_PROGRESS,
    REQ_FOR_PATCH_CLASS_CONST_PROGRESS,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS,
    REQ_FOR_PATCH_INSTADMIN_PASSWORD_PROGRESS,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS,
    // POST MANAGE APC
    REQ_FOR_POST_APC_PROGRESS,
    REQ_FOR_POST_CLASS_CONST_PROGRESS,
    REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS
} from '../../admin/action/action'
import { handleInstadminGetProfile, handleInstadminPatchPasswordReq } from '../admin/adminProfile';
import {
    handleInstadminGetSelectionActivity,
    handleInstadminPatchDeAssignActivity,
    handleInstadminPatchSelectionActivity,
    handleInstadminPostCreateActivity,
    handleInstadmin_ActivityDeleteReq,
    handleInstadmin_ActivityGetReq
} from '../admin/manageActivity/manageActivity';

import {
    handleInstAdmin_ApcDeleteReq,
    handleInstAdmin_ApcGetReq,
    handleInstAdmin_ApcPatchReq,
    handleInstAdmin_ApcPostReq
} from '../admin/manageApc/manageApc'
import { handleInstAdmin_ClassDeleteReq, handleInstAdmin_ClassGetReq, handleInstAdmin_ClassPatchReq, handleInstAdmin_ClassPostReq } from '../admin/manageClass/manageClass';

// GET - APC MANAGE DATA
export function* instadmin_getApc_saga() {
    yield takeLatest(REQ_FOR_GET_APC_PROGRESS, handleInstAdmin_ApcGetReq)
}
// POST - APC MANAGE DATA
export function* instadmin_postApc_saga() {
    yield takeLatest(REQ_FOR_POST_APC_PROGRESS, handleInstAdmin_ApcPostReq)
}
// PATCH -APC
export function* instadmin_patchApc_saga() {
    yield takeLatest(REQ_FOR_PATCH_APC_PROGRESS, handleInstAdmin_ApcPatchReq)
}
// DELETE -APC
export function* instadmin_deleteApc_saga() {
    yield takeLatest(REQ_FOR_DELETE_APC_PROGRESS, handleInstAdmin_ApcDeleteReq)
}

// Admin Profile

export function* instadmin_profile_get_saga() {
    yield takeLatest(REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS, handleInstadminGetProfile)
}

// GET ACtivity
export function* instadmin_selection_activity_get_saga() {
    yield takeLatest(REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS, handleInstadminGetSelectionActivity)
}

// DELETE 
export function* instadmin_activity_delete_saga() {
    yield takeLatest(REQ_FOR_DELETE_HEADING_PROGRESS, handleInstadmin_ActivityDeleteReq)
}


// PATCH ACtivity --> Assign to School
export function* instadmin_selection_activity_patch_saga() {
    yield takeLatest(REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS, handleInstadminPatchSelectionActivity)
}

// PATCH ACtivity --> De Assign from School
export function* instadmin_deAssign_activity_patch_saga() {
    yield takeLatest(REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS, handleInstadminPatchDeAssignActivity)
}




//------------------------add actitivy req---------------------//


//POST COE Create Heading
export function* instadmin_create_activity_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS, handleInstadminPostCreateActivity)
}


// GET - COE Heading
export function* instadmin_get_activity_saga() {
    yield takeLatest(REQ_FOR_GET_ACTIVITY_PROGRESS, handleInstadmin_ActivityGetReq)
}



// change password

//PATCH REQ
export function* instadmin_req_patch_password_saga() {
    yield takeLatest(REQ_FOR_PATCH_INSTADMIN_PASSWORD_PROGRESS, handleInstadminPatchPasswordReq)
}



//--------------------manage ------------------------------------//


// GET - APC MANAGE DATA
export function* instadmin_getClass_saga() {
    yield takeLatest(REQ_FOR_GET_CLASS_CONST_PROGRESS, handleInstAdmin_ClassGetReq)
}
// POST - APC MANAGE DATA
export function* instadmin_postClass_saga() {
    yield takeLatest(REQ_FOR_POST_CLASS_CONST_PROGRESS, handleInstAdmin_ClassPostReq)
}
// PATCH -APC
export function* instadmin_patchClass_saga() {
    yield takeLatest(REQ_FOR_PATCH_CLASS_CONST_PROGRESS, handleInstAdmin_ClassPatchReq)
}
// DELETE -APC
export function* instadmin_deleteClass_saga() {
    yield takeLatest(REQ_FOR_DELETE_CLASS_CONST_PROGRESS, handleInstAdmin_ClassDeleteReq)
}

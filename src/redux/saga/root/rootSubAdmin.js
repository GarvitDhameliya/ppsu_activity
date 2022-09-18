import { takeLatest } from '@redux-saga/core/effects';

import {
    REQ_FOR_POST_CREATE_CLASS_PROGRESS,
    REQ_FOR_GET_CLASS_PROGRESS,
    REQ_FOR_POST_CREATE_CC_PROGRESS,
    REQ_FOR_GET_CC_PROGRESS,
    REQ_FOR_PATCH_CC_PROGRESS,
    REQ_FOR_GET_ALL_STUDENT_PROGRESS,
    REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS,
    REQ_FOR_DELETE_CC_PROGRESS,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_PROGRESS,
    REQ_FOR_POST_CREATE_STUDENT_PROGRESS,
    REQ_FOR_DELETE_STUDENT_PROGRESS,
    REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS,
    REQ_FOR_UNASSIGN_CLASS_PROGRESS,

    REQ_FOR_GET_APC_PROFILE_PROGRESS,

    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS,

    REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS,
    REQ_FOR_DELETE_CLASS_PROGRESS,
    REQ_FOR_UPDATE_CLASS_PROGRESS,
    REQ_FOR_PATCH_STUDENT_PROGRESS,
    REQ_FOR_PATCH_APC_PASSWORD_PROGRESS
} from '../../subAdmin/action/action'
import { handleApcDeleteCC, handleApcGetCC, handleApcPatchCC, handleApcPostCC, handleApcUploadCCCSV } from '../subAdmin/manageCC/manageCC';
import {
    handleApcGetProfile, handleApcPatchPasswordReq
} from '../subAdmin/profile/apcProfile'
import {
    handleApcPostClass,
    handleApcGetClass,
    handleApcPatchAssignClass,
    handleApcUnassignClass,
    handleApcDeleteClass,
    handleApcPatchClass

} from '../subAdmin/manageClass/manageClass'
import { handleApcDeleteStudent, handleApcGetAllStudent, handleApcPostStudent, handleApcUploadStudentCSV, handleApcPatchStudent } from '../subAdmin/manageStudent/manageStudent';

// For GET REQ BY SCHOOL
import {
    handleApcGetReqBySchool,
    handleApcStatusChnagePatchReq
} from '../subAdmin/reuest/apcRequest'


// Profile GET
export function* apc_get_profile_saga() {
    yield takeLatest(REQ_FOR_GET_APC_PROFILE_PROGRESS, handleApcGetProfile)
}
// Update STudent
export function* apc_patch_student_saga() {
    yield takeLatest(REQ_FOR_PATCH_STUDENT_PROGRESS, handleApcPatchStudent)
}
// For GET REQ BY SCHOOL
export function* apc_req_get_by_school_saga() {
    yield takeLatest(REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS, handleApcGetReqBySchool)
}
// For PATCH REQ BY SCHOOL Chnage Status
export function* apc_req_patch_chnage_status_saga() {
    yield takeLatest(REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS, handleApcStatusChnagePatchReq)
}
// POST
export function* apc_create_class_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_CLASS_PROGRESS, handleApcPostClass)
}
// PATCH Class
export function* apc_update_class_saga() {
    yield takeLatest(REQ_FOR_UPDATE_CLASS_PROGRESS, handleApcPatchClass)
}

export function* apc_create_cc_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_CC_PROGRESS, handleApcPostCC)
}

export function* apc_create_student_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_STUDENT_PROGRESS, handleApcPostStudent)
}


export function* apc_upload_cc_csv_post_saga() {
    yield takeLatest(REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS, handleApcUploadCCCSV)
}

export function* apc_upload_student_csv_post_saga() {
    yield takeLatest(REQ_FOR_POST_UPLOAD_STUDENT_CSV_PROGRESS, handleApcUploadStudentCSV)
}




// GET
export function* apc_get_class_saga() {
    yield takeLatest(REQ_FOR_GET_CLASS_PROGRESS, handleApcGetClass)
}
// Delete Class
export function* apc_delete_class_saga() {
    yield takeLatest(REQ_FOR_DELETE_CLASS_PROGRESS, handleApcDeleteClass)
}

export function* apc_get_cc_saga() {
    yield takeLatest(REQ_FOR_GET_CC_PROGRESS, handleApcGetCC)
}


export function* apc_get_all_student_saga() {
    yield takeLatest(REQ_FOR_GET_ALL_STUDENT_PROGRESS, handleApcGetAllStudent)
}


// PATCH
export function* apc_patch_cc_saga() {
    yield takeLatest(REQ_FOR_PATCH_CC_PROGRESS, handleApcPatchCC)
}
export function* apc_patch_assign_class_saga() {
    yield takeLatest(REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS, handleApcPatchAssignClass)
}


//DELETE
export function* apc_delete_cc_saga() {
    yield takeLatest(REQ_FOR_DELETE_CC_PROGRESS, handleApcDeleteCC)
}

export function* apc_delete_student_saga() {
    yield takeLatest(REQ_FOR_DELETE_STUDENT_PROGRESS, handleApcDeleteStudent)
}

export function* apc_unassign_class_saga() {
    yield takeLatest(REQ_FOR_UNASSIGN_CLASS_PROGRESS, handleApcUnassignClass)
}


// change password

//PATCH REQ
export function* apc_req_patch_password_saga() {
    yield takeLatest(REQ_FOR_PATCH_APC_PASSWORD_PROGRESS, handleApcPatchPasswordReq)
}

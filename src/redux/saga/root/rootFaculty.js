import { takeLatest } from '@redux-saga/core/effects';
// GET REQ BY CLASS
import {
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS,
    // PATCH - chnage status
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS
} from '../../faculty/action/action'

import {
    handleFacultyGetReqByClass,
    // Patch for change status
    handleFacultyStatusChnagePatchReq
} from '../faculty/facultyReq'


// FACULTY Profile
import {
    REQ_FOR_GET_FACULTY_PROFILE_PROGRESS,
} from '../../faculty/action/action'
import {
    handleFacultyGetProfile,
} from '../faculty/facultyProfile'

// GET REQ BY CLASS
export function* faculty_req_get_byClass_saga() {
    yield takeLatest(REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS, handleFacultyGetReqByClass)
}
// PATCH -CHNAGE STATUS
export function* faculty_req_patch_chnage_status_saga() {
    yield takeLatest(REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS, handleFacultyStatusChnagePatchReq)
}


// Faculty Profile

export function* faculty_profile_get_saga() {
    yield takeLatest(REQ_FOR_GET_FACULTY_PROFILE_PROGRESS, handleFacultyGetProfile)
}
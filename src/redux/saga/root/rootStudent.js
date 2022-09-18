import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_GET_HEADING_PROGRESS,
    REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS
} from '../../student/action/action'

import {
    handleStudentPostReq,
    handleStudentGetReq
} from '../student/studentReq'
import {
    handleStudent_HeadingGetReq
} from '../student/studentHeading';
// Student Profile
import {
    REQ_FOR_GET_STUDENT_PROFILE_PROGRESS
} from '../../student/action/action'
import {
    handleStudentGetProfile, handleStudentPatchPasswordReq
} from '../student/studentProfile'


export function* student_req_post_saga() {
    yield takeLatest(REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS, handleStudentPostReq)
}

export function* student_req_get_saga() {
    yield takeLatest(REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS, handleStudentGetReq)
}

export function* student_req_get_heading_saga() {
    yield takeLatest(REQ_FOR_GET_HEADING_PROGRESS, handleStudent_HeadingGetReq)
}

// STudent Profile

export function* student_profile_get_saga() {
    yield takeLatest(REQ_FOR_GET_STUDENT_PROFILE_PROGRESS, handleStudentGetProfile)
}

// change password

//PATCH REQ
export function* student_req_patch_password_saga() {
    yield takeLatest(REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS, handleStudentPatchPasswordReq)
}
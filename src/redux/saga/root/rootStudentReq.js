import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS
} from '../../student/action/action'

import {
    handleStudentPostReq,
    handleStudentGetReq,
    handleStudentDeleteReq,
    handleStudentPatchReq
} from '../student/studentReq'



export function* student_req_post_saga() {
    yield takeLatest(REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS, handleStudentPostReq)
}

export function* student_req_get_saga() {
    yield takeLatest(REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS, handleStudentGetReq)
}


//DELETE req
export function* student_delete_req_saga() {
    yield takeLatest(REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS, handleStudentDeleteReq)
}
//PATCH REQ
export function* student_req_patch_saga() {
    yield takeLatest(REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS, handleStudentPatchReq)
}
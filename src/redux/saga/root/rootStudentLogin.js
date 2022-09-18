import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_LOGIN_PROGRESS,
} from '../../login/student/action'
import {
    handleStudentLoginReq
} from '../login/studentLogin'

export function* student_login_post_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS, handleStudentLoginReq)
}
import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_LOGIN_PROGRESS_FACULTY,
} from '../../login/faculty/action'
import {
    handleFacultyLoginReq
} from '../login/facultyLogin'

export function* faculty_login_post_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS_FACULTY, handleFacultyLoginReq)
}
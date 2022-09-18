import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_LOGIN_PROGRESS_APC,
} from '../../login/subAdmin/action'
import {
    handleApcLoginReq
} from '../login/subAdminLogin'

export function* apc_login_post_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS_APC, handleApcLoginReq)
}
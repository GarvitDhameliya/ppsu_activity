import { takeLatest } from '@redux-saga/core/effects';
import {
    REQ_FOR_LOGIN_PROGRESS_COE,
} from '../../login/coe/action'
import {
    handleCoeLoginReq
} from '../login/coeLogin'

export function* coe_login_post_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS_COE, handleCoeLoginReq)
}
import { call, put } from "redux-saga/effects"
import { REQ_FOR_GET_HEADING_ERROR, REQ_FOR_GET_HEADING_SUCCESS } from "../../student/action/action"
import { student_get_heading_req } from "../../student/api/api"

// GET heading
export function* handleStudent_HeadingGetReq(action) {
    // //console.log(action)
    try {
        const res = yield call(student_get_heading_req, action)
        const status = res.status
        const data = res.data.message
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_HEADING_SUCCESS, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_HEADING_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_HEADING_ERROR, e })
    }
}
import { call, put } from "redux-saga/effects"
import { REQ_FOR_GET_HEADING_ERROR, REQ_FOR_GET_HEADING_ERROR_COE, REQ_FOR_GET_HEADING_SUCCESS_COE, REQ_FOR_POST_CREATE_HEADING_DUPLICATE, REQ_FOR_POST_CREATE_HEADING_ERROR, REQ_FOR_POST_CREATE_HEADING_SUCCESS } from "../../../coe/action/action"
import { coe_get_heading_req, coe_post_create_heading_req } from "../../../coe/api/api"

// GET heading
export function* handleCoe_HeadingGetReq(action) {
    // //console.log(action)
    try {
        const res = yield call(coe_get_heading_req, action)
        const status = res.status
        const data = res.data.message
        // //console.log(data)
        if (status === 200) {
            yield put({ type: REQ_FOR_GET_HEADING_SUCCESS_COE, data })
        }
        else {
            yield put({ type: REQ_FOR_GET_HEADING_ERROR_COE, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_GET_HEADING_ERROR_COE, e })
    }
}



// POST Add Heading 
export function* handleCoePostCreateHeading(action) {
    //console.log(action, "This is action for add cc")
    try {
        const res = yield call(coe_post_create_heading_req, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_POST_CREATE_HEADING_SUCCESS, data })
        }
        else if (status === 301) {
            const data = res.data
            yield put({ type: REQ_FOR_POST_CREATE_HEADING_DUPLICATE, data })
        }
        else {
            yield put({ type: REQ_FOR_POST_CREATE_HEADING_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_POST_CREATE_HEADING_ERROR, e })
    }
}




import { takeLatest } from '@redux-saga/core/effects';
import { handleCoePatchPasswordReq, handleCoeGetProfile } from '../coe/coeProfile';


import { REQ_FOR_DELETE_DEAN_PROGRESS, REQ_FOR_DELETE_SCHOOL_PROGRESS, REQ_FOR_GET_COE_PROFILE_PROGRESS, REQ_FOR_GET_DEAN_PROGRESS, REQ_FOR_GET_HEADING_PROGRESS, REQ_FOR_GET_HEADING_PROGRESS_COE, REQ_FOR_GET_SCHOOL_PROGRESS, REQ_FOR_PATCH_COE_PASSWORD_PROGRESS, REQ_FOR_PATCH_DEAN_PROGRESS, REQ_FOR_PATCH_SCHOOL_PROGRESS, REQ_FOR_POST_CREATE_DEAN_PROGRESS, REQ_FOR_POST_CREATE_HEADING_PROGRESS, REQ_FOR_POST_CREATE_SCHOOL_PROGRESS } from '../../coe/action/action';
import { handleCoeDeleteDean, handleCoePatchDean, handleCoePostCreateDean, handleCoe_DeanGetReq } from '../coe/manageDean/manageDean';
import { handleCoePostCreateHeading, handleCoe_HeadingGetReq } from '../coe/manageHeading/manageHeading';


import { handleCoeDeleteSchool, handleCoePatchSchool, handleCoePostCreateSchool, handleCoe_SchoolGetReq } from '../coe/manageSchool/manageSchool';

// GET - COE School data
export function* coe_getSchool_saga() {
    yield takeLatest(REQ_FOR_GET_SCHOOL_PROGRESS, handleCoe_SchoolGetReq)
}


//POST COE Create School
export function* coe_create_school_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_SCHOOL_PROGRESS, handleCoePostCreateSchool)
}

//DELETE School
export function* coe_delete_school_saga() {
    yield takeLatest(REQ_FOR_DELETE_SCHOOL_PROGRESS, handleCoeDeleteSchool)
}
//PATCH School
export function* coe_patch_school_saga() {
    yield takeLatest(REQ_FOR_PATCH_SCHOOL_PROGRESS, handleCoePatchSchool)
}


//POST COE Create Heading
export function* coe_create_heading_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_HEADING_PROGRESS, handleCoePostCreateHeading)
}


// GET - COE Heading
export function* coe_get_Heading_saga() {
    yield takeLatest(REQ_FOR_GET_HEADING_PROGRESS_COE, handleCoe_HeadingGetReq)
}



//-----------------dean-----------------------//
// GET - COE Dean data
export function* coe_getDean_saga() {
    yield takeLatest(REQ_FOR_GET_DEAN_PROGRESS, handleCoe_DeanGetReq)
}

//POST COE Create Dean
export function* coe_create_dean_post_saga() {
    yield takeLatest(REQ_FOR_POST_CREATE_DEAN_PROGRESS, handleCoePostCreateDean)
}

//DELETE Dean
export function* coe_delete_dean_saga() {
    yield takeLatest(REQ_FOR_DELETE_DEAN_PROGRESS, handleCoeDeleteDean)
}
//PATCH Dean
export function* coe_patch_dean_saga() {
    yield takeLatest(REQ_FOR_PATCH_DEAN_PROGRESS, handleCoePatchDean)
}




// change password

//PATCH REQ
export function* coe_req_patch_password_saga() {
    yield takeLatest(REQ_FOR_PATCH_COE_PASSWORD_PROGRESS, handleCoePatchPasswordReq)
}


// Profile GET
export function* coe_get_profile_saga() {
    yield takeLatest(REQ_FOR_GET_COE_PROFILE_PROGRESS, handleCoeGetProfile)
}

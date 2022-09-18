import { takeLatest, all } from '@redux-saga/core/effects';
// Student
import {
    student_req_post_saga,
    student_req_get_saga,
    student_profile_get_saga,
    student_req_get_heading_saga,
    student_req_patch_password_saga
} from './root/rootStudent'
import { student_delete_req_saga, student_req_patch_saga } from './root/rootStudentReq';



// Student LOGIN
import {
    student_login_post_saga
} from './root/rootStudentLogin'
// faculty LOGIN
import {
    faculty_login_post_saga
} from './root/rootFacultyLogin'
// SubAdmin (APC)
import {
    apc_login_post_saga
} from './root/rootSubAdminLogin'
// Admin (INSTADMIN)
import {
    admin_login_post_saga
} from './root/rootAdminLogin'
// COE 
import {
    coe_login_post_saga
} from './root/rootCoeLogin'



// Faculty
import {
    faculty_req_get_byClass_saga,
    faculty_profile_get_saga,
    faculty_req_patch_chnage_status_saga,
} from './root/rootFaculty'



// APC (SubAdmin)
import {
    apc_create_cc_post_saga,
    apc_create_class_post_saga,
    apc_create_student_post_saga,
    apc_delete_cc_saga,
    apc_delete_student_saga,
    apc_get_all_student_saga,
    apc_get_cc_saga,
    apc_get_class_saga,
    apc_update_class_saga,
    apc_patch_assign_class_saga,
    apc_patch_cc_saga,
    apc_unassign_class_saga,
    apc_upload_cc_csv_post_saga,
    apc_upload_student_csv_post_saga,
    apc_get_profile_saga,
    apc_req_get_by_school_saga,
    apc_req_patch_chnage_status_saga,
    apc_delete_class_saga,
    apc_patch_student_saga,
    apc_req_patch_password_saga,
} from './root/rootSubAdmin'


// Admin (Inst-Admin)
import {
    instadmin_getApc_saga,
    instadmin_postApc_saga,
    instadmin_profile_get_saga,
    instadmin_selection_activity_get_saga,
    instadmin_selection_activity_patch_saga,
    instadmin_deAssign_activity_patch_saga,
    instadmin_patchApc_saga,
    instadmin_deleteApc_saga,
    instadmin_get_activity_saga,
    instadmin_create_activity_post_saga,
    instadmin_req_patch_password_saga,
    instadmin_activity_delete_saga,
    instadmin_getClass_saga,
    instadmin_postClass_saga,
    instadmin_deleteClass_saga,
    instadmin_patchClass_saga
} from './root/rootAdmin'

// COE
import {
    coe_create_dean_post_saga,
    coe_create_heading_post_saga,
    coe_create_school_post_saga,
    coe_delete_dean_saga,
    coe_delete_school_saga,
    coe_getDean_saga,
    coe_getSchool_saga, coe_get_Heading_saga, coe_get_profile_saga, coe_patch_dean_saga, coe_patch_school_saga, coe_req_patch_password_saga
} from './root/rootCoe';

export function* rootSaga() {
    yield all([
        // Student
        student_req_post_saga(),
        student_req_get_saga(),
        student_profile_get_saga(),
        student_req_get_heading_saga(),
        student_delete_req_saga(),
        student_req_patch_saga(),
        student_req_patch_password_saga(),


        // Faculty
        faculty_req_get_byClass_saga(),
        faculty_profile_get_saga(),
        faculty_req_patch_chnage_status_saga(),
        // Student Login
        student_login_post_saga(),
        // faculty Login
        faculty_login_post_saga(),
        // SubAdmin login (APC)
        apc_login_post_saga(),
        // INSTADMIN (Admin LOgin)
        admin_login_post_saga(),
        // COE Login
        coe_login_post_saga(),

        // APC (Subadmin)
        apc_req_patch_chnage_status_saga(),
        apc_req_get_by_school_saga(),
        apc_get_profile_saga(),
        apc_create_class_post_saga(),
        apc_create_cc_post_saga(),
        apc_create_student_post_saga(),
        apc_get_class_saga(),
        apc_delete_class_saga(),
        apc_get_cc_saga(),
        apc_update_class_saga(),
        apc_patch_cc_saga(),
        apc_patch_assign_class_saga(),
        apc_get_all_student_saga(),
        apc_upload_cc_csv_post_saga(),
        apc_upload_student_csv_post_saga(),
        apc_delete_cc_saga(),
        apc_delete_student_saga(),
        apc_unassign_class_saga(),
        apc_patch_student_saga(),
        apc_req_patch_password_saga(),


        // Admin (Inst-admin)
        instadmin_getApc_saga(),
        instadmin_postApc_saga(),
        instadmin_profile_get_saga(),
        instadmin_selection_activity_get_saga(),
        instadmin_selection_activity_patch_saga(),
        instadmin_deAssign_activity_patch_saga(),
        instadmin_patchApc_saga(),
        instadmin_deleteApc_saga(),
        //Activity create -manage
        instadmin_get_activity_saga(),
        instadmin_create_activity_post_saga(),
        //change pass
        instadmin_req_patch_password_saga(),
        instadmin_activity_delete_saga(),


        instadmin_getClass_saga(),
        instadmin_postClass_saga(),
        instadmin_patchClass_saga(),
        instadmin_deleteClass_saga(),


        //coe

        //school -manage
        coe_getSchool_saga(),
        coe_create_school_post_saga(),
        coe_delete_school_saga(),
        coe_patch_school_saga(),
        //heading -manage
        coe_get_Heading_saga(),
        coe_create_heading_post_saga(),
        //Dean -manage
        coe_getDean_saga(),
        coe_create_dean_post_saga(),
        coe_delete_dean_saga(),
        coe_patch_dean_saga(),
        //profile
        coe_get_profile_saga(),
        //change pass
        coe_req_patch_password_saga(),
    ])
}


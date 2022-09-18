import {
    // POST Class
    REQ_FOR_POST_CREATE_CLASS_PROGRESS,
    REQ_FOR_POST_CREATE_CLASS_SUCCESS,
    REQ_FOR_POST_CREATE_CLASS_ERROR,
    REQ_FOR_POST_CREATE_CLASS_DUPLICATE,

    // GET Class
    REQ_FOR_GET_CLASS_PROGRESS,
    REQ_FOR_GET_CLASS_SUCCESS,
    REQ_FOR_GET_CLASS_ERROR,

    // Delete Class
    REQ_FOR_DELETE_CLASS_SUCCESS,
    REQ_FOR_DELETE_CLASS_PROGRESS,
    REQ_FOR_DELETE_CLASS_ERROR,

    REQ_FOR_POST_CREATE_CC_PROGRESS,
    REQ_FOR_POST_CREATE_CC_SUCCESS,
    REQ_FOR_POST_CREATE_CC_ERROR,
    REQ_FOR_POST_CREATE_CC_DUPLICATE,

    REQ_FOR_GET_CC_PROGRESS,
    REQ_FOR_GET_CC_SUCCESS,
    REQ_FOR_GET_CC_ERROR,

    REQ_FOR_PATCH_CC_PROGRESS,
    REQ_FOR_PATCH_CC_SUCCESS,
    REQ_FOR_PATCH_CC_ERROR,
    REQ_FOR_PATCH_CC_DUPLICATE,

    REQ_FOR_GET_ALL_STUDENT_ERROR,
    REQ_FOR_GET_ALL_STUDENT_SUCCESS,
    REQ_FOR_GET_ALL_STUDENT_PROGRESS,

    REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS,
    REQ_FOR_POST_UPLOAD_CC_CSV_SUCCESS,
    REQ_FOR_POST_UPLOAD_CC_CSV_ERROR,
    REQ_FOR_POST_UPLOAD_CC_CSV_DUPLICATE,

    REQ_FOR_DELETE_CC_PROGRESS,
    REQ_FOR_DELETE_CC_SUCCESS,
    REQ_FOR_DELETE_CC_ERROR,

    REQ_FOR_POST_UPLOAD_STUDENT_CSV_DUPLICATE,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_ERROR,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_SUCCESS,
    REQ_FOR_POST_UPLOAD_STUDENT_CSV_PROGRESS,

    REQ_FOR_POST_CREATE_STUDENT_DUPLICATE,
    REQ_FOR_POST_CREATE_STUDENT_ERROR,
    REQ_FOR_POST_CREATE_STUDENT_SUCCESS,
    REQ_FOR_POST_CREATE_STUDENT_PROGRESS,

    REQ_FOR_DELETE_STUDENT_SUCCESS,
    REQ_FOR_DELETE_STUDENT_ERROR,
    REQ_FOR_DELETE_STUDENT_PROGRESS,

    REQ_FOR_PATCH_ASSIGN_CLASS_DUPLICATE,
    REQ_FOR_PATCH_ASSIGN_CLASS_ERROR,
    REQ_FOR_PATCH_ASSIGN_CLASS_SUCCESS,
    REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS,

    REQ_FOR_UNASSIGN_CLASS_ERROR,
    REQ_FOR_UNASSIGN_CLASS_SUCCESS,
    REQ_FOR_UNASSIGN_CLASS_PROGRESS,

    REQ_FOR_GET_APC_PROFILE_PROGRESS,
    REQ_FOR_GET_APC_PROFILE_SUCCESS,
    REQ_FOR_GET_APC_PROFILE_ERROR,

    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS,
    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_SUCCESS,
    REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_ERROR,

    REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS,
    REQ_FOR_PATCH_APC_STATUS_CHANGE_SUCCESS,
    REQ_FOR_PATCH_APC_STATUS_CHANGE_ERROR,

    REQ_FOR_UPDATE_CLASS_PROGRESS,
    REQ_FOR_UPDATE_CLASS_SUCCESS,
    REQ_FOR_UPDATE_CLASS_ERROR,
    REQ_FOR_UPDATE_CLASS_DUPLICATE,

    REQ_FOR_PATCH_STUDENT_PROGRESS,
    REQ_FOR_PATCH_STUDENT_SUCCESS,
    REQ_FOR_PATCH_STUDENT_ERROR,
    REQ_FOR_PATCH_STUDENT_DUPLICATE,
    REQ_FOR_PATCH_APC_PASSWORD_PROGRESS,
    REQ_FOR_PATCH_APC_PASSWORD_SUCCESS,
    REQ_FOR_PATCH_APC_PASSWORD_ERROR,
    REQ_FOR_PATCH_APC_PASSWORD_DUPLICATE

} from '../../subAdmin/action/action'

const initialState = {


    // ----------------- MANAGE Class ---------------------

    apcClass: [],
    duplicateClass: [],

    // GET Class
    get_class_progress: false,
    get_class_error: null,

    // Post Class
    add_apc_create_class_progress: false,
    add_apc_create_class_error: null,
    add_apc_create_class_duplicate: [],

    // Patch Assign Class
    patch_apc_assign_class_progress: false,
    patch_apc_assign_class_error: null,
    patch_apc_assign_class_duplicate: [],

    // Patch Assign Class
    patch_apc_unassign_class_progress: false,
    patch_apc_unassign_class_error: null,

    // Patch (Update) Class
    update_class_progress: false,
    update_class_success: false,
    update_class_error: false,
    update_class_duplicate: false,

    // Delete Class
    delete_class_progress: false,
    delete_class_error: null,

    //---------- Status ------------

    // GET METHOD
    class_dataIsLoaded: false,
    // For POST METHOD
    add_apc_class_status: false, // for add class
    add_apc_class_status_duplicate: false, // for dupicate class when add class

    // For PATCH METHOD
    patch_apc_assign_class_status: false, // for update assign class
    patch_apc_assign_class_status_duplicate: false, // for dupicate class when Update assign class

    // For PATCH METHOD
    patch_apc_unassign_class_status: false, // for update assign class

    // DELETE Class
    delete_apc_class_status: false,

    // -------------------------------------------------------


    //------------------- MANAGE CC --------------------------//

    apcCC: [],

    // GET Class coordinator
    get_cc_progress: false,
    get_cc_error: null,

    // Post Class Coordinator
    add_apc_create_cc_progress: false,
    add_apc_create_cc_error: null,
    add_apc_create_cc_duplicate: [],

    // Patch Class Coordinator
    patch_apc_cc_progress: false,
    patch_apc_cc_error: null,
    patch_apc_cc_duplicate: [],

    //upload CSV

    upload_csv_apc_cc_progress: false,
    upload_csv_apc_cc_error: null,
    upload_csv_apc_cc_duplicate: [],

    //Delete CC
    delete_cc_progress: false,
    delete_cc_error: null,
    deleted_student_apc: 0,


    //---------------status--------------------------

    // GET METHOD
    cc_dataIsLoaded: false,

    // For POST METHOD
    add_apc_cc_status: false, // for add class Coordinator
    add_apc_cc_status_duplicate: false, // for dupicate CC when add class coordinator

    // For PATCH METHOD
    patch_apc_cc_status: false, // for update class coordinator
    patch_apc_cc_status_duplicate: false, // for dupicate class when Update class coordinator

    // For UPLOAD CSV METHOD
    upload_csv_apc_cc_status: false, // for upload CC coordinator CSV
    upload_csv_apc_cc_status_duplicate: false, // for dupicate CC when add class coordinator

    // DELETE CC
    delete_apc_cc_status: false,


    //---------------------manage student-----------------------//

    // GET CSV

    apcStudent: [],
    duplicateStudent: [],

    // GET Student
    get_all_student_progress: false,
    get_all_student_error: null,

    // Post Student
    add_apc_create_student_progress: false,
    add_apc_create_student_error: null,
    add_apc_create_student_duplicate: [],

    //upload CSV student
    upload_csv_apc_student_progress: false,
    upload_csv_apc_student_error: null,
    upload_csv_apc_student_duplicate: [],

    //Delete student
    delete_student_progress: false,
    delete_student_error: null,

    // Update student
    apc_update_student_progress: false,
    apc_update_student_success: false,
    apc_update_student_error: false,
    apc_update_student_duplicate: false,



    //---------------status--------------------------

    // GET METHOD
    all_student_dataIsLoaded: false,

    // For UPLOAD CSV METHOD
    upload_csv_apc_cc_status: false, // for upload student CSV
    upload_csv_apc_cc_status_duplicate: false, // for dupicate student when add student

    // For POST METHOD student
    add_apc_student_status: false, // for add class Coordinator
    add_apc_student_status_duplicate: false, // for dupicate CC when add class coordinator

    // DELETE Student
    delete_apc_student_status: false,

    // ----------------------------- STUDENT PROFILE ----------------------

    apcProfile: [],

    //GET
    get_apc_profile_progress: false,
    get_apc_profile_error: false,

    // --------- status -----------
    apc_profile_dataIsLoaded: false,


    // ----------------------  GET REQ BY SCHOOL -----------------
    apcActivityReqBySchool: [],

    // GET 
    get_req_activity_apc_by_school_progress: false,
    get_req_activity_apc_by_school_error: null,
    // PATCH
    patch_req_status_chnage_progress: false,
    patch_req_status_chnage_error: false,


    // Status

    // GET
    get_activity_by_school_apc_dataIsLoaded: false,
    // PATCH
    patch_req_status_chnage_success: false,

    // _-------------------------------------------------------------

    //------------------change password--------------------//

    //PATCH
    update_apc_change_password_progress: false,
    update_apc_change_password_error: null,
    update_apc_change_password_duplicate: null,

    //status

    // Patch
    update_apc_change_password_status_success: false,
}

const apcReducer = (state = initialState, action) => {
    switch (action.type) {

        // ------------- GET REQ BY School -----------------
        // GET SECTION

        case REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_PROGRESS: {
            return {
                ...state,
                get_req_activity_apc_by_school_progress: true,
                apcActivityReqBySchool: null,
                get_req_activity_apc_by_school_error: false,
                get_activity_by_school_apc_dataIsLoaded: false
            };
        }
        case REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_SUCCESS: {
            return {
                ...state,
                get_req_activity_apc_by_school_progress: false,
                apcActivityReqBySchool: action.data,
                get_req_activity_apc_by_school_error: false,
                get_activity_by_school_apc_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_ACTIVITY_BY_SCHOOL_APC_ERROR: {
            return {
                ...state,
                get_req_activity_apc_by_school_progress: false,
                apcActivityReqBySchool: null,
                get_req_activity_apc_by_school_error: action.data,

            };
        }

        // ------------- FACULTY CHANGE STATUS -----------------
        // PATCH SECTION

        case REQ_FOR_PATCH_APC_STATUS_CHANGE_PROGRESS: {
            return {
                ...state,
                patch_req_status_chnage_progress: true,
                patch_req_status_chnage_error: false,
                // status
                patch_req_status_chnage_success: false
            };
        }
        case REQ_FOR_PATCH_APC_STATUS_CHANGE_SUCCESS: {
            return {
                ...state,
                patch_req_status_chnage_progress: false,
                apcActivityReqBySchool: state.apcActivityReqBySchool.map((update) => {
                    if (update._id === action.data.payload._id) {
                        return {
                            ...update,
                            ...action.data.payload
                        };
                    } else {
                        return update
                    }
                }),
                patch_req_status_chnage_error: false,
                // status
                patch_req_status_chnage_success: true
            };
        }
        case REQ_FOR_PATCH_APC_STATUS_CHANGE_ERROR: {
            return {
                ...state,
                patch_req_status_chnage_progress: false,
                patch_req_status_chnage_error: true,
                // Status
                patch_req_status_chnage_success: false

            };
        }


        // ------------- STUDENT PROFILE ---------------------------

        // GET SECTION PROFILE

        case REQ_FOR_GET_APC_PROFILE_PROGRESS: {
            return {
                ...state,
                get_apc_profile_progress: true,
                get_apc_profile_error: false,
                apc_profile_dataIsLoaded: false,
            };
        }
        case REQ_FOR_GET_APC_PROFILE_SUCCESS: {
            return {
                ...state,
                get_apc_profile_progress: false,
                apcProfile: action.data,
                get_apc_profile_error: false,
                apc_profile_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_APC_PROFILE_ERROR: {
            return {
                ...state,
                get_apc_profile_progress: false,
                apcProfile: null,
                get_apc_profile_error: action.data,

            };
        }

        // -----------  GET ( Fetch Class)  ----------------

        // GET SECTION

        case REQ_FOR_GET_CLASS_PROGRESS: {
            return {
                ...state,
                get_class_progress: true,
                apcClass: null,
                get_class_error: false,
            };
        }
        case REQ_FOR_GET_CLASS_SUCCESS: {
            return {
                ...state,
                get_class_progress: false,
                apcClass: action.data,
                get_class_error: false,
                class_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_CLASS_ERROR: {
            return {
                ...state,
                get_class_progress: false,
                apcClass: null,
                get_class_error: action.data,

            };
        }


        // -----------  POST ( Add Class)  ----------------

        case REQ_FOR_POST_CREATE_CLASS_PROGRESS: {
            return {
                ...state,
                add_apc_create_class_progress: true,
                add_apc_create_class_error: false,
                add_apc_create_class_duplicate: [],
                // Status
                add_apc_class_status_duplicate: false,
                add_apc_class_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_CLASS_SUCCESS: {
            return {
                ...state,
                add_apc_create_class_progress: false,
                add_apc_create_class_error: null,
                apcClass: state.apcClass.concat(action.data),
                add_apc_create_class_duplicate: [],
                // Status
                add_apc_class_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_CLASS_ERROR: {
            return {
                ...state,
                add_apc_create_class_progress: false,
                add_apc_create_class_error: action.data,
                add_apc_create_class_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_CLASS_DUPLICATE: {
            return {
                ...state,
                add_apc_create_class_progress: false,
                add_apc_create_class_error: null,
                add_apc_create_class_duplicate: state.add_apc_create_class_duplicate.concat(action.data),
                // Status
                add_apc_class_status: false,
                add_apc_class_status_duplicate: true,
            };
        }

        //-----------PATCH Class (Update)----------------------//

        case REQ_FOR_UPDATE_CLASS_PROGRESS: {
            return {
                ...state,
                // Patch (Update) Class
                update_class_progress: true,
                update_class_success: false,
                update_class_error: false,
                update_class_duplicate: false,
                duplicateClass: [],
            };
        }
        case REQ_FOR_UPDATE_CLASS_SUCCESS: {
            return {
                ...state,
                update_class_progress: false,
                update_class_error: null,
                apcClass: state.apcClass.map((update) => {
                    // //console.log(action.data._id, "this is from reducer side")
                    if (update._id === action.data._id) {
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }
                }),
                duplicateClass: [],
                update_class_duplicate: false,
                update_class_success: true
            };
        }
        case REQ_FOR_UPDATE_CLASS_ERROR: {
            return {
                ...state,
                update_class_progress: false,
                update_class_success: false,
                update_class_error: true,
                update_class_duplicate: false,
                duplicateClass: [],
            };
        }
        case REQ_FOR_UPDATE_CLASS_DUPLICATE: {
            return {
                ...state,
                update_class_progress: false,
                update_class_success: false,
                duplicateClass: state.duplicateClass.concat(action.data),
                update_class_error: false,
                update_class_duplicate: true,
            };
        }




        // -----------  DELETE ( delete Class)  ----------------

        case REQ_FOR_DELETE_CLASS_PROGRESS: {
            return {
                ...state,
                delete_class_progress: true,
                delete_class_error: null,
                deleted_student_apc: 0,
                // Status
                delete_apc_class_status: false,
            };
        }

        case REQ_FOR_DELETE_CLASS_SUCCESS: {
            return {
                ...state,
                delete_class_progress: false,
                delete_class_error: null,
                deleted_student_apc: action.data.deletedStudents,
                apcClass: state.apcClass.filter((delete_data) => delete_data._id !== action.data.result._id),
                delete_apc_class_status: true
            };
        }

        case REQ_FOR_DELETE_CLASS_ERROR: {
            return {
                ...state,
                delete_apc_class_status: false,
                delete_class_progress: false,
                delete_class_error: action.data,
                deleted_student_apc: 0,
            };
        }

        //-----------PATCH assign Class ----------------------//

        case REQ_FOR_PATCH_ASSIGN_CLASS_PROGRESS: {
            return {
                ...state,
                patch_apc_assign_class_progress: true,
                patch_apc_assign_class_error: false,
                patch_apc_assign_class_duplicate: [],
                // Status
                patch_apc_assign_class_status_duplicate: false,
                patch_apc_assign_class_status: false,
            };
        }
        case REQ_FOR_PATCH_ASSIGN_CLASS_SUCCESS: {

            return {
                ...state,

                patch_apc_assign_class_progress: false,
                patch_apc_assign_class_error: null,
                apcCC: state.apcCC.map((update, ind) => {
                    // //console.log(action.data.class, "this is from reducer side")
                    if (update._id === action.data.facultyID) {
                        return {
                            ...state.apcCC[ind],
                            class: [...update.class.concat(action.data.class)]
                        };

                    }
                    else {
                        return update
                    }
                }),
                patch_apc_assign_class_duplicate: [],
                // Status
                patch_apc_assign_class_status: true,
            };
        }
        case REQ_FOR_PATCH_ASSIGN_CLASS_ERROR: {
            return {
                ...state,
                patch_apc_assign_class_progress: false,
                patch_apc_assign_class_error: true,
                patch_apc_assign_class_duplicate: []
            };
        }
        case REQ_FOR_PATCH_ASSIGN_CLASS_DUPLICATE: {
            return {
                ...state,
                patch_apc_assign_class_progress: false,
                patch_apc_assign_class_error: null,
                patch_apc_assign_class_duplicate: state.patch_apc_assign_class_duplicate.concat(action.data),
                // Status
                patch_apc_assign_class_status: false,
                patch_apc_assign_class_status_duplicate: true,
            };
        }


        //-----------PATCH unAssign Class----------------------//

        case REQ_FOR_UNASSIGN_CLASS_PROGRESS: {
            return {
                ...state,
                patch_apc_unassign_class_progress: true,
                patch_apc_unassign_class_error: false,
                // Status
                patch_apc_unassign_class_status: false,
            };
        }
        case REQ_FOR_UNASSIGN_CLASS_SUCCESS: {
            // //console.log(action.data.classID)
            return {
                ...state,

                patch_apc_unassign_class_progress: false,
                patch_apc_unassign_class_error: null,
                apcCC: state.apcCC.map((update, ind) => {
                    if (update._id === action.data.facultyID) {
                        return {
                            ...state.apcCC[ind],
                            class: [...update.class.filter(e => e._id !== action.data.classID)]
                        };

                    }
                    else {
                        return update
                    }
                }),
                // Status
                patch_apc_unassign_class_status: true,
            };
        }
        case REQ_FOR_UNASSIGN_CLASS_ERROR: {
            return {
                ...state,
                patch_apc_unassign_class_progress: false,
                patch_apc_unassign_class_error: action.data,

            };
        }







        //---------------------------case for Class Coordinator-----------------

        // GET SECTION

        case REQ_FOR_GET_CC_PROGRESS: {
            return {
                ...state,
                get_cc_progress: true,
                apcCC: null,
                get_cc_error: false,
            };
        }
        case REQ_FOR_GET_CC_SUCCESS: {
            return {
                ...state,
                get_cc_progress: false,
                apcCC: action.data,
                get_cc_error: false,
                cc_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_CC_ERROR: {
            return {
                ...state,
                get_cc_progress: false,
                apcCC: null,
                get_cc_error: action.data,

            };
        }


        //-------------(POST) Add class coordinator-----------------

        case REQ_FOR_POST_CREATE_CC_PROGRESS: {
            return {
                ...state,
                add_apc_create_cc_progress: true,
                add_apc_create_cc_error: false,
                add_apc_create_cc_duplicate: [],
                // Status
                add_apc_cc_status_duplicate: false,
                add_apc_cc_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_CC_SUCCESS: {
            return {
                ...state,
                add_apc_create_cc_progress: false,
                add_apc_create_cc_error: null,
                apcCC: state.apcCC.concat(action.data),
                add_apc_create_cc_duplicate: [],
                // Status
                add_apc_cc_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_CC_ERROR: {
            return {
                ...state,
                add_apc_create_cc_progress: false,
                add_apc_create_cc_error: action.data,
                add_apc_create_cc_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_CC_DUPLICATE: {
            return {
                ...state,
                add_apc_create_cc_progress: false,
                add_apc_create_cc_error: null,
                add_apc_create_cc_duplicate: state.add_apc_create_cc_duplicate.concat(action.data),
                // Status
                add_apc_cc_status: false,
                add_apc_cc_status_duplicate: true,
            };
        }


        //-----------PATCH Class Coordinator----------------------//

        case REQ_FOR_PATCH_CC_PROGRESS: {
            return {
                ...state,
                patch_apc_cc_progress: true,
                patch_apc_cc_error: false,
                patch_apc_cc_duplicate: [],
                // Status
                patch_apc_cc_status_duplicate: false,
                patch_apc_cc_status: false,
            };
        }
        case REQ_FOR_PATCH_CC_SUCCESS: {
            return {
                ...state,
                patch_apc_cc_progress: false,
                patch_apc_cc_error: null,
                apcCC: state.apcCC.map((update) => {
                    // //console.log(action.data._id, "this is from reducer side")
                    if (update._id === action.data._id) {
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }
                }),
                patch_apc_cc_duplicate: [],
                // Status
                patch_apc_cc_status: true,
            };
        }
        case REQ_FOR_PATCH_CC_ERROR: {
            return {
                ...state,
                patch_apc_cc_progress: false,
                patch_apc_cc_error: action.data,
                patch_apc_cc_duplicate: []
            };
        }
        case REQ_FOR_PATCH_CC_DUPLICATE: {
            return {
                ...state,
                patch_apc_cc_progress: false,
                patch_apc_cc_error: null,
                patch_apc_cc_duplicate: state.patch_apc_cc_duplicate.concat(action.data),
                // Status
                patch_apc_cc_status: false,
                patch_apc_cc_status_duplicate: true,
            };
        }



        //---------------------UPLOAD CSV CC-----------------//

        case REQ_FOR_POST_UPLOAD_CC_CSV_PROGRESS: {
            return {
                ...state,
                upload_csv_apc_cc_progress: true,
                upload_csv_apc_cc_error: false,
                upload_csv_apc_cc_duplicate: [],
                // Status
                upload_csv_apc_cc_status_duplicate: false,
                upload_csv_apc_cc_status: false,
            };
        }
        case REQ_FOR_POST_UPLOAD_CC_CSV_SUCCESS: {
            return {
                ...state,
                upload_csv_apc_cc_progress: false,
                upload_csv_apc_cc_error: null,
                apcCC: state.apcCC.concat(action.data.faculty),
                upload_csv_apc_cc_duplicate: [],
                // Status
                upload_csv_apc_cc_status: true,
            };
        }
        case REQ_FOR_POST_UPLOAD_CC_CSV_ERROR: {
            return {
                ...state,
                upload_csv_apc_cc_progress: false,
                upload_csv_apc_cc_error: action.data,
                upload_csv_apc_cc_duplicate: []
            };
        }
        case REQ_FOR_POST_UPLOAD_CC_CSV_DUPLICATE: {
            return {
                ...state,
                upload_csv_apc_cc_progress: false,
                upload_csv_apc_cc_error: null,
                upload_csv_apc_cc_duplicate: state.upload_csv_apc_cc_duplicate.concat(action.data.error),
                apcCC: state.apcCC.concat(action.data.faculty),
                // Status
                upload_csv_apc_cc_status: false,
                upload_csv_apc_cc_status_duplicate: true,
            };
        }


        // -----------  DELETE ( delete Class Coordinator)  ----------------

        case REQ_FOR_DELETE_CC_PROGRESS: {
            return {
                ...state,
                delete_cc_progress: true,
                delete_cc_error: null,
                // Status
                delete_apc_cc_status: false,
            };
        }

        case REQ_FOR_DELETE_CC_SUCCESS: {
            return {
                ...state,
                delete_cc_progress: false,
                delete_cc_error: null,
                apcCC: state.apcCC.filter((delete_data) => delete_data.username !== action.data.username),
                delete_apc_cc_status: true
            };
        }

        case REQ_FOR_DELETE_CC_ERROR: {
            return {
                ...state,
                delete_cc_progress: false,
                delete_cc_error: action.data,
            };
        }





        //-----------------------------------student section-----------------------------//

        // GET SECTION All STUDENT

        case REQ_FOR_GET_ALL_STUDENT_PROGRESS: {
            return {
                ...state,
                get_all_student_progress: true,
                apcStudent: null,
                get_all_student_error: false,
            };
        }
        case REQ_FOR_GET_ALL_STUDENT_SUCCESS: {
            return {
                ...state,
                get_all_student_progress: false,
                apcStudent: action.data,
                get_all_student_error: false,
                all_student_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_ALL_STUDENT_ERROR: {
            return {
                ...state,
                get_all_student_progress: false,
                apcStudent: null,
                get_all_student_error: action.data,

            };
        }


        //---------------------UPLOAD CSV STUDENT-----------------//

        case REQ_FOR_POST_UPLOAD_STUDENT_CSV_PROGRESS: {
            return {
                ...state,
                upload_csv_apc_student_progress: true,
                upload_csv_apc_student_error: false,
                upload_csv_apc_student_duplicate: [],
                // Status
                upload_csv_apc_student_status_duplicate: false,
                upload_csv_apc_student_status: false,
            };
        }
        case REQ_FOR_POST_UPLOAD_STUDENT_CSV_SUCCESS: {
            return {
                ...state,
                upload_csv_apc_student_progress: false,
                upload_csv_apc_student_error: null,
                apcStudent: state.apcStudent.concat(action.data.student),
                upload_csv_apc_student_duplicate: [],
                // Status
                upload_csv_apc_student_status: true,
            };
        }
        case REQ_FOR_POST_UPLOAD_STUDENT_CSV_ERROR: {
            return {
                ...state,
                upload_csv_apc_student_progress: false,
                upload_csv_apc_student_error: action.data,
                upload_csv_apc_student_duplicate: []
            };
        }
        case REQ_FOR_POST_UPLOAD_STUDENT_CSV_DUPLICATE: {
            return {
                ...state,
                upload_csv_apc_student_progress: false,
                upload_csv_apc_student_error: null,
                upload_csv_apc_student_duplicate: state.upload_csv_apc_student_duplicate.concat(action.data.error),
                apcStudent: state.apcStudent.concat(action.data.student),
                // Status
                upload_csv_apc_student_status: false,
                upload_csv_apc_student_status_duplicate: true,
            };
        }


        // -----------  POST ( Add Class)  ----------------

        case REQ_FOR_POST_CREATE_STUDENT_PROGRESS: {
            return {
                ...state,
                add_apc_create_student_progress: true,
                add_apc_create_student_error: false,
                add_apc_create_student_duplicate: [],
                // Status
                add_apc_student_status_duplicate: false,
                add_apc_student_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_STUDENT_SUCCESS: {
            return {
                ...state,
                add_apc_create_student_progress: false,
                add_apc_create_student_error: null,
                apcStudent: state.apcStudent.concat(action.data),
                add_apc_create_student_duplicate: [],
                // Status
                add_apc_student_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_STUDENT_ERROR: {
            return {
                ...state,
                add_apc_create_student_progress: false,
                add_apc_create_student_error: action.data,
                add_apc_create_student_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_STUDENT_DUPLICATE: {
            return {
                ...state,
                add_apc_create_student_progress: false,
                add_apc_create_student_error: null,
                add_apc_create_student_duplicate: state.add_apc_create_student_duplicate.concat(action.data),
                // Status
                add_apc_student_status: false,
                add_apc_student_status_duplicate: true,
            };
        }

        // -----------  DELETE ( delete Student)  ----------------

        case REQ_FOR_DELETE_STUDENT_PROGRESS: {
            return {
                ...state,
                delete_student_progress: true,
                delete_student_error: null,
                // Status
                delete_apc_student_status: false,
            };
        }

        case REQ_FOR_DELETE_STUDENT_SUCCESS: {
            return {
                ...state,
                delete_student_progress: false,
                delete_student_error: null,
                apcStudent: state.apcStudent.filter((delete_data) => delete_data.enrollmentNo !== action.data),
                delete_apc_student_status: true
            };
        }

        case REQ_FOR_DELETE_STUDENT_ERROR: {
            return {
                ...state,
                delete_student_progress: false,
                delete_student_error: action.data,
            };
        }


        // Update Student


        //-----------PATCH Class Coordinator----------------------//

        case REQ_FOR_PATCH_STUDENT_PROGRESS: {
            return {
                ...state,
                apc_update_student_progress: true,
                apc_update_student_success: false,
                apc_update_student_error: false,
                apc_update_student_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_STUDENT_SUCCESS: {
            return {
                ...state,
                apc_update_student_progress: false,
                apc_update_student_error: null,
                apcStudent: state.apcStudent.map((update) => {
                    // //console.log(action.data._id, "this is from reducer side")
                    if (update._id === action.data._id) {
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }
                }),
                duplicateStudent: null,
                // Status
                apc_update_student_success: true,
            };
        }
        case REQ_FOR_PATCH_STUDENT_ERROR: {
            return {
                ...state,
                apc_update_student_progress: false,
                apc_update_student_error: action.data,
                duplicateStudent: []
            };
        }
        case REQ_FOR_PATCH_STUDENT_DUPLICATE: {
            return {
                ...state,
                apc_update_student_progress: false,
                apc_update_student_error: null,
                duplicateStudent: state.duplicateStudent.concat(action.data),
                // Status
                apc_update_student_success: false,
                apc_update_student_duplicate: true,
            };
        }





        //------------------apc change password----------------------//

        // PATCH

        case REQ_FOR_PATCH_APC_PASSWORD_PROGRESS: {
            return {
                ...state,
                update_apc_change_password_progress: true,
                update_apc_change_password_error: false,
                update_apc_change_password_status_success: false,
                update_apc_change_password_duplicate: false
            };
        }
        case REQ_FOR_PATCH_APC_PASSWORD_SUCCESS: {
            return {
                ...state,
                update_apc_change_password_progress: false,
                update_apc_change_password_error: null,
                update_apc_change_password_status_success: true,
                update_apc_change_password_duplicate: false
            };
        }
        case REQ_FOR_PATCH_APC_PASSWORD_ERROR: {
            return {
                ...state,
                update_apc_change_password_progress: false,
                update_apc_change_password_error: action.data,
                update_apc_change_password_status_success: false,
                update_apc_change_password_duplicate: false
            };
        }
        case REQ_FOR_PATCH_APC_PASSWORD_DUPLICATE: {
            return {
                ...state,
                update_apc_change_password_progress: false,
                update_apc_change_password_error: false,
                update_apc_change_password_status_success: false,
                update_apc_change_password_duplicate: true
            };
        }







        default:
            return state
    }
}

export default apcReducer
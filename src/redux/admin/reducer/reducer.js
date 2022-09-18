import {
    // GET APC
    REQ_FOR_GET_APC_PROGRESS,
    REQ_FOR_GET_APC_SUCCESS,
    REQ_FOR_GET_APC_ERROR,

    // POST APC
    REQ_FOR_POST_APC_PROGRESS,
    REQ_FOR_POST_APC_SUCCESS,
    REQ_FOR_POST_APC_ERROR,
    REQ_FOR_POST_APC_DUPLICATE,
    REQ_FOR_DELETE_APC_ERROR,
    REQ_FOR_DELETE_APC_SUCCESS,
    REQ_FOR_DELETE_APC_PROGRESS,
    REQ_FOR_PATCH_APC_ERROR,
    REQ_FOR_PATCH_APC_SUCCESS,
    REQ_FOR_PATCH_APC_PROGRESS,
    REQ_FOR_PATCH_APC_DUPLICATE,
    REQ_FOR_GET_INSTADMIN_PROFILE_ERROR,
    REQ_FOR_GET_INSTADMIN_PROFILE_SUCCESS,
    REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS,

    // GET
    REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS,
    REQ_FOR_GET_HEADING_TO_SCHOOL_SUCCESS,
    REQ_FOR_GET_HEADING_TO_SCHOOL_ERROR,
    // PAtch --> Assign to School
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_SUCCESS,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_ERROR,
    REQ_FOR_PATCH_HEADING_TO_SCHOOL_DUPLICATE,
    // PATCH --> De Assign to School
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_SUCCESS,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_ERROR,
    REQ_FOR_PATCH_SCHOOL_TO_HEADING_DUPLICATE,
    REQ_FOR_GET_ACTIVITY_PROGRESS,
    REQ_FOR_GET_ACTIVITY_SUCCESS,
    REQ_FOR_GET_ACTIVITY_ERROR,
    REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS,
    REQ_FOR_POST_CREATE_ACTIVITY_SUCCESS,
    REQ_FOR_POST_CREATE_ACTIVITY_ERROR,
    REQ_FOR_POST_CREATE_ACTIVITY_DUPLICATE,
    REQ_FOR_PATCH_INSTADMIN_PASSWORD_PROGRESS,
    REQ_FOR_PATCH_INSTADMIN_PASSWORD_SUCCESS,
    REQ_FOR_PATCH_INSTADMIN_PASSWORD_ERROR,
    REQ_FOR_PATCH_INSTADMIN_PASSWORD_DUPLICATE,
    REQ_FOR_DELETE_HEADING_SUCCESS,
    REQ_FOR_DELETE_HEADING_PROGRESS,
    REQ_FOR_DELETE_HEADING_ERROR,
    REQ_FOR_GET_CLASS_PROGRESS,
    REQ_FOR_GET_CLASS_SUCCESS,
    REQ_FOR_GET_CLASS_ERROR,
    REQ_FOR_PATCH_CLASS_DUPLICATE,
    REQ_FOR_PATCH_CLASS_ERROR,
    REQ_FOR_PATCH_CLASS_SUCCESS,
    REQ_FOR_PATCH_CLASS_PROGRESS,
    REQ_FOR_DELETE_CLASS_ERROR,
    REQ_FOR_DELETE_CLASS_SUCCESS,
    REQ_FOR_DELETE_CLASS_PROGRESS,
    REQ_FOR_POST_CLASS_DUPLICATE,
    REQ_FOR_POST_CLASS_ERROR,
    REQ_FOR_POST_CLASS_SUCCESS,
    REQ_FOR_POST_CLASS_PROGRESS,
    REQ_FOR_PATCH_CLASS_CONST_PROGRESS,
    REQ_FOR_PATCH_CLASS_CONST_SUCCESS,
    REQ_FOR_PATCH_CLASS_CONST_ERROR,
    REQ_FOR_PATCH_CLASS_CONST_DUPLICATE,
    REQ_FOR_DELETE_CLASS_CONST_ERROR,
    REQ_FOR_DELETE_CLASS_CONST_SUCCESS,
    REQ_FOR_DELETE_CLASS_CONST_PROGRESS,
    REQ_FOR_POST_CLASS_CONST_DUPLICATE,
    REQ_FOR_POST_CLASS_CONST_ERROR,
    REQ_FOR_POST_CLASS_CONST_SUCCESS,
    REQ_FOR_POST_CLASS_CONST_PROGRESS,
    REQ_FOR_GET_CLASS_CONST_ERROR,
    REQ_FOR_GET_CLASS_CONST_SUCCESS,
    REQ_FOR_GET_CLASS_CONST_PROGRESS


} from '../action/action'

const initialState = {

    getApc_instadmin: [],

    // GET APC DATA (Manage)
    get_apc_instadmin_progress: false,
    get_apc_instadmin_error: null,

    // Post 
    add_apc_instadmin_progress: false,
    add_apc_instadmin_error: null,
    add_apc_instadmin_duplicate: null,

    // Patch
    update_apc_instadmin_progress: false,
    update_apc_instadmin_error: false,
    update_apc_instadmin_success: false,
    update_apc_instadmin_duplicate: false,

    // Delete
    delete_apc_instadmin_progress: false,
    delete_apc_instadmin_error: false,
    delete_apc_instadmin_success: false,

    //----------- Status-------------

    // GET APC DATA (Manage)
    getApc_dataIsLoaded: false,
    // Post APC DATA
    add_apc_status_success: false,
    add_apc_status_duplicate: false,
    // Patch APC DATA
    patch_apc_status_success: false,
    patch_apc_status_duplicate: false,
    // delete APC DATA
    delete_apc_status_success: false,
    delete_apc_status_duplicate: false,



    // ----------------------------- Admin PROFILE ----------------------

    adminProfile: [],

    //GET
    get_instadmin_profile_progress: false,
    get_instadmin_profile_error: false,

    // --------- status -----------
    instadmin_profile_dataIsLoaded: false,


    //  -------------------- Selection Activity -----------------------

    selectedActivity: [],


    // GET
    get_selection_activity_progress: false,
    get_selection_activity_success: false,
    get_selection_activity_error: false,

    // PATCH --> Assign to school
    patch_selected_activity_progress: false,
    patch_selected_activity_success: false,
    patch_selected_activity_duplication: false,
    patch_selected_activity_error: false,

    // PATCH --> DeAssign From School
    patch_deAssign_activity_progress: false,
    patch_deAssign_activity_success: false,
    patch_deAssign_activity_duplication: false,
    patch_deAssign_activity_error: false,


    selectedActivity_duplicate: [],


    //add request activity------------------------------------------- --

    //--------------Manage Activity-----------//

    instadminActivity: [],

    // GET heading DATA (Manage)

    get_activity_instadmin_progress: false,
    get_activity_instadmin_error: null,



    // Post create activity
    add_instadmin_create_activity_progress: false,
    add_instadmin_create_activity_error: null,
    add_instadmin_create_activity_duplicate: [],

    //---------------status-----------------//

    //GET 
    get_activity_dataIsLoaded: false,

    // For POST METHOD
    add_instadmin_activity_status: false, // for add activity
    add_instadmin_activity_status_duplicate: false, // for dupicate activity

    // DELETE ACTIVITY
    instadmin_delete_heading_progress: false,
    instadmin_delete_heading_succeess: false,
    instadmin_delete_heading_error: false,



    //------------------change password--------------------//

    //PATCH
    update_instadmin_password_progress: false,
    update_instadmin_password_error: null,
    update_instadmin_password_duplicate: null,
    update_instadmin_change_password_status_success: false,



    //-----------------------class--------------------------//


    getClass_instadmin: [],

    // GET Class DATA (Manage)
    get_class_instadmin_progress: false,
    get_class_instadmin_error: null,

    // Post 
    add_class_instadmin_progress: false,
    add_class_instadmin_error: null,
    add_class_instadmin_duplicate: null,

    // Patch
    update_class_instadmin_progress: false,
    update_class_instadmin_error: false,
    update_class_instadmin_success: false,
    update_class_instadmin_duplicate: false,

    // Delete
    delete_class_instadmin_progress: false,
    delete_class_instadmin_error: false,
    delete_class_instadmin_success: false,

    //----------- Status-------------

    // GET Class DATA (Manage)
    getClass_dataIsLoaded: false,
    // Post Class DATA
    add_class_status_success: false,
    add_class_status_duplicate: false,
    // Patch Class DATA
    patch_class_status_success: false,
    patch_class_status_duplicate: false,
    // delete Class DATA
    delete_class_status_success: false,
    delete_class_status_duplicate: false,



}

// For DeAssign Activity --> Delete from School
const removeItems = (array, itemToRemove) => {
    return array.filter(v => {
        return !itemToRemove.includes(v);
    });
}

const instAdminReducer = (state = initialState, action) => {
    switch (action.type) {

        // ------------------ Manage APC ------------------

        // GET APC DATA (Manage) SECTION

        case REQ_FOR_GET_APC_PROGRESS: {
            return {
                ...state,
                get_apc_instadmin_progress: true,
                getApc_instadmin: null,
                get_apc_instadmin_error: false,
            };
        }
        case REQ_FOR_GET_APC_SUCCESS: {
            return {
                ...state,
                get_apc_instadmin_progress: false,
                getApc_instadmin: action.data,
                get_apc_instadmin_error: false,
                getApc_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_APC_ERROR: {
            return {
                ...state,
                get_apc_instadmin_progress: false,
                getApc_instadmin: null,
                get_apc_instadmin_error: action.data,

            };
        }

        // POST APC DATA (Manage) SECTION

        case REQ_FOR_POST_APC_PROGRESS: {
            return {
                ...state,
                add_apc_instadmin_progress: true,
                add_apc_instadmin_error: false,
                // status
                add_apc_status_success: false,
                add_apc_status_duplicate: false
            };
        }
        case REQ_FOR_POST_APC_SUCCESS: {
            return {
                ...state,
                add_apc_instadmin_progress: false,
                add_apc_instadmin_error: null,
                getApc_instadmin: state.getApc_instadmin.concat(action.data),
                // Status
                add_apc_status_success: true,
            };
        }
        case REQ_FOR_POST_APC_ERROR: {
            return {
                ...state,
                add_apc_instadmin_progress: false,
                add_apc_instadmin_error: true,
            };
        }
        case REQ_FOR_POST_APC_DUPLICATE: {
            return {
                ...state,
                add_apc_instadmin_progress: false,
                add_apc_instadmin_error: null,
                add_apc_instadmin_duplicate: action.data,
                // Status
                add_apc_status_success: false,
                add_apc_status_duplicate: true,
            };
        }

        // -----------  DELETE ( delete APC)  ----------------

        case REQ_FOR_DELETE_APC_PROGRESS: {
            return {
                ...state,
                delete_apc_instadmin_progress: true,
                delete_apc_instadmin_error: false,
                delete_apc_instadmin_success: false,
            };
        }

        case REQ_FOR_DELETE_APC_SUCCESS: {
            return {
                ...state,
                delete_apc_instadmin_progress: false,
                delete_apc_instadmin_error: false,
                delete_apc_instadmin_success: true,
                getApc_instadmin: state.getApc_instadmin.filter((delete_data) => delete_data._id != action.data),
            };
        }

        case REQ_FOR_DELETE_APC_ERROR: {
            return {
                ...state,
                delete_apc_instadmin_progress: false,
                delete_apc_instadmin_error: true,
                delete_apc_instadmin_success: false,
            };
        }



        //-----------PATCH APC----------------------//

        case REQ_FOR_PATCH_APC_PROGRESS: {
            return {
                ...state,
                update_apc_instadmin_progress: true,
                update_apc_instadmin_error: false,
                update_apc_instadmin_success: false,
                update_apc_instadmin_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_APC_SUCCESS: {
            return {
                ...state,
                getApc_instadmin: state.getApc_instadmin.map((update) => {
                    if (update._id == action.data._id) {
                        //console.log(update)
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }

                }),
                update_apc_instadmin_progress: false,
                update_apc_instadmin_error: false,
                update_apc_instadmin_success: true,
                update_apc_instadmin_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_APC_ERROR: {
            return {
                ...state,
                update_apc_instadmin_progress: false,
                update_apc_instadmin_error: true,
                update_apc_instadmin_success: false,
                update_apc_instadmin_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_APC_DUPLICATE: {
            return {
                ...state,
                update_apc_instadmin_progress: false,
                update_apc_instadmin_error: false,
                update_apc_instadmin_success: false,
                update_apc_instadmin_duplicate: true,
            };
        }


        // ------------- Admin PROFILE ---------------------------

        // GET SECTION PROFILE

        case REQ_FOR_GET_INSTADMIN_PROFILE_PROGRESS: {
            return {
                ...state,
                get_instadmin_profile_progress: true,
                adminProfile: null,
                get_instadmin_profile_error: false,
            };
        }
        case REQ_FOR_GET_INSTADMIN_PROFILE_SUCCESS: {
            return {
                ...state,
                get_instadmin_profile_progress: false,
                adminProfile: action.data,
                get_instadmin_profile_error: false,
                instadmin_profile_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_INSTADMIN_PROFILE_ERROR: {
            return {
                ...state,
                get_instadmin_profile_progress: false,
                adminProfile: null,
                get_instadmin_profile_error: action.data,

            };
        }

        // ------------------ Selection Activity ------------------


        // GET SECTION Activity

        case REQ_FOR_GET_HEADING_TO_SCHOOL_PROGRESS: {
            return {
                ...state,
                get_selection_activity_progress: true,
                get_selection_activity_success: false,
                get_selection_activity_error: false,
            };
        }
        case REQ_FOR_GET_HEADING_TO_SCHOOL_SUCCESS: {
            return {
                ...state,
                get_selection_activity_progress: false,
                get_selection_activity_success: true,
                get_selection_activity_error: false,
                selectedActivity: action.data

            };
        }
        case REQ_FOR_GET_HEADING_TO_SCHOOL_ERROR: {
            return {
                ...state,
                get_selection_activity_progress: false,
                get_selection_activity_success: false,
                get_selection_activity_error: true,
                selectedActivity: null

            };
        }






        // _--------------------------------------------


        // PATCH --> Assign to School

        case REQ_FOR_PATCH_HEADING_TO_SCHOOL_PROGRESS: {
            return {
                ...state,
                patch_selected_activity_progress: true,
                patch_selected_activity_success: false,
                patch_selected_activity_duplication: false,
                patch_selected_activity_error: false,
            };
        }
        case REQ_FOR_PATCH_HEADING_TO_SCHOOL_SUCCESS: {
            return {
                ...state,
                selectedActivity: state.selectedActivity.concat(action.data),
                patch_selected_activity_progress: false,
                patch_selected_activity_success: true,
                patch_selected_activity_duplication: false,
                patch_selected_activity_error: false,
                selectedActivity_duplicate: null
            };
        }
        case REQ_FOR_PATCH_HEADING_TO_SCHOOL_DUPLICATE: {
            return {
                ...state,
                patch_selected_activity_progress: false,
                patch_selected_activity_success: false,
                patch_selected_activity_duplication: true,
                patch_selected_activity_error: false,
                selectedActivity_duplicate: action.data

            };
        }
        case REQ_FOR_PATCH_HEADING_TO_SCHOOL_ERROR: {
            return {
                ...state,
                patch_selected_activity_progress: false,
                patch_selected_activity_success: false,
                patch_selected_activity_duplication: false,
                patch_selected_activity_error: true,
                selectedActivity_duplicate: null

            };
        }

        // PATCH --> DeAssign to School

        case REQ_FOR_PATCH_SCHOOL_TO_HEADING_PROGRESS: {
            return {
                ...state,
                patch_deAssign_activity_progress: true,
                patch_deAssign_activity_success: false,
                patch_deAssign_activity_duplication: false,
                patch_deAssign_activity_error: false,
            };
        }
        case REQ_FOR_PATCH_SCHOOL_TO_HEADING_SUCCESS: {
            return {
                ...state,
                selectedActivity: removeItems(state.selectedActivity, action.data),
                patch_deAssign_activity_progress: false,
                patch_deAssign_activity_success: true,
                patch_deAssign_activity_duplication: false,
                patch_deAssign_activity_error: false,
                selectedActivity_duplicate: null
            };
        }
        case REQ_FOR_PATCH_SCHOOL_TO_HEADING_DUPLICATE: {
            return {
                ...state,
                patch_deAssign_activity_progress: false,
                patch_deAssign_activity_success: false,
                patch_deAssign_activity_duplication: true,
                patch_deAssign_activity_error: false,
                selectedActivity_duplicate: action.data

            };
        }
        case REQ_FOR_PATCH_SCHOOL_TO_HEADING_ERROR: {
            return {
                ...state,
                patch_deAssign_activity_progress: false,
                patch_deAssign_activity_success: false,
                patch_deAssign_activity_duplication: false,
                patch_deAssign_activity_error: true,
                selectedActivity_duplicate: null

            };
        }


        //----------------manage activity req--------------//

        // GET activity DATA (Manage) SECTION

        case REQ_FOR_GET_ACTIVITY_PROGRESS: {
            return {
                ...state,
                get_activity_instadmin_progress: true,
                instadminActivity: null,
                get_activity_instadmin_error: false,
                get_activity_dataIsLoaded: false
            };
        }
        case REQ_FOR_GET_ACTIVITY_SUCCESS: {

            return {
                ...state,
                get_activity_instadmin_progress: false,
                instadminActivity: action.data,
                get_activity_instadmin_error: false,
                get_activity_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_ACTIVITY_ERROR: {
            return {
                ...state,
                get_activity_instadmin_progress: false,
                instadminActivity: null,
                get_activity_instadmin_error: action.data,
                get_activity_dataIsLoaded: false

            };
        }


        // -----------  POST ( Add activity req)  ----------------//

        case REQ_FOR_POST_CREATE_ACTIVITY_PROGRESS: {
            return {
                ...state,
                add_instadmin_create_activity_progress: true,
                add_instadmin_create_activity_error: null,
                add_instadmin_create_activity_duplicate: [],
                // Status
                add_instadmin_activity_status_duplicate: false,
                add_instadmin_activity_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_ACTIVITY_SUCCESS: {
            return {
                ...state,
                add_instadmin_create_activity_progress: false,
                add_instadmin_create_activity_error: null,
                instadminActivity: state.instadminActivity.concat(action.data),
                add_instadmin_create_activity_duplicate: [],
                // Status
                add_instadmin_activity_status: true,

            };
        }
        case REQ_FOR_POST_CREATE_ACTIVITY_ERROR: {
            return {
                ...state,
                add_instadmin_create_activity_progress: false,
                add_instadmin_create_activity_error: true,
                add_instadmin_create_activity_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_ACTIVITY_DUPLICATE: {
            return {
                ...state,
                add_instadmin_create_activity_progress: false,
                add_instadmin_create_activity_error: null,
                add_instadmin_create_activity_duplicate: state.add_instadmin_create_activity_duplicate.concat(action.data),
                // Status   
                add_instadmin_activity_status: false,
                add_instadmin_activity_status_duplicate: true,
            };
        }


        // DELETE HEADING


        case REQ_FOR_DELETE_HEADING_PROGRESS: {
            return {
                ...state,
                instadmin_delete_heading_progress: true,
                instadmin_delete_heading_succeess: false,
                instadmin_delete_heading_error: false,
            };
        }

        case REQ_FOR_DELETE_HEADING_SUCCESS: {
            return {
                ...state,
                instadmin_delete_heading_progress: false,
                instadmin_delete_heading_succeess: true,
                instadmin_delete_heading_error: false,
                instadminActivity: state.instadminActivity.filter((delete_data) => delete_data._id != action.data),
            };
        }

        case REQ_FOR_DELETE_HEADING_ERROR: {
            return {
                ...state,
                instadmin_delete_heading_progress: false,
                instadmin_delete_heading_succeess: false,
                instadmin_delete_heading_error: true,
            };
        }




        //------------------instadmin change password----------------------//

        // PATCH

        case REQ_FOR_PATCH_INSTADMIN_PASSWORD_PROGRESS: {
            return {
                ...state,
                update_instadmin_password_progress: true,
                update_instadmin_password_error: false,
                update_instadmin_password_duplicate: false,
                update_instadmin_change_password_status_success: false,
            };
        }
        case REQ_FOR_PATCH_INSTADMIN_PASSWORD_SUCCESS: {
            return {
                ...state,
                update_instadmin_password_progress: false,
                update_instadmin_password_error: false,
                update_instadmin_password_duplicate: false,
                update_instadmin_change_password_status_success: true,
            };
        }
        case REQ_FOR_PATCH_INSTADMIN_PASSWORD_ERROR: {
            return {
                ...state,
                update_instadmin_password_progress: false,
                update_instadmin_password_error: true,
                update_instadmin_password_duplicate: false,
                update_instadmin_change_password_status_success: false,
            };
        }
        case REQ_FOR_PATCH_INSTADMIN_PASSWORD_DUPLICATE: {
            return {
                ...state,
                update_instadmin_password_progress: false,
                update_instadmin_password_error: false,
                update_instadmin_password_duplicate: true,
                update_instadmin_change_password_status_success: false,
            };
        }









        // ------------------ Manage CLASS ------------------

        // GET CLASS DATA (Manage) SECTION

        case REQ_FOR_GET_CLASS_CONST_PROGRESS: {
            return {
                ...state,
                get_class_instadmin_progress: true,
                getClass_instadmin: null,
                get_class_instadmin_error: false,
            };
        }
        case REQ_FOR_GET_CLASS_CONST_SUCCESS: {
            return {
                ...state,
                get_class_instadmin_progress: false,
                getClass_instadmin: action.data,
                get_class_instadmin_error: false,
                getClass_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_CLASS_CONST_ERROR: {
            return {
                ...state,
                get_class_instadmin_progress: false,
                getClass_instadmin: null,
                get_class_instadmin_error: action.data,

            };
        }

        // POST CLASS DATA (Manage) SECTION

        case REQ_FOR_POST_CLASS_CONST_PROGRESS: {
            return {
                ...state,
                add_class_instadmin_progress: true,
                add_class_instadmin_error: false,
                // status
                add_class_status_success: false,
                add_class_status_duplicate: false
            };
        }
        case REQ_FOR_POST_CLASS_CONST_SUCCESS: {
            return {
                ...state,
                add_class_instadmin_progress: false,
                add_class_instadmin_error: null,
                getClass_instadmin: state.getClass_instadmin.concat(action.data),
                // Status
                add_class_status_success: true,
            };
        }
        case REQ_FOR_POST_CLASS_CONST_ERROR: {
            return {
                ...state,
                add_class_instadmin_progress: false,
                add_class_instadmin_error: true,
            };
        }
        case REQ_FOR_POST_CLASS_CONST_DUPLICATE: {
            return {
                ...state,
                add_class_instadmin_progress: false,
                add_class_instadmin_error: null,
                add_class_instadmin_duplicate: true,
                // Status
                add_class_status_success: false,
                add_class_status_duplicate: true,
            };
        }

        // -----------  DELETE ( delete CLASS)  ----------------

        case REQ_FOR_DELETE_CLASS_CONST_PROGRESS: {
            return {
                ...state,
                delete_class_instadmin_progress: true,
                delete_class_instadmin_error: false,
                delete_class_instadmin_success: false,
            };
        }

        case REQ_FOR_DELETE_CLASS_CONST_SUCCESS: {
            return {
                ...state,
                delete_class_instadmin_progress: false,
                delete_class_instadmin_error: false,
                delete_class_instadmin_success: true,
                getClass_instadmin: state.getClass_instadmin.filter((delete_data) => delete_data.name != action.data),
            };
        }

        case REQ_FOR_DELETE_CLASS_CONST_ERROR: {
            return {
                ...state,
                delete_class_instadmin_progress: false,
                delete_class_instadmin_error: true,
                delete_class_instadmin_success: false,
            };
        }



        //-----------PATCH CLASS----------------------//

        case REQ_FOR_PATCH_CLASS_CONST_PROGRESS: {
            return {
                ...state,
                update_class_instadmin_progress: true,
                update_class_instadmin_error: false,
                update_class_instadmin_success: false,
                update_class_instadmin_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_CLASS_CONST_SUCCESS: {
            return {
                ...state,
                getClass_instadmin: state.getClass_instadmin.map((update) => {
                    if (update._id == action.data._id) {
                        //console.log(update)
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }

                }),
                update_class_instadmin_progress: false,
                update_class_instadmin_error: false,
                update_class_instadmin_success: true,
                update_class_instadmin_duplicate: false,
            };
        }
        case REQ_FOR_PATCH_CLASS_CONST_ERROR: {
            return {
                ...state,
                update_class_instadmin_progress: false,
                update_class_instadmin_error: false,
                update_class_instadmin_success: false,
                update_class_instadmin_duplicate: true,
            };
        }
        case REQ_FOR_PATCH_CLASS_CONST_DUPLICATE: {
            return {
                ...state,
                update_class_instadmin_progress: false,
                update_class_instadmin_error: false,
                update_class_instadmin_success: false,
                update_class_instadmin_duplicate: true,
            };
        }


        default:
            return state
    }
}

export default instAdminReducer
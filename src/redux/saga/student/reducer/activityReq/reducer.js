import {
    // POST 
    REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_POST_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_POST_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_POST_STUDENT_ACTIVITY_DUPLICATE,
    //GET
    REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_GET_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_GET_STUDENT_ACTIVITY_ERROR,

    // --------- STUDENT PROFILE ------------
    // GET
    REQ_FOR_GET_STUDENT_PROFILE_PROGRESS,
    REQ_FOR_GET_STUDENT_PROFILE_SUCCESS,
    REQ_FOR_GET_STUDENT_PROFILE_ERROR,
    REQ_FOR_GET_HEADING_PROGRESS,
    REQ_FOR_GET_HEADING_SUCCESS,
    REQ_FOR_GET_HEADING_ERROR,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS,
    // PATCH
    REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_SUCCESS,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_ERROR,
    REQ_FOR_PATCH_STUDENT_ACTIVITY_DUPLICATE,
    REQ_FOR_PATCH_STUDENT_PASSWORD_ERROR,
    REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS,
    REQ_FOR_PATCH_STUDENT_PASSWORD_SUCCESS,

} from '../../action/action'

const initialState = {

    // ---------------------- STUDENT ACTIVITY REQ -----------------
    studentActivityRequest: [],

    // GET 
    get_student_req_activity_progress: false,
    get_student_req_activity_error: null,


    // Post 
    add_student_req_activity_progress: false,
    add_student_req_activity_error: null,
    add_student_req_activity_duplicate: null,

    // Delete 
    delete_req_progress: false,
    delete_req_error: null,

    //PATCH
    update_student_req_activity_progress: false,
    update_student_req_activity_error: null,
    update_student_req_activity_duplicate: null,



    // Status

    // GET
    dataIsLoaded: false,
    // Post
    add_student_activity_status_success: false,
    add_student_activity_status_duplicate: false,

    // DELETE Class
    delete_req_status: false,

    // Patch
    update_student_activity_status_success: false,
    update_student_activity_status_duplicate: false,

    // _--------------------------------------------------------------
    // ----------------------------- STUDENT PROFILE ----------------------

    studentProfile: [],

    //GET
    get_student_profile_progress: false,
    get_student_profile_error: false,

    // --------- status -----------
    student_profile_dataIsLoaded: false,


    //-------------------heading---------------------------------//

    heading: [],

    // GET heading DATA (Manage)

    get_heading_progress: false,
    get_heading_error: null,

    get_heading_dataIsLoaded: false,



    //------------------change password--------------------//

    //PATCH
    update_student_password_progress: false,
    update_student_password_error: null,
    update_student_password_duplicate: null,

    //status

    // Patch
    update_student_change_password_status_success: false,


}
const studentReqReducer = (state = initialState, action) => {

    switch (action.type) {
        // GET SECTION

        case REQ_FOR_GET_STUDENT_ACTIVITY_PROGRESS: {
            return {
                ...state,
                get_student_req_activity_progress: true,
                studentActivityRequest: null,
                get_student_req_activity_error: false,
            };
        }
        case REQ_FOR_GET_STUDENT_ACTIVITY_SUCCESS: {
            return {
                ...state,
                get_student_req_activity_progress: false,
                studentActivityRequest: action.data,
                get_student_req_activity_error: false,
                dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_STUDENT_ACTIVITY_ERROR: {
            return {
                ...state,
                get_student_req_activity_progress: false,
                studentActivityRequest: null,
                get_student_req_activity_error: action.data,

            };
        }

        // GET Heading DATA (Manage) SECTION

        case REQ_FOR_GET_HEADING_PROGRESS: {
            return {
                ...state,
                get_heading_progress: true,
                heading: null,
                get_heading__error: false,
            };
        }
        case REQ_FOR_GET_HEADING_SUCCESS: {
            return {
                ...state,
                get_heading_progress: false,
                heading: action.data,
                get_heading_error: false,
                get_heading_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_HEADING_ERROR: {
            return {
                ...state,
                get_heading_progress: false,
                heading: null,
                get_heading_error: action.data,

            };
        }



        // POST

        case REQ_FOR_POST_STUDENT_ACTIVITY_PROGRESS: {
            return {
                ...state,
                add_student_req_activity_progress: true,
                add_student_req_activity_error: false,
            };
        }
        case REQ_FOR_POST_STUDENT_ACTIVITY_SUCCESS: {
            return {
                ...state,
                add_student_req_activity_progress: false,
                add_student_req_activity_error: null,
                studentActivityRequest: state.studentActivityRequest.concat(action.data),
                // Status
                add_student_activity_status_success: true,
            };
        }
        case REQ_FOR_POST_STUDENT_ACTIVITY_ERROR: {
            return {
                ...state,
                add_student_req_activity_progress: false,
                add_student_req_activity_error: action.data,
            };
        }
        case REQ_FOR_POST_STUDENT_ACTIVITY_DUPLICATE: {
            return {
                ...state,
                add_student_req_activity_progress: false,
                add_student_req_activity_error: null,
                add_student_req_activity_duplicate: action.data,
                // Status
                add_student_activity_status_success: false,
                add_student_activity_status_duplicate: true,
            };
        }


        // PATCH

        case REQ_FOR_PATCH_STUDENT_ACTIVITY_PROGRESS: {
            return {
                ...state,
                update_student_req_activity_progress: true,
                update_student_req_activity_error: false,
            };
        }
        case REQ_FOR_PATCH_STUDENT_ACTIVITY_SUCCESS: {
            return {
                ...state,
                update_student_req_activity_progress: false,
                update_student_req_activity_error: null, //TODO work update 
                // studentActivityRequest: state.studentActivityRequest.map((update_data) => {
                //     //console.log(action.data)
                //     if (update_data._id === action.data.json._id) {
                //         //console.log(update_data._id)
                //         return {
                //             ...update_data,
                //             ...action.data.json
                //         };
                //     }
                // }),
                // Status
                update_student_activity_status_success: true,
            };
        }
        case REQ_FOR_PATCH_STUDENT_ACTIVITY_ERROR: {
            return {
                ...state,
                update_student_req_activity_progress: false,
                update_student_req_activity_error: action.data,
            };
        }
        case REQ_FOR_PATCH_STUDENT_ACTIVITY_DUPLICATE: {
            return {
                ...state,
                update_student_req_activity_progress: false,
                update_student_req_activity_error: null,
                update_student_req_activity_duplicate: action.data,
                // Status
                update_student_activity_status_success: false,
                update_student_activity_status_duplicate: true,
            };
        }



        // -----------  DELETE ( delete Student Req)  ----------------

        case REQ_FOR_DELETE_STUDENT_ACTIVITY_PROGRESS: {
            return {
                ...state,
                delete_req_progress: true,
                delete_req_error: null,
                // Status
                delete_req_status: false,
            };
        }

        case REQ_FOR_DELETE_STUDENT_ACTIVITY_SUCCESS: {
            return {
                ...state,
                delete_req_progress: false,
                delete_req_error: null,
                studentActivityRequest: state.studentActivityRequest.filter((delete_data) => delete_data._id !== action.data),
                delete_req_status: true
            };
        }

        case REQ_FOR_DELETE_STUDENT_ACTIVITY_ERROR: {
            return {
                ...state,
                delete_req_progress: false,
                delete_req_error: action.data,
            };
        }

        // ------------- STUDENT PROFILE ---------------------------

        // GET SECTION PROFILE

        case REQ_FOR_GET_STUDENT_PROFILE_PROGRESS: {
            return {
                ...state,
                get_student_profile_progress: true,
                studentActivityRequest: null,
                get_student_profile_error: false,
            };
        }
        case REQ_FOR_GET_STUDENT_PROFILE_SUCCESS: {
            return {
                ...state,
                get_student_profile_progress: false,
                studentProfile: action.data,
                get_student_profile_error: false,
                student_profile_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_STUDENT_PROFILE_ERROR: {
            return {
                ...state,
                get_student_profile_progress: false,
                studentProfile: null,
                get_student_profile_error: action.data,

            };
        }




        //------------------student change password----------------------//

        // PATCH

        case REQ_FOR_PATCH_STUDENT_PASSWORD_PROGRESS: {
            return {
                ...state,
                update_student_change_password_progress: true,
                update_student_change_password_error: false,
            };
        }
        case REQ_FOR_PATCH_STUDENT_PASSWORD_SUCCESS: {
            return {
                ...state,
                update_student_change_password_progress: false,
                update_student_change_password_error: null,
                update_student_change_password_status_success: true,
            };
        }
        case REQ_FOR_PATCH_STUDENT_PASSWORD_ERROR: {
            return {
                ...state,
                update_student_change_password_progress: false,
                update_student_change_password_error: action.data,
            };
        }


        default:
            return state
    }
}

export default studentReqReducer
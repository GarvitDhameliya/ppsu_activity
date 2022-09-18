import {
    // GET REQ BY CLASS
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS,
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_SUCCESS,
    REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_ERROR,

    // --------- FACULTY PROFILE ------------
    // GET
    REQ_FOR_GET_FACULTY_PROFILE_PROGRESS,
    REQ_FOR_GET_FACULTY_PROFILE_SUCCESS,
    REQ_FOR_GET_FACULTY_PROFILE_ERROR,

    // Faculty chnage status
    // PATCH
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS,
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_SUCCESS,
    REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_ERROR
} from '../action/action'

const initialState = {

    // ----------------------  GET REQ BY CLASS -----------------
    faciltyActivityReqByClass: [],

    // GET 
    get_req_activity_faculty_ByClass_progress: false,
    get_req_activity_faculty_ByClass_error: null,
    // PATCH
    patch_req_status_chnage_progress: false,
    patch_req_status_chnage_error: false,


    // Status

    // GET
    activity_faculty_dataIsLoaded: false,
    // PATCH
    patch_req_status_chnage_success: false,

    // _--------------------------------------------------------------
    // ----------------------------- STUDENT PROFILE ----------------------

    facultyProfile: [],

    //GET
    get_faculty_profile_progress: false,
    get_faculty_profile_error: false,

    // --------- status -----------
    faculty_profile_dataIsLoaded: false,


}

const facultyReducer = (state = initialState, action) => {
    switch (action.type) {

        // ------------- GET REQ BY CLASS -----------------
        // GET SECTION

        case REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_PROGRESS: {
            return {
                ...state,
                get_req_activity_faculty_ByClass_progress: true,
                faciltyActivityReqByClass: null,
                get_req_activity_faculty_ByClass_error: false,
            };
        }
        case REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_SUCCESS: {
            return {
                ...state,
                get_req_activity_faculty_ByClass_progress: false,
                faciltyActivityReqByClass: action.data,
                get_req_activity_faculty_ByClass_error: false,
                activity_faculty_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_ACTIVITY_BYCLASS_FACULTY_ERROR: {
            return {
                ...state,
                get_req_activity_faculty_ByClass_progress: false,
                faciltyActivityReqByClass: null,
                get_req_activity_faculty_ByClass_error: action.data,

            };
        }


        // ------------- FACULTY CHANGE STATUS -----------------
        // PATCH SECTION

        case REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_PROGRESS: {
            return {
                ...state,
                patch_req_status_chnage_progress: true,
                patch_req_status_chnage_error: false,
                // status
                patch_req_status_chnage_success: false
            };
        }
        case REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_SUCCESS: {
            return {
                ...state,
                patch_req_status_chnage_progress: false,
                faciltyActivityReqByClass: state.faciltyActivityReqByClass.map((update) => {
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
        case REQ_FOR_PATCH_FACULTY_STATUS_CHANGE_ERROR: {
            return {
                ...state,
                patch_req_status_chnage_progress: false,
                patch_req_status_chnage_error: true,
                // Status
                patch_req_status_chnage_success: false

            };
        }

        // ------------- FACULTY PROFILE ---------------------------

        // GET SECTION PROFILE

        case REQ_FOR_GET_FACULTY_PROFILE_PROGRESS: {
            return {
                ...state,
                get_faculty_profile_progress: true,
                studentActivityRequest: null,
                get_faculty_profile_error: false,
            };
        }
        case REQ_FOR_GET_FACULTY_PROFILE_SUCCESS: {
            return {
                ...state,
                get_faculty_profile_progress: false,
                facultyProfile: action.data,
                get_faculty_profile_error: false,
                faculty_profile_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_FACULTY_PROFILE_ERROR: {
            return {
                ...state,
                get_faculty_profile_progress: false,
                facultyProfile: null,
                get_faculty_profile_error: action.data,

            };
        }


        default:
            return state
    }
}

export default facultyReducer
import {
    // GET School
    REQ_FOR_GET_SCHOOL_SUCCESS,
    REQ_FOR_GET_SCHOOL_ERROR,
    REQ_FOR_GET_SCHOOL_PROGRESS,
    REQ_FOR_POST_CREATE_HEADING_DUPLICATE,
    REQ_FOR_POST_CREATE_HEADING_ERROR,
    REQ_FOR_POST_CREATE_HEADING_SUCCESS,
    REQ_FOR_POST_CREATE_HEADING_PROGRESS,
    REQ_FOR_GET_HEADING_ERROR_COE,
    REQ_FOR_GET_HEADING_SUCCESS_COE,
    REQ_FOR_GET_HEADING_PROGRESS_COE,
    REQ_FOR_POST_CREATE_SCHOOL_DUPLICATE,
    REQ_FOR_POST_CREATE_SCHOOL_ERROR,
    REQ_FOR_POST_CREATE_SCHOOL_SUCCESS,
    REQ_FOR_POST_CREATE_SCHOOL_PROGRESS,
    REQ_FOR_DELETE_SCHOOL_PROGRESS,
    REQ_FOR_DELETE_SCHOOL_SUCCESS,
    REQ_FOR_DELETE_SCHOOL_ERROR,
    REQ_FOR_PATCH_SCHOOL_DUPLICATE,
    REQ_FOR_PATCH_SCHOOL_ERROR,
    REQ_FOR_PATCH_SCHOOL_SUCCESS,
    REQ_FOR_PATCH_SCHOOL_PROGRESS,
    REQ_FOR_GET_DEAN_PROGRESS,
    REQ_FOR_GET_DEAN_SUCCESS,
    REQ_FOR_POST_CREATE_DEAN_SUCCESS,
    REQ_FOR_POST_CREATE_DEAN_ERROR,
    REQ_FOR_POST_CREATE_DEAN_DUPLICATE,
    REQ_FOR_DELETE_DEAN_PROGRESS,
    REQ_FOR_DELETE_DEAN_SUCCESS,
    REQ_FOR_DELETE_DEAN_ERROR,
    REQ_FOR_PATCH_DEAN_PROGRESS,
    REQ_FOR_PATCH_DEAN_SUCCESS,
    REQ_FOR_PATCH_DEAN_ERROR,
    REQ_FOR_PATCH_DEAN_DUPLICATE,
    REQ_FOR_GET_DEAN_ERROR,
    REQ_FOR_POST_CREATE_DEAN_PROGRESS,
    REQ_FOR_GET_COE_PROFILE_PROGRESS,
    REQ_FOR_GET_COE_PROFILE_SUCCESS,
    REQ_FOR_GET_COE_PROFILE_ERROR,
    REQ_FOR_PATCH_COE_PASSWORD_PROGRESS,
    REQ_FOR_PATCH_COE_PASSWORD_SUCCESS,
    REQ_FOR_PATCH_COE_PASSWORD_ERROR,
    REQ_FOR_PATCH_COE_PASSWORD_DUPLICATE,



} from '../action/action'

const initialState = {

    coeSchool: [],

    // GET School DATA (Manage)
    get_school_coe_progress: false,
    get_school_coe_error: null,

    // Post create School
    add_coe_create_school_progress: false,
    add_coe_create_school_error: null,
    add_coe_create_school_duplicate: [],

    // Patch school
    patch_coe_school_progress: false,
    patch_coe_school_error: null,
    patch_coe_school_duplicate: [],


    //----------- Status-------------
    // For POST METHOD
    add_coe_school_status: false, // for add school
    add_coe_school_status_duplicate: false, // for duplicate school

    //Delete school
    delete_school_progress: false,
    delete_school_error: null,

    // GET School DATA (Manage)
    getSchool_dataIsLoaded: false,

    // DELETE School
    delete_coe_school_status: false,

    // For PATCH METHOD
    patch_coe_school_status: false, // for update school
    patch_coe_school_status_duplicate: false, // for dupicate school


    //--------------Manage Heading-----------//

    coeHeading: [],

    // GET heading DATA (Manage)

    get_heading_coe_progress: false,
    get_heading_coe_error: null,



    // Post create HEading
    add_coe_create_heading_progress: false,
    add_coe_create_heading_error: null,
    add_coe_create_heading_duplicate: [],

    //---------------status-----------------//

    //GET 
    get_heading_dataIsLoaded: false,

    // For POST METHOD
    add_coe_heading_status: false, // for add heading
    add_coe_heading_status_duplicate: false, // for dupicate heading


    //-----------------------manage Dean--------------------//

    coeDean: [],

    // GET School DATA (Manage)
    get_dean_coe_progress: false,
    get_dean_coe_error: null,

    // Post create School
    add_coe_create_dean_progress: false,
    add_coe_create_dean_error: null,
    add_coe_create_dean_duplicate: [],

    // Patch school
    patch_coe_dean_progress: false,
    patch_coe_dean_error: null,
    patch_coe_dean_duplicate: [],


    //----------- Status-------------
    // For POST METHOD
    add_coe_dean_status: false, // for add school
    add_coe_dean_status_duplicate: false, // for duplicate school

    //Delete school
    delete_dean_progress: false,
    delete_dean_error: null,

    // GET School DATA (Manage)
    getDean_dataIsLoaded: false,

    // DELETE School
    delete_coe_dean_status: false,

    // For PATCH METHOD
    patch_coe_dean_status: false, // for update school
    patch_coe_dean_status_duplicate: false, // for dupicate school


    //------------------change password--------------------//

    //PATCH
    update_coe_password_progress: false,
    update_coe_password_error: false,
    update_coe_password_duplicate: false,
    update_coe_change_password_status_success: false,


    // ----------------------------- COE PROFILE ----------------------

    coeProfile: [],

    //GET
    get_coe_profile_progress: false,
    get_coe_profile_error: false,

    // --------- status -----------
    coe_profile_dataIsLoaded: false,
}


const coeReducer = (state = initialState, action) => {
    // //console.log(action.data)
    switch (action.type) {

        //----------------manage heading--------------//

        // GET Heading DATA (Manage) SECTION

        case REQ_FOR_GET_HEADING_PROGRESS_COE: {
            return {
                ...state,
                get_heading_coe_progress: true,
                coeHeading: null,
                get_heading_coe_error: false,
                get_heading_dataIsLoaded: false
            };
        }
        case REQ_FOR_GET_HEADING_SUCCESS_COE: {
            return {
                ...state,
                get_heading_coe_progress: false,
                coeHeading: action.data,
                get_heading_coe_error: false,
                get_heading_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_HEADING_ERROR_COE: {
            return {
                ...state,
                get_heading_coe_progress: false,
                coeHeading: null,
                get_heading_coe_error: action.data,
                get_heading_dataIsLoaded: false

            };
        }

        // -----------  POST ( Add heading)  ----------------//

        case REQ_FOR_POST_CREATE_HEADING_PROGRESS: {
            return {
                ...state,
                add_coe_create_heading_progress: true,
                add_coe_create_heading_error: false,
                add_coe_create_heading_duplicate: [],
                // Status
                add_coe_heading_status_duplicate: false,
                add_coe_heading_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_HEADING_SUCCESS: {
            return {
                ...state,
                add_coe_create_heading_progress: false,
                add_coe_create_heading_error: null,
                coeHeading: state.coeHeading.concat(action.data),
                add_coe_create_heading_duplicate: [],
                // Status
                add_coe_heading_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_HEADING_ERROR: {
            return {
                ...state,
                add_coe_create_heading_progress: false,
                add_coe_create_heading_error: action.data,
                add_coe_create_heading_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_HEADING_DUPLICATE: {
            return {
                ...state,
                add_coe_create_heading_progress: false,
                add_coe_create_heading_error: null,
                add_coe_create_heading_duplicate: state.add_coe_create_heading_duplicate.concat(action.data),
                // Status
                add_coe_heading_status: false,
                add_coe_heading_status_duplicate: true,
            };
        }

        //-------------------------------------manage school-------------------------------------------//

        // GET SChool DATA (Manage) SECTION

        case REQ_FOR_GET_SCHOOL_PROGRESS: {
            return {
                ...state,
                get_school_coe_progress: true,
                coeSchool: null,
                get_school_coe_error: false,
            };
        }
        case REQ_FOR_GET_SCHOOL_SUCCESS: {
            return {
                ...state,
                get_school_coe_progress: false,
                coeSchool: action.data,
                get_school_coe_error: false,
                getSchool_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_SCHOOL_ERROR: {
            return {
                ...state,
                get_school_coe_progress: false,
                coeSchool: null,
                get_school_coe_error: action.data,

            };
        }


        // -----------  POST ( Add school)  ----------------//

        case REQ_FOR_POST_CREATE_SCHOOL_PROGRESS: {
            return {
                ...state,
                add_coe_create_school_progress: true,
                add_coe_create_school_error: false,
                add_coe_create_school_duplicate: [],
                // Status
                add_coe_school_status_duplicate: false,
                add_coe_school_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_SCHOOL_SUCCESS: {
            return {
                ...state,
                add_coe_create_school_progress: false,
                add_coe_create_school_error: null,
                coeSchool: state.coeSchool.result.concat(action.data),
                add_coe_create_school_duplicate: [],
                // Status
                add_coe_school_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_SCHOOL_ERROR: {
            return {
                ...state,
                add_coe_create_school_progress: false,
                add_coe_create_school_error: action.data,
                add_coe_create_school_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_SCHOOL_DUPLICATE: {
            return {
                ...state,
                add_coe_create_school_progress: false,
                add_coe_create_school_error: null,
                add_coe_create_school_duplicate: state.add_coe_create_school_duplicate.concat(action.data),
                // Status
                add_coe_school_status: false,
                add_coe_school_status_duplicate: true,
            };
        }


        // -----------  DELETE ( delete School)  ----------------

        case REQ_FOR_DELETE_SCHOOL_PROGRESS: {
            return {
                ...state,
                delete_school_progress: true,
                delete_school_error: null,
                // Status
                delete_coe_school_status: false,
            };
        }

        case REQ_FOR_DELETE_SCHOOL_SUCCESS: {
            return {
                ...state,
                delete_school_progress: false,
                delete_school_error: null,
                coeSchool: state.coeSchool.result.filter((delete_data) => delete_data._id !== action.data),
                delete_coe_school_status: true
            };
        }

        case REQ_FOR_DELETE_SCHOOL_ERROR: {
            return {
                ...state,
                delete_school_progress: false,
                delete_school_error: action.data,
            };
        }



        //-----------PATCH School----------------------//

        case REQ_FOR_PATCH_SCHOOL_PROGRESS: {
            return {
                ...state,
                patch_coe_school_progress: true,
                patch_coe_school_error: false,
                patch_coe_school_duplicate: [],
                // Status
                patch_coe_school_status_duplicate: false,
                patch_coe_school_status: false,
            };
        }
        case REQ_FOR_PATCH_SCHOOL_SUCCESS: {
            return {
                ...state,
                patch_coe_school_progress: false,
                patch_coe_school_error: null,
                coeSchool: {
                    ...state,
                    result: state.coeSchool.result.map((update) => {
                        if (update._id === action.data._id) {
                            return {
                                ...update,
                                ...action.data
                            }
                        }
                        else {
                            return update
                        }
                    })
                },
                patch_coe_school_duplicate: [],
                // Status
                patch_coe_school_status: true,
            };
        }
        case REQ_FOR_PATCH_SCHOOL_ERROR: {
            return {
                ...state,
                patch_coe_school_progress: false,
                patch_coe_school_error: action.data,
                patch_coe_school_duplicate: []
            };
        }
        case REQ_FOR_PATCH_SCHOOL_DUPLICATE: {
            return {
                ...state,
                patch_coe_school_progress: false,
                patch_coe_school_error: null,
                patch_coe_school_duplicate: state.patch_coe_school_duplicate.concat(action.data),
                // Status
                patch_coe_school_status: false,
                patch_coe_school_status_duplicate: true,
            };
        }


        //---------------------------manage Dean----------------------//

        // GET Dean DATA (Manage) SECTION

        case REQ_FOR_GET_DEAN_PROGRESS: {
            return {
                ...state,
                get_dean_coe_progress: true,
                coeDean: null,
                get_dean_coe_error: false,
            };
        }
        case REQ_FOR_GET_DEAN_SUCCESS: {
            return {
                ...state,
                get_dean_coe_progress: false,
                coeDean: action.data,
                get_dean_coe_error: false,
                getDean_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_DEAN_ERROR: {
            return {
                ...state,
                get_dean_coe_progress: false,
                coeDean: null,
                get_dean_coe_error: action.data,

            };
        }


        // -----------  POST ( Add Dean)  ----------------//

        case REQ_FOR_POST_CREATE_DEAN_PROGRESS: {
            return {
                ...state,
                add_coe_create_dean_progress: true,
                add_coe_create_dean_error: false,
                // Status
                add_coe_dean_status_duplicate: false,
                add_coe_dean_status: false,
            };
        }
        case REQ_FOR_POST_CREATE_DEAN_SUCCESS: {
            return {
                ...state,
                add_coe_create_dean_progress: false,
                add_coe_create_dean_error: null,
                coeSchool: state.coeSchool.result.map((data, ind) => {
                    // //console.log(action.data)
                    if (data._id == action.data.school) {
                        data.admin = action.data
                    }
                    return data
                }),
                add_coe_create_dean_duplicate: [],
                // Status
                add_coe_dean_status: true,
            };
        }
        case REQ_FOR_POST_CREATE_DEAN_ERROR: {
            return {
                ...state,
                add_coe_create_dean_progress: false,
                add_coe_create_dean_error: true,
                add_coe_create_dean_duplicate: []
            };
        }
        case REQ_FOR_POST_CREATE_DEAN_DUPLICATE: {
            return {
                ...state,
                add_coe_create_dean_progress: false,
                add_coe_create_dean_error: null,
                add_coe_create_dean_duplicate: state.add_coe_create_dean_duplicate.concat(action.data),
                // Status
                add_coe_dean_status: false,
                add_coe_dean_status_duplicate: true,
            };
        }


        // -----------  DELETE ( delete Dean)  ----------------

        case REQ_FOR_DELETE_DEAN_PROGRESS: {
            return {
                ...state,
                delete_dean_progress: true,
                delete_dean_error: false,
                // Status
                delete_coe_dean_status: false,
            };
        }

        case REQ_FOR_DELETE_DEAN_SUCCESS: {
            return {
                ...state,
                delete_dean_progress: false,
                delete_dean_error: false,
                // coeSchool: state.coeSchool?.result.map((data, ind) => {
                //     //console.log(action.data)
                //     // if (data._id == action.data.school) {
                //     //     data.admin = null
                //     // }
                //     // else {
                //     //     data.admin = ""
                //     // }
                //     return data
                // }),
                delete_coe_dean_status: true
            };
        }

        case REQ_FOR_DELETE_DEAN_ERROR: {
            return {
                ...state,
                delete_dean_progress: false,
                delete_dean_error: true,
            };
        }



        //-----------PATCH Dean----------------------//

        case REQ_FOR_PATCH_DEAN_PROGRESS: {
            return {
                ...state,
                patch_coe_dean_progress: true,
                patch_coe_dean_error: false,
                patch_coe_dean_duplicate: [],
                // Status
                patch_coe_dean_status_duplicate: false,
                patch_coe_dean_status: false,
            };
        }
        case REQ_FOR_PATCH_DEAN_SUCCESS: {
            return {
                ...state,
                patch_coe_dean_progress: false,
                patch_coe_dean_error: false,
                coeSchool: {
                    ...state,
                    result: state.coeSchool.result.map((update) => {
                        if (update?.admin.username === action.data.username) {
                            return {
                                ...update,
                                admin: {
                                    ...update,
                                    ...action.data
                                }
                            }
                        }
                        else {
                            return update
                        }
                    })
                },
                patch_coe_dean_duplicate: null,
                // Status
                patch_coe_dean_status: true,
            };
        }
        case REQ_FOR_PATCH_DEAN_ERROR: {
            return {
                ...state,
                patch_coe_dean_progress: false,
                patch_coe_dean_error: true,
                patch_coe_dean_duplicate: []
            };
        }
        case REQ_FOR_PATCH_DEAN_DUPLICATE: {
            return {
                ...state,
                patch_coe_dean_progress: false,
                patch_coe_dean_error: false,
                patch_coe_dean_duplicate: state.patch_coe_dean_duplicate.concat(action.data),
                // Status
                patch_coe_dean_status: false,
                patch_coe_dean_status_duplicate: true,
            };
        }





        //------------------coe change password----------------------//

        // PATCH

        case REQ_FOR_PATCH_COE_PASSWORD_PROGRESS: {
            return {
                ...state,
                update_coe_password_progress: true,
                update_coe_password_error: false,
                update_coe_password_duplicate: false,
                update_coe_change_password_status_success: false,
            };
        }
        case REQ_FOR_PATCH_COE_PASSWORD_SUCCESS: {
            return {
                ...state,
                update_coe_password_progress: false,
                update_coe_password_error: false,
                update_coe_password_duplicate: false,
                update_coe_change_password_status_success: true,
            };
        }
        case REQ_FOR_PATCH_COE_PASSWORD_ERROR: {
            return {
                ...state,
                update_coe_password_progress: false,
                update_coe_password_error: true,
                update_coe_password_duplicate: false,
                update_coe_change_password_status_success: false,
            };
        }
        case REQ_FOR_PATCH_COE_PASSWORD_DUPLICATE: {
            return {
                ...state,
                update_coe_password_progress: false,
                update_coe_password_error: false,
                update_coe_password_duplicate: true,
                update_coe_change_password_status_success: false,
            };
        }


        // ------------- COE PROFILE ---------------------------

        // GET SECTION PROFILE

        case REQ_FOR_GET_COE_PROFILE_PROGRESS: {
            return {
                ...state,
                get_coe_profile_progress: true,
                get_coe_profile_error: false,
                coe_profile_dataIsLoaded: false,
            };
        }
        case REQ_FOR_GET_COE_PROFILE_SUCCESS: {
            return {
                ...state,
                get_coe_profile_progress: false,
                coeProfile: action.data,
                get_coe_profile_error: false,
                coe_profile_dataIsLoaded: true,
            };
        }
        case REQ_FOR_GET_COE_PROFILE_ERROR: {
            return {
                ...state,
                get_coe_profile_progress: false,
                coeProfile: null,
                get_coe_profile_error: action.data,

            };
        }


        default:
            return state
    }
}

export default coeReducer
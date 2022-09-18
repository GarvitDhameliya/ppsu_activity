import {
    REQ_FOR_LOGIN_PROGRESS_APC,
    REQ_FOR_LOGIN_SUCCESS_APC,
    REQ_FOR_LOGIN_ERROR_APC,
    REQ_FOR_LOGIN_FAILED_APC
} from './action'

const initialState = {



    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false

}

const adminLogin = (state = initialState, action) => {
    switch (action.type) {

        // POST

        case REQ_FOR_LOGIN_PROGRESS_APC: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false,
                login_status_success: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS_APC: {
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // Status
                login_status_success: true,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_ERROR_APC: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                login_auth_failed: false,
            };
        }

        case REQ_FOR_LOGIN_FAILED_APC: {
            return {
                ...state,
                login_progress: false,
                login_auth_failed: true,
            };
        }

        default:
            return state
    }
}

export default adminLogin
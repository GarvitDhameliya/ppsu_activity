import {
    REQ_FOR_LOGIN_PROGRESS_COE,
    REQ_FOR_LOGIN_SUCCESS_COE,
    REQ_FOR_LOGIN_ERROR_COE,
    REQ_FOR_LOGIN_FAILED_COE
} from './action'

const initialState = {



    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false

}

const coeLogin = (state = initialState, action) => {
    switch (action.type) {

        // POST

        case REQ_FOR_LOGIN_PROGRESS_COE: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false,
                login_status_success: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS_COE: {
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // Status
                login_status_success: true,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_ERROR_COE: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                login_auth_failed: false,
            };
        }

        case REQ_FOR_LOGIN_FAILED_COE: {
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

export default coeLogin
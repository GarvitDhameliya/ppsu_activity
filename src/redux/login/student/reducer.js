import {
    REQ_FOR_LOGIN_PROGRESS,
    REQ_FOR_LOGIN_SUCCESS,
    REQ_FOR_LOGIN_ERROR,
    REQ_FOR_LOGIN_FAILED
} from './action'

const initialState = {

    // studentLogin: [],

    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false

}

const studentLogin = (state = initialState, action) => {
    switch (action.type) {

        // POST

        case REQ_FOR_LOGIN_PROGRESS: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS: {
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // studentLogin: state.studentLogin.concat(action.data),
                // Status
                login_status_success: true,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_ERROR: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                // studentLogin: action.data,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_FAILED: {
            return {
                ...state,
                login_progress: false,
                // studentLogin: action.data,
                login_auth_failed: true
            };
        }

        default:
            return state
    }
}

export default studentLogin
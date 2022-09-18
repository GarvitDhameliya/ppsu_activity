import {
    REQ_FOR_LOGIN_PROGRESS_FACULTY,
    REQ_FOR_LOGIN_SUCCESS_FACULTY,
    REQ_FOR_LOGIN_ERROR_FACULTY,
    REQ_FOR_LOGIN_FAILED_FACULTY
} from './action'

const initialState = {



    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false

}

const facultyLogin = (state = initialState, action) => {
    switch (action.type) {

        // POST

        case REQ_FOR_LOGIN_PROGRESS_FACULTY: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS_FACULTY: {
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // facultyLogin: state.facultyLogin.concat(action.data),
                // Status
                login_status_success: true,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_ERROR_FACULTY: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                // facultyLogin: action.data,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_FAILED_FACULTY: {
            return {
                ...state,
                login_progress: false,
                // facultyLogin: action.data,
                login_auth_failed: true
            };
        }

        default:
            return state
    }
}

export default facultyLogin
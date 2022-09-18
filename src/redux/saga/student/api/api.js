import axios from "axios";
import Cookies from "js-cookie";
import {
    base_url,
    // Student Section URL
    STUDENT_GET_REQ_URL,
    STUDENT_POST_REQ_URL,
    // STudent PRofile
    STUDENT_GET_PROFILE,
    STUDENT_GET_HEADING,
    STUDENT_DELETE_REQUEST,
    STUDENT_PATCH_REQ_URL,
    STUDENT_PATCH_PASSWORD_REQ_URL,
} from '../../constant'

// Student Section

// Student GET Activity Request
// In Data We fetch USer ID for each student Data = StudentID {_id}
export async function student_get_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + STUDENT_GET_REQ_URL + data.payload, header)
        .then((res) => {

            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {

            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}
// Student POST Activity Request
export async function student_post_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + STUDENT_POST_REQ_URL, data, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}


//GET HEADING 
export async function student_get_heading_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + STUDENT_GET_HEADING + data.payload, header)
        .then((res) => {
            //console.log(res)
            const data = res.data
            // //console.log(data)
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                // Cookies.remove('isAuth')
                // Cookies.remove('role')
                // Cookies.remove('connect.sid')
                // window.location = "/"
            }
        })
}


// --------------------- STUDENT PROFILE ---------------------------

export async function student_get_profile(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + STUDENT_GET_PROFILE, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {

            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}


// APC Delete Student Req
export async function student_delete_student_req(data) {
    // //console.log(data, "this is api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + STUDENT_DELETE_REQUEST + data, header)
        .then((res) => {
            // //console.log(res)
            const delete_data = data
            const status = res.status
            return {
                delete_data, status
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}



// Student PATCH Activity Request
export async function student_patch_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + STUDENT_PATCH_REQ_URL, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            return {
                update_data, status
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}



//----------------change passsword-----------------------//


export async function student_patch_password_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + STUDENT_PATCH_PASSWORD_REQ_URL, data, header)
        .then((res) => {
            //console.log(res)
            const update_data = data
            const status = res.status
            return {
                update_data, status
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}
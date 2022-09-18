// School (coe) GET

import axios from "axios"
import Cookies from "js-cookie"
import {
    base_url,
    COE_CREATE_DEAN,
    COE_CREATE_HEADING,
    COE_CREATE_SCHOOL,
    COE_DELETE_DEAN,
    COE_DELETE_SCHOOL,
    COE_GET_DEAN,
    COE_GET_HEADING_MANAGE,
    COE_GET_PROFILE,
    COE_GET_SCHOOL_MANAGE,
    COE_PATCH_DEAN,
    COE_PATCH_PASSWORD_REQ_URL,
    COE_PATCH_SCHOOL
} from "../../constant"

export async function coe_school_get_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + COE_GET_SCHOOL_MANAGE, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}


// COE Create School
export async function coe_post_create_school_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + COE_CREATE_SCHOOL, data, header)
        .then((res) => {
            // //console.log(res, "this is console res")
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
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// COE Delete school
export async function coe_delete_school_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + COE_DELETE_SCHOOL + data, header)
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



// --------------------- COE Update School ---------------------------

export async function coe_patch_school(data) {

    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + COE_PATCH_SCHOOL, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            return {
                status, update_data
            }
        }).catch((err) => {
            if (err.response.status === 301) {
                const status = err.response.status
                const update_data = "Duplication Err"
                return {
                    status, update_data
                }
            }
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}



//----------------------------------heading section--------------------------------------//


// COE Create Heading
export async function coe_post_create_heading_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + COE_CREATE_HEADING, data, header)
        .then((res) => {
            // //console.log(res, "this is console res")
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            // //console.log(err, 'Err')
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


//GET HEADING 
export async function coe_get_heading_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + COE_GET_HEADING_MANAGE, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            // //console.log(data)
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


//---------------------------------------manage Dean--------------------------------//


export async function coe_dean_get_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + COE_GET_DEAN, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            // //console.log(data)
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


// COE Create School
export async function coe_post_create_dean_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + COE_CREATE_DEAN, data, header)
        .then((res) => {
            // //console.log(res, "this is console res")
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
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// COE Delete Dean
export async function coe_delete_dean_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + COE_DELETE_DEAN + data, header)
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



// --------------------- COE Update Dean---------------------------

export async function coe_patch_dean(data) {

    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + COE_PATCH_DEAN, data, header)
        .then((res) => {
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    status, update_data
                }
            }
        }).catch((err) => {
            const data = "Duplication"
            const status = err.response.status
            if (err.response.status === 301) {
                return {
                    status, data
                }
            }
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}




//----------------change passsword-----------------------//


export async function coe_patch_password_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + COE_PATCH_PASSWORD_REQ_URL, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            return {
                update_data, status
            }
        }).catch((err) => {
            const data = "Duplication"
            const status = err.response.status
            if (err.response.status === 301) {
                return {
                    status, data
                }
            }
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}




// --------------------- COE PROFILE ---------------------------

export async function coe_get_profile(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + COE_GET_PROFILE, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
        })
}

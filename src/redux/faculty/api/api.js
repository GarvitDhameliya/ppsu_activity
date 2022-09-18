import axios from "axios";
import Cookies from "js-cookie";
import {
    // GET REQ BY CLASS
    base_url,
    FACULTY_GET_REQ_BY_CLASS,
    FACULTY_GET_PROFILE,
    FACULTY_PATCH_REQ_STATUS_CHNAGE
} from '../../constant'

// Fetch the all details of request by Class

export async function faculty_get_req_by_class(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + FACULTY_GET_REQ_BY_CLASS + data.payload, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/faculty"
            }
        })
}

// --------------------- FACULTY PROFILE ---------------------------

export async function faculty_get_profile(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + FACULTY_GET_PROFILE, header)
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
                window.location = "/faculty"
            }
        })
}



// --------------------- FACULTY STATUS CHNAGE ---------------------------

export async function faculty_patch_status_chnage(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + FACULTY_PATCH_REQ_STATUS_CHNAGE, data.payload, header)
        .then((res) => {
            const update_data = data
            const status = res.status
            return {
                status, update_data
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/faculty"
            }
        })
}
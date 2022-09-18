import axios from "axios";
import Cookies from "js-cookie";
import {
    base_url,
    APC_CREATE_CLASS,
    APC_GET_CLASS,
    APC_DELETE_CLASS,
    APC_CREATE_CC,
    APC_GET_CC,
    APC_UPDATE_CC,
    APC_GET_ALL_STUDENT,
    APC_UPLOAD_CSV_CC,
    APC_DELETE_CC,
    APC_UPLOAD_CSV_STUDENT,
    APC_CREATE_STUDENT,
    APC_DELETE_STUDENT,
    APC_PATCH_ASSIGN_CLASS,
    APC_UNASSIGN_CLASS,
    APC_PROFILE,
    APC_GET_REQ_BY_SCHOOL,
    APC_PATCH_REQ_STATUS_CHNAGE,
    APC_UPDATE_CLASS,
    APC_UPDATE_STUDENT,
    APC_PATCH_PASSWORD_REQ_URL
} from '../../constant'


// APC GET Class
// In Data We fetch USer ID for each SChool Id
export async function apc_get_class_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + APC_GET_CLASS + data.payload, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            // //console.log(err)
        })
}


// APC Create CLass
export async function apc_post_class_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + APC_CREATE_CLASS, data, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// APC Delete Class
export async function apc_delete_class_req(data) {
    // //console.log(data, "Delete Class APi")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + APC_DELETE_CLASS + data.id, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// APC Update Class
export async function apc_update_class_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_UPDATE_CLASS, data, header)
        .then((res) => {
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    update_data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            if (err.response.status === 301) {
                const status = err.response.status
                const update_data = err.response.data
                return {
                    update_data, status
                }
            }

        })
}




// APC Assign Class
export async function apc_patch_assign_class_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_PATCH_ASSIGN_CLASS, data, header)
        .then((res) => {
            //console.log(res, "this is console res")
            const facultyID = data.facultyID
            const update_data = res.data
            const status = res.status
            // //console.log(data, "this is from api side")
            if (status === 200) {
                return {
                    facultyID, update_data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// APC UnAssign Class
export async function apc_unassign_class_req(data) {

    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_UNASSIGN_CLASS, data, header)
        .then((res) => {
            // //console.log(res)
            const delete_data = data
            const status = res.status
            // //console.log(delete_data)
            if (status === 200) {
                return {
                    delete_data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// **************Api class coordinator*******************//



// APC GET Class Coordinator
// In Data We fetch USer ID for each SChool Id
export async function apc_get_cc_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + APC_GET_CC + data.payload, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
        })
}


// APC Create CLass Coordinator
export async function apc_post_cc_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + APC_CREATE_CC, data, header)
        .then((res) => {
            // //console.log(res, "this is console res")
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}



// APC Update CLass Coordinator
export async function apc_patch_cc_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_UPDATE_CC, data, header)
        .then((res) => {
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    update_data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// APC upload CSV CLass Coordinator
export async function apc_post_upload_cc_csv(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(base_url + APC_UPLOAD_CSV_CC, data, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// APC Delete Class coordinator
export async function apc_delete_cc_req(data) {
    const delete_data = {
        "school": data.school
    }
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + APC_DELETE_CC + data.username, delete_data, header)
        .then((res) => {
            // //console.log(res)
            const delete_data = data
            const status = res.status
            if (status === 200) {
                return {
                    delete_data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}











//----------------------------manage student------------------------------//


//GET CSV
//all Student

export async function apc_get_all_student_req(data) {
    // //console.log(data, "this is get data")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + APC_GET_ALL_STUDENT + data.payload, header)
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
                window.location = "/apc"
            }
        })
}



// APC upload CSV Student
export async function apc_post_upload_student_csv(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(base_url + APC_UPLOAD_CSV_STUDENT, data, header)
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
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}


// APC Create Student
export async function apc_post_student_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + APC_CREATE_STUDENT, data, header)
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
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// APC Update CLass Coordinator
export async function apc_patch_student_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_UPDATE_STUDENT, data, header)
        .then((res) => {
            //console.log(res)
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    update_data, status
                }
            }
        }).catch((err) => {
            //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// APC Delete Class
export async function apc_delete_student_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + APC_DELETE_STUDENT + data, header)
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
                window.location = "/apc"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}



// --------------------- APC PROFILE ---------------------------

export async function apc_get_profile(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + APC_PROFILE, header)
        .then((res) => {
            //console.log(res)
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



// Fetch the all details of request by School

export async function apc_get_req_by_school(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + APC_GET_REQ_BY_SCHOOL + data.payload, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status === 200) {
                return {
                    data, status
                }
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/faculty/"
            }
        })
}



// --------------------- APC STATUS CHNAGE ---------------------------

export async function apc_patch_status_chnage(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_PATCH_REQ_STATUS_CHNAGE, data.payload, header)
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
                window.location = "/faculty/"
            }
        })
}


//----------------change passsword-----------------------//

export async function apc_patch_password_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + APC_PATCH_PASSWORD_REQ_URL, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            return {
                update_data, status
            }
        }).catch((err) => {
            const status = err.response.status
            const update_data = "Duplication"
            if (status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/"
            }
            if (status === 301) {
                return {
                    status, update_data
                }
            }
        })
}
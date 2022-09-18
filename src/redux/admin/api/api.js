import axios from "axios";
import Cookies from "js-cookie";

import {
    base_url,
    INSTADMIN_CREATE_ACTIVITY,
    INSTADMIN_DEASSIGN_ACTIVITY,
    INSTADMIN_DELETE_APC_MANAGE,
    INSTADMIN_DELETE_CLASS_MANAGE,
    INSTADMIN_DELETE_HEADING,
    INSTADMIN_GET_ACTIVITY_MANAGE,
    INSTADMIN_GET_APC_MANAGE,
    INSTADMIN_GET_CLASS_MANAGE,
    INSTADMIN_GET_PROFILE,
    INSTADMIN_PATCH_APC_MANAGE,
    INSTADMIN_PATCH_CLASS_MANAGE,
    INSTADMIN_PATCH_PASSWORD_REQ_URL,
    INSTADMIN_POST_APC_MANAGE,
    INSTADMIN_POST_CLASS_MANAGE,
    INSTADMIN_SLECTION_ACTIVITY,
    INSTADMIN_SLECTION_ACTIVITY_GET,
} from '../../constant'

// Inst-Admin Section

// Coordinators (APC) GET
// In Data We fetch USer ID for each School's

export async function instadmin_apc_get_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + INSTADMIN_GET_APC_MANAGE + data.payload, header)
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

// INSTADMIN APC POST Request
export async function instadmin_apc_post_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + INSTADMIN_POST_APC_MANAGE, data, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// COE Delete school
export async function instadmin_apc_delete_req(data) {
    // //console.log(data, "Api send data")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + INSTADMIN_DELETE_APC_MANAGE + data, header)
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
                window.location = "/instadmin"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}



// ---------------------  Update APC---------------------------

export async function instadmin_apc_patch_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + INSTADMIN_PATCH_APC_MANAGE, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    status, update_data
                }
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            if (err.response.status === 301) {
                const status = err.response.status
                const data = "Duplication"
                return {
                    status, data
                }
            }
        })
}




// --------------------- STUDENT PROFILE ---------------------------

export async function instadmin_get_profile(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + INSTADMIN_GET_PROFILE, header)
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
                window.location = "/instadmin"
            }
        })
}



// ---------------- Selection Activity -----------------



// GET activity

export async function instadmin_get_selection_activity(data) {
    // //console.log(data, 'API')
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + INSTADMIN_SLECTION_ACTIVITY_GET + data.payload, header)
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
            // //console.log(err, 'Err')
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
        })
}


// Activity --> Global to School Assign
export async function instadmin_selection_activity_patch_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + INSTADMIN_SLECTION_ACTIVITY, data.payload.sendData, header)
        .then((res) => {
            const update_data = data.payload.data
            const status = res.status
            if (status === 200) {
                return {
                    status, update_data
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            if (err.response.status === 301) {
                const status = err.response.status
                const data = "Duplication"
                return {
                    status, data
                }
            }
        })
}

// Activity --> School to  Global (Delete)
export async function instadmin_deAssign_activity_patch_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + INSTADMIN_DEASSIGN_ACTIVITY, data.payload.sendData, header)
        .then((res) => {
            const update_data = data.payload.data
            const status = res.status
            if (status === 200) {
                return {
                    status, update_data
                }
            }
        }).catch((err) => {
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            if (err.response.status === 301) {
                const status = err.response.status
                const data = "Duplication"
                return {
                    status, data
                }
            }
        })
}



//----------------------------------Activity Request section--------------------------------------//


// Instadmin Create Activity Req
export async function instadmin_post_create_activity_req(data) {
    // //console.log(data, "this is data is from api side")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + INSTADMIN_CREATE_ACTIVITY, data, header)
        .then((res) => {
            // //console.log(res, "this is console res")
            const data = res.data
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            // //console.log(err)
            const status = err.response.status
            const data = err.response.data
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            return {
                data, status
            }
        })
}


//GET HEADING 
export async function instadmin_get_activity_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
    return axios.get(base_url + INSTADMIN_GET_ACTIVITY_MANAGE + data.payload, header)
        .then((res) => {
            // //console.log(res)
            const data = res.data
            // //console.log(data)
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
                window.location = "/instadmin"
            }
        })
}

// DELETE HEADING

// COE Delete school
export async function instadmin_heading_delete_req(data) {
    //console.log(data, "Api send data")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + INSTADMIN_DELETE_HEADING + data, header)
        .then((res) => {
            //console.log(res)
            const delete_data = data
            const status = res.status
            if (status === 200) {
                return {
                    delete_data, status
                }
            }
        }).catch((err) => {
            //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            const status = err.response.status
            const delete_data = err.response.data
            return {
                delete_data, status
            }
        })
}




//----------------change passsword-----------------------//


export async function instadmin_patch_password_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + INSTADMIN_PATCH_PASSWORD_REQ_URL, data, header)
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
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            if (err.response.status === 301) {
                return {
                    status, update_data
                }
            }
        })
}





//----------------------------Manage Class------------------------------//



// Coordinators (APC) GET
// In Data We fetch USer ID for each School's

export async function instadmin_class_get_req(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + INSTADMIN_GET_CLASS_MANAGE + data.payload, header)
        .then((res) => {
            //console.log(res, "get const")
            const data = res.data.message.classConst
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            //console.log(err)
        })
}

// INSTADMIN APC POST Request
export async function instadmin_class_post_req(e) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + INSTADMIN_POST_CLASS_MANAGE, e, header)
        .then((res) => {
            //console.log(res)
            const data = e
            const status = res.status
            return {
                data, status
            }
        }).catch((err) => {
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}

// COE Delete school
export async function instadmin_class_delete_req(data) {
    //console.log(data, "Api send data")
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.delete(base_url + INSTADMIN_DELETE_CLASS_MANAGE, { data }, header)
        .then((res) => {
            //console.log(res)
            const delete_data = data
            const status = res.status
            if (status === 200) {
                return {
                    delete_data, status
                }
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            const status = err.response.status
            const data = err.response.data
            return {
                data, status
            }
        })
}



// ---------------------  Update Class---------------------------

export async function instadmin_class_patch_req(data) {
    // //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + INSTADMIN_PATCH_CLASS_MANAGE, data, header)
        .then((res) => {
            // //console.log(res)
            const update_data = data
            const status = res.status
            if (status === 200) {
                return {
                    status, update_data
                }
            }
        }).catch((err) => {
            // //console.log(err)
            if (err.response.status === 404) {
                Cookies.remove('isAuth')
                Cookies.remove('role')
                Cookies.remove('connect.sid')
                window.location = "/instadmin"
            }
            if (err.response.status === 301) {
                const status = err.response.status
                const data = "Duplication"
                return {
                    status, data
                }
            }
        })
}

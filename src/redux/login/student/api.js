import {
    base_url,
    STUDENT_LOGIN
} from '../../constant'
import axios from "axios";


export async function student_post_login(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
    return axios.post(base_url + STUDENT_LOGIN, data, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status == 200) {
                window.location = "/student/"
                return {
                    data, status
                }
            }
        }).catch((err) => {
            if (err.response.status === 301) {
                const data = "Auth Failed!"
                const status = err.response.status
                return {
                    data, status
                }
            }
        })
}
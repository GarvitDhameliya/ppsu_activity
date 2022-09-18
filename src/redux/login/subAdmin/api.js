import {
    base_url,
    APC_LOGIN
} from '../../constant'
import axios from "axios";


export async function apc_post_login(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
    return axios.post(base_url + APC_LOGIN, data, header)
        .then((res) => {
            const data = res.data
            const status = res.status
            if (status == 200) {
                window.location = "/apc/"
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
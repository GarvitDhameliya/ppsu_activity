import {
    base_url,
    ADMIN_LOGIN
} from '../../constant'
import axios from "axios";


export async function admin_post_login(data) {
    //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
    return axios.post(base_url + ADMIN_LOGIN, data, header)
        .then((res) => {
            //console.log(res)
            const data = res.data
            const status = res.status
            if (status == 200) {
                window.location = "/instadmin/"
                return {
                    data, status
                }
            }
        }).catch((err) => {
            //console.log(err)
            if (err.response.status === 301) {
                const data = "Auth Failed!"
                const status = err.response.status
                return {
                    data, status
                }
            }
        })
}
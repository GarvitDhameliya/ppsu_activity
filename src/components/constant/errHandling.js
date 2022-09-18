import { toast } from "react-toastify";
export const errHandle = (msg) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
}

export const successHandle = (msg) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
}

export const warningHandle = (msg) => {
    toast.warn(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
}

export const infoHandle = (msg) => {
    toast.info(msg, {
        position: "top-right",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
}
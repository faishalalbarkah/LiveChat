import axios from "axios";

export const offlinemodeA = (data) => {
    return {
        type: "POST_Guest_Offline",
        payload: axios ({
            method: "POST",
            url: process.env.REACT_APP_API_URL + "/guest/offline-message",
            data:data
        })
    }
}
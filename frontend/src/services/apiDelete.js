import axios from "axios"
import Cookies from "js-cookie"

const token = Cookies.get("token")

const api = axios.create({
    method:"PUT",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    validateStatus: function (status) {
        return status
    },
    baseURL:"https://localhost:3500/users/delete"
})

export default api

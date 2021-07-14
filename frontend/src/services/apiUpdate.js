import axios from "axios"
import getterToken from "../utils/token"

const token = getterToken()

const api = axios.create({
    method:"PUT",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    validateStatus: function (status) {
        return status
    },
    baseURL:"https://localhost:3500/users/update"
})
export const tokenApi = this
export default api

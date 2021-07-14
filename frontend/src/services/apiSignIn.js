import axios from "axios"

const api = axios.create({
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    validateStatus: function (status) {
        return status
    },
    baseURL:"https://localhost:3500/users/signin"
})

export default api

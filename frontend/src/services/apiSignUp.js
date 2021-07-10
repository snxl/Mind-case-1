import axios from "axios"

const api = axios.create({
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    baseURL:"https://localhost:3500/users/"
})

export default api

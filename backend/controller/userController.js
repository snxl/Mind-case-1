import db from "../database/models/index.js"
import service from "../services/userService.js"
import  jwt from "jsonwebtoken"

export default new class Register {

    async indexUser(req, res){
        const data = await db.User.findAll()
        return res.json(data)
    }

    async store(req, res){
        
        const data = req.body

        const response = await service.store(data)

        return res.json(response)

    }

} 
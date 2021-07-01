import db from "../database/models/User.js"

export default new class Register {

    async indexUser(req, res){
        try {
            const index = await db.findAll()

            return res.json(index)
        } catch (error) {
            res.json({error: "aconteceu alguma coisa"})
        }
    }

    async store(){
        db.create()
    }

} 
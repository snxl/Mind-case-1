import db from "../database/models/index.js"

export default new class UserService{

    async store(data){
        
        const {
            email,
            password
        } = data
        
        try{
            
            return await db.User.create({email, password})

        }catch(err){

            return err
        }
 
    }

    async indexUser(){

    }

    async indexAllUser(){

    }

    async update(){

    }

    async destroy(){

    }

}
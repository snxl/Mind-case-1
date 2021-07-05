import db from "../database/models/index.js"
import Sequelize from "sequelize"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const Op = Sequelize.Op

export default new class UserService{
    async updateAdm(data){

        try {
            const updated = await db.User.update({
                email: data.email,
                password: data.password,
                name: data.name
            }, {
                where: {email: data.oldEmail},
                individualHooks: true,
                returning:true
            })

            const newJsonWebToken = await jwt.sign({id: updated[1][0].id, email: updated[1][0].email}, process.env.SECRET_TOKEN, {
                expiresIn:"7d"
            })


            return updated[0] === 1?{
                    status: "sucess",
                    message: "atualizado com sucesso",
                    jsonwebtoken: newJsonWebToken
                }:{
                    status: "error",
                    dataUpdate: updated,
                    error: [ "falha ao atualizar dados"]
                }

        } catch (error) {
            
            return {
                status: "error",
                error: ["falha ao atualizar dados"]
               }

        }
    }

    async destroyAdm(data){

        try {
            
            const destryProfile = await db.User.destroy({
                where:{email: data.email}
            })

            return {
                status:"success",
                destryProfile
            }

        } catch (err) {
            
            return {
                status: "error",
                err
            }
        }

    }

    async store(data){
        
        const {
            email,
            password
        } = data
        
        try{
            
            const data = await db.User.create({email, password})

            const token = await jwt.sign({id: data.id, email: data.email, credential: data.credential, acess: data.acess}, process.env.SECRET_TOKEN, {
                expiresIn: process.env.TOKEN_EXPIRATION
            })

            return {
                status: "success",
                jsonwebtoken: token
            }

        }catch(err){

            return {
                status: "success",
                error:["falha ao gerar cadastrro"]
            }
        }
 
    }

    async indexUser(request){

        const data = await db.User.findOne({
            where:{
                email: request.email
            },
            attributes:["id", "email", "credential", "acess", "password"]
        })

        let token

        if(await bcrypt.compare(request.password, data.password)) token = await jwt.sign({id: data.id, email: data.email, credential: data.credential, acess: data.acess}, process.env.SECRET_TOKEN, {
            expiresIn: process.env.TOKEN_EXPIRATION
        })

         
        return token? 
                {
                    status: "success",
                    jsonwebtoken: token
                } : {
                    status: "error",
                    error: ["dados incorretos"]
                }


    }

    async indexAllUser(){

        return await db.User.findAll()

    }

    async update(token, data){

        const dataToken = await jwt.verify(token, process.env.SECRET_TOKEN)


        try {
            const updated = await db.User.update({
                email: data.email,
                password: data.password,
                name: data.name
            }, {
                where: {
                    [Op.or]: [
                        {id: dataToken.id},
                        {email: dataToken.email}
                    ]
                },
                individualHooks: true,
                returning:true
            })


            const newJsonWebToken = await jwt.sign({id: updated[1][0].id, email: updated[1][0].email}, process.env.SECRET_TOKEN, {
                expiresIn:"7d"
            })


            return updated[0] === 1?{
                    status: "success",
                    jsonwebtoken: newJsonWebToken
                }:{
                    status: "error",
                    dataUpdate: updated,
                    error: [ "falha ao atualizar dados"]
                }


        } catch (error) {

            return {
                    status: "error",
                    error: ["falha ao atualizar dados"]
                   }

        }

    }

    async destroy(tokenHash){

        try {

            const token = await jwt.verify(tokenHash, process.env.SECRET_TOKEN)

            const destroy = await db.User.destroy({
                where: {
                    [Op.and]:[
                        {id: token.id},
                        {email: token.email}
                    ]
                }
            })

            return {
                status: "success",
                destroy: `success with code : ${destroy}`
            }
        } catch (error) {
            return {
                status: "error",
                error: [ "falha ao deletar dados"]
            }
        }

    }

}
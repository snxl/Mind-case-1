import * as yup from "yup"
import jwt from "jsonwebtoken"
import db from "../database/models/index.js"

export default new class validate{

    async singUp(req, res, next){

        const schema = yup.object().shape({
            email: yup  
                        .string()
                        .required("Inserir e-mail"),

            password: yup   
                            .string()
                            .required("Inserir senha")
                            .min(8, "Minimo 8 caracteres")
                            .strict(true)
                            .matches(RegExp('(.*[a-z].*)'), 'Inserir mininúsculo')
                            .matches(RegExp('(.*[A-Z].*)'), 'Inserir maiúsculo')
                            .matches(RegExp('(.*\\d.*)'), 'Inserir número'),
                            
            passwordCheck: yup
                                .string()
                                .required("validação de senha necessária")
                                .oneOf([yup.ref('password'), null], 'Senhas incorretas')
        })

        const checkEmail = await db.User.findOne({
            where: {email : req.body.email},
            attributes: ["email"],
        })


        try {
            await schema.validate(req.body, {abortEarly: false})

            if(!checkEmail) next()
            else return res.json ({
                status: "error",
                error: ["e-mail inválido"]
            })

        } catch (err) {
            const arrayErrors = []

            err.errors.forEach(element => {
                element == "Inserir e-mail"? arrayErrors.push(element) : "";
                element == "Inserir senha"? arrayErrors.push(element) : "";
                element == "Senhas incorretas"? arrayErrors.push(element) : "";
                element == "Inserir mininúsculo"? arrayErrors.push(element) : "";
                element == "Inserir maiúsculo"? arrayErrors.push(element) : "";
                element == "Inserir número"? arrayErrors.push(element) : "";
                element == "Minimo 8 caracteres"? arrayErrors.push(element) : "";
            })

            if(checkEmail) arrayErrors.push("e-mail inválido")

            return res.json({error : arrayErrors})
        }
            
    }

    async update(req, res, next){
        
        const schema = yup.object().shape({
            email: yup
                        .string(),
            password: yup
                            .string()
                            .min(8, "Minimo 8 caracteres")
                            .strict(true)
                            .matches(RegExp('(.*[a-z].*)'), 'Inserir mininúsculo')
                            .matches(RegExp('(.*[A-Z].*)'), 'Inserir maiúsculo')
                            .matches(RegExp('(.*\\d.*)'), 'Inserir número'),
            
            passwordCheck: yup
                            .string()
                            .required("validação de senha necessária")
                            .oneOf([yup.ref('password'), null], 'Senhas incorretas'),
            name: yup
                        .string()
                        .min(1, "Minimo 1 caractere")
        })

        const token = await jwt.verify(req.token, process.env.SECRET_TOKEN)

        let checkEmail 
        
        if(req.body.email) checkEmail = await db.User.findOne({
            where:{email: req.body.email},
            attributes:["email"]
        })
        else req.body.email = token.email

        try {
            await schema.validate(req.body, {abortEarly: false})

            if(!checkEmail) next()
            else if(checkEmail && token.email === checkEmail.email) return res.status(403).json({
                status: "error",
                error: ["e-mail atual"]
            })
            else return res.status(403).json({
                status: "error",
                error: ["e-mail inválido"]
            })

        } catch (err) {
            const arrayErrors = []

            err.errors.forEach(element => {
                element == "Senhas incorretas"? arrayErrors.push(element) : "";
                element == "Inserir mininúsculo"? arrayErrors.push(element) : "";
                element == "Inserir maiúsculo"? arrayErrors.push(element) : "";
                element == "Inserir número"? arrayErrors.push(element) : "";
                element == "Minimo 8 caracteres"? arrayErrors.push(element) : "";
                element == "validação de senha necessária"? arrayErrors.push(element) : "";
            })

            const validateEmails = ()=>{
                if(checkEmail && token.email === checkEmail.email) return arrayErrors.push("e-mail atual")
                else if(checkEmail) return arrayErrors.push("e-mail inválido")
            }
           
            validateEmails()  

            return res.status(403).json({
                status: "error",
                error : arrayErrors
            })
        }


    }

    async singIn(req, res, next){


        const schema = yup.object().shape({
            email: yup
                        .string()
                        .required("Inserir e-mail"),
            password: yup
                            .string()
                            .required("Inserir senha")
        })

        try {
            
            await schema.validate(req.body, {abortEarly: false})

            next()

        } catch (err) {

            let arrayErrors = []

            err.errors.forEach(element => {
                element === "Inserir e-mail"? arrayErrors.push(element) : "";
                element === "Inserir senha"? arrayErrors.push(element) : "";
            })

            res.status(403).json({
                status: "error",
                error:arrayErrors
            })
            
        }
    }

}
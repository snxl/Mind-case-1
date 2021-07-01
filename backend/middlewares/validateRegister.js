import * as yup from "yup"
import db from "../database/models/index.js"

export default new class validate{

    async register(req, res, next){

        const schema = yup.object().shape({
            email: yup.string().required("Inserir e-mail"),
            password: yup.string().required("Inserir senha"),
            passwordCheck: yup.string().required().oneOf([yup.ref('password'), null], 'Senhas incorretas')
        })

        const checkEmail = await db.User.findOne({
            where: {email : req.body.email},
            attributes: ["email"],
        })


        try {
            await schema.validate(req.body, {abortEarly: false})

            if(!checkEmail) next()
            else return res.json ([{
                "errors": ["e-mail inválido"]
            }])

        } catch (err) {
            const arrayErrors = []

            console.log(err)

            err.errors.forEach(element => {
                element == "Inserir e-mail"? arrayErrors.push(element) : "";
                element == "Inserir senha"? arrayErrors.push(element) : "";
                element == "Senhas incorretas"? arrayErrors.push(element) : "";
            })

            if(checkEmail) arrayErrors.push("e-mail inválido")

            return res.json({errors : arrayErrors})
        }
            
    }

}
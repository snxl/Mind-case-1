import jwt from "jsonwebtoken"

export default (req, res, next)=>{


    if(req.headers.authorization){

        const bearer = req.headers.authorization.split(" ")

        const dataToken =  jwt.verify(bearer[1], process.env.SECRET_TOKEN, (err, decode)=>{
            if (err) return res.status(403).json({
                status: "error",
                error: [err.message]
            })
            return decode
        })

        const credentialLevel = Number(dataToken.credential)

        req.token = bearer[1]

        return credentialLevel >= 2?
                                 next():
                                 res.json({
                                     status: "error",
                                     error:["usuario não autorizado"]
                                 })

    }else return res.status(401).json({
        status: "error",
        error: ["usuario não autorizado"]
    })
}


    
import jwt from "jsonwebtoken"

export default (req, res, next)=>{

    if(req.headers.authorization){

        const bearer = req.headers.authorization.split(" ")

        const existError = jwt.verify(bearer[1], process.env.SECRET_TOKEN, (err, decode)=>{
            if(err) return err
        })

        if(existError)return res.json({
            status: "error",
            error: [existError.message]
        })

        req.token = bearer[1]

        next();

    }else return res.status(401).json({
        status: "error",
        error: ["usuario não autorizado"]
    })
}


    
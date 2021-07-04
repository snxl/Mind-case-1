export default (req, res, next)=>{


    if(req.headers.authorization){

        const bearer = req.headers.authorization.split(" ")

        req.token = bearer[1]

        next();

    }else return res.status(401).json({
        status: "error",
        error: ["usuario não autorizado"]
    })
}


    
import service from "../services/userService.js"

export default new class Register {
    async updateAdm(req, res){

        const data = await service.updateAdm(req.body)

        if(data.status === 'success')return res.status(200).json(data)
        else return res.status(403).json(data)

    }

    async deleteAdm (req, res){

        const data = await service.destroyAdm(req.body)

        if(data.status === 'success')return res.status(200).json(data)
        else return res.status(403).json(data)

    }

    async allUserAdm(req, res){

        res.json(await service.indexAllUser())

    }

    async indexUser(req, res){
        
        const user = await service.indexUser(req.body)

        if(user.status === 'success') return res.status(200).json(user)
        else return res.status(403).json(user)

    }

    async store(req, res){
        
        const data = req.body

        const dataResponse = await service.store(data)

        if(dataResponse.status === "success")return res.status(200).json(dataResponse)
        else return res.status(403).json(dataResponse)


    }

    async update(req, res){

        const dataUpdate = await service.update(req.token, req.body)

        if(dataUpdate.status === 'success') return res.status(200).json(dataUpdate)
        else return res.status(403).json(dataUpdate)

    }

    async destroy(req, res){

        const destroy = await service.destroy(req.token)

        if(destroy.status === 'success') return res.status(200).json(destroy)
        else return res.status(403).json(destroy)

    }

} 
class ControllerAdmin{
    async verefication (req,res,next){
        const {password, login} = req.body;
        console.log(password)
        console.log(login)

        if(login === process.env.ADMIN__USERNAME 
            && password === process.env.ADMIN__PASSWORD){
            
                return res.status(200).json({admin: true})
        }

        return res.status(200).json({admin: true})
    }

}

module.exports = new ControllerAdmin();


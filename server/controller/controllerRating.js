const modelAllItems = require("../model/modelAllItems")

class ControllerRaiting{
    async getRaiting(req,res,next){
        let item;
        let rate;
        const { id } = req.params;
           

        try {
            
            item = await modelAllItems.findById(id)
            rate = item.avarageRate();

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }

        res.status(200).json({rate});
    }

    async addRaititng(req, res, next){
        const { ip, rate } = req.body;
        const { id } = req.params;
        let rateFromDb;
        let item;


        try {
            
            item = await modelAllItems.findById(id);
            rateFromDb = item.rate;
            rateFromDb[ip] = rate;
            console.log(rateFromDb)
            item = await modelAllItems.findByIdAndUpdate(id,{rate: rateFromDb}).lean()



        } catch (error) {
            console.log(error.message)
            res.status(500).json({message: error.message})
        }

        res.status(200).json(item);

    }
    
    async validationUrl(req,res,next){

        const { id } = req.params;

        if( id.length != 24){
            return res.status(404).json({message: "Your id less or more than 24", notFound: true})
        }       
    
        next();
        
    }
}

module.exports = new ControllerRaiting();
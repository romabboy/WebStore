const modelSalesHits = require("../model/modelSalesHits")

class SalesHits{

    async getAll(req,res,next){
        let item;
        
        try {
            
            item = await modelSalesHits.find();
                        
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            return res.status(500).json({message: "DataBase not work"});
        }

        return res.status(200).json(item);

    }

    async createItem(req,res,next){
        let item;
        let clientItem = req.body;
        
        try {
            
            item = new modelSalesHits(clientItem);

            await item.save();

                        
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            return res.status(500).json({message: "DataBase not work"});
        }

        return res.status(200).json(item);

    }


    async updateItems(req,res,next){
        let item;
        const { id } = req.params;
        const clientItem = req.body;
        
        try {
            
            item = await modelSalesHits.findByIdAndUpdate(id,{...clientItem});
        
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            return res.status(500).json({message: "DataBase not work"});
        }

        return res.status(200).json(item);


    }

    async deleteItems(req,res,next){
        let item;
        const { id } = req.params               

        try {
            item = await modelSalesHits.findByIdAndDelete(id);
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            return res.status(500).json({message: "DataBase not work"});
        }

        return res.status(200).json(item);

    }

    async getOneItems(req,res,next){
        let item;
        let id = req.params.id;
        
        try {
            item = await modelSalesHits.findById(id)

        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            return res.status(500).json({message: "Oops your items not found"});
        }

        return res.status(200).json(item);

    }
    


}

module.exports = new SalesHits();
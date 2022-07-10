const modelAllItems = require("../model/modelAllItems");
const controllerSalesHits = require("./controllerSalesHits");


class AllItems{

    async getAll(req,res,next){
        let item;
        
        try {
            
            item = await modelAllItems.find();
                       
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
        clientItem.titleLowerCase = clientItem.title;
        
        try {
            
            item = new modelAllItems(clientItem);

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
            
            item = await modelAllItems.findByIdAndUpdate(id,{...clientItem});
        
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
            item = await modelAllItems.findByIdAndDelete(id);
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
        let { id } = req.params;
 
        try {
            item = await modelAllItems.findById(id);
      
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item){
            console.log(item)
            return res.status(500).json({message: "Oops your items not found"});
        }

        return res.status(200).json(item);

    }
    
    async getTypeItems(req,res,next){
        let item;
        let { type } = req.params;
        
        try {

            item = await modelAllItems.find({type});
            
        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!item.length){
            item = await modelAllItems.distinct("type");
            
            return res.status(500).json({message: `Oops your type not found available type [${item}]`});
        }

        return res.status(200).json(item);

    }

    async getSalesHits(req, res, next){
        let items;
        
        try {
            
            items = await modelAllItems.find({salesHits: true});
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }


        if(!items.length){
            
            return res.status(500).json({message: `Oops your type not found available type [${item}]`});
        }

        res.status(200).json(items)

    }

    async validationUrl(req,res,next){

        const { id } = req.params;

        if( id.length != 24){
            return res.status(404).json({message: "Your id less or more than 24", notFound: true})
        }       
    
        next();
        
    }

    async filterItems(req,res,next){
        let items;
        let { type } = req.params;
        let characteristics = {min: Infinity, max: -Infinity};
                
        try {

            items = await modelAllItems.find({type});
            items.forEach( item => {
                for(let key of Object.getOwnPropertyNames(item.characteristics)){ 
                    let value = item.characteristics[key]
   
                    if(characteristics[key]){
                        characteristics[key] = [...characteristics[key],value] 
                    }else{
                        characteristics[key] = [value];
                    }
                }
                characteristics = minimize(characteristics);

                characteristics.min = (item.price < characteristics.min) ? item.price : characteristics.min;  
                characteristics.max = (item.price > characteristics.max) ? item.price : characteristics.max;  
            })

            console.log(characteristics)


        } catch (error) {
            const message = error.message;
            console.log(message);
            res.status(404).json({message});
        }

        if(!items.length){
            items = await modelAllItems.distinct("type");
            
            return res.status(500).json({message: `Oops your type not found available type [${items}]`});
        }

        return res.status(200).json(characteristics);

         }
    
    async getItemsWithFilter(req,res,next){
        let item;
        const {price, ...otherFilter} = req.body;
        const {type} = req.params;
        const filter = {
            $and: [{price: { $gte: price[0] } }, {price: { $lte: price[1] } }],
            type,
            ...otherFilter
        }

        console.log(price)
        console.log(filter)
    

        try {
            
            item = await modelAllItems.find(filter);
            console.log(item.length)
                       
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

}



module.exports = new AllItems();


function minimize(characteristic){
    let newCharacteristic = {};




    for(let key of Object.getOwnPropertyNames(characteristic)){
        let obj = {};
        
        for(let i = 0; i < characteristic[key].length; i++){
            obj[characteristic[key][i]] = null;
        }
        
        
        newCharacteristic[key] = Object.keys(obj).map(item => isNaN(item) ? item : +item);
    }

    newCharacteristic.min = characteristic.min;
    newCharacteristic.max = characteristic.max;



    return newCharacteristic;
}
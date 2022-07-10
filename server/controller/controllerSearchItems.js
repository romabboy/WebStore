const modelAllItems = require("../model/modelAllItems")


class SearchItems{
    async getSearchItems(req,res,next){
        let item;
        let searchText = req.body.search.toLowerCase();
        console.log(searchText)


        try {

            item = await modelAllItems.find({titleLowerCase: {$regex: `${searchText}`}}).limit(10);
            
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({message: "Opps somthing happend in DB"})
        }

        
        res.status(200).json(item);
    }
}

module.exports = new SearchItems();

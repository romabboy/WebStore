require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const urlMongoose = `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@cluster0.cge6v.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || "5000";
const pathStatic = path.join(__dirname,"static");


const routeSalesHits = require("./route/routeSalesHits");
const routeAllItems = require("./route/routeAllItems");
const routerSearchItems = require("./route/routerSearchItems")
const routerRaiting = require("./route/routerRaiting")
const routerAdmin = require("./route/routeAdmin");

app.use(cors());
app.use(express.static(pathStatic));
app.use(express.json());

app.use("/sales-hits", routeSalesHits);
app.use("/all-items", routeAllItems);
app.use("/search", routerSearchItems)
app.use("/raiting", routerRaiting)
app.use("/admin", routerAdmin)

mongoose.connect(urlMongoose)
    .then( connect => app.listen(PORT,() => console.log(`Server has been connected on port ${PORT}`) ))
    .catch( e => console.log(e.masseage));
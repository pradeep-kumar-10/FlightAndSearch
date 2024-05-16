const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const {Airport, City} = require('./models/index');
const db = require('./models/index');

const setupAndStartServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes); 

    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    });

    // const airports = await Airport.findAll();

    // const airports = await Airport.findAll({ 
    //     include: [{
    //         model: City
    //     }]
    // });

    // After every association we need to do
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter: true});
    }
    
    // const city = await City.findOne({
    //     where: { id:10 }
    // });
    // const airports = await city.getAirports();
    // console.log(city, airports);

}

setupAndStartServer();
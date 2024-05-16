const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

// const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes); 

    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    });

    // const cityRepo = new CityRepository();
    // cityRepo.deleteCity();

}

setupAndStartServer();
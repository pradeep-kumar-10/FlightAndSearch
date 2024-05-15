const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
console.log(PORT);
// const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, ()=> {
        console.log(`Server started at ${PORT}`);
    });

    // const cityRepo = new CityRepository();
    // cityRepo.deleteCity();

}

setupAndStartServer();
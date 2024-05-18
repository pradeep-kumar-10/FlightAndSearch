const { AirportService } = require('../services/index');
const {ServerError, Success} = require('../utils/error-code');

const airportService = new AirportService();

const create = async(req,res) => {
    try{
        const responce = await airportService.create(req.body);
        return res.status(Success.CREATED).json({
            data: responce,
            sucess: true,
            message: "Sucessfully created an airport",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(ServerError.INTERNAL_SERVER_ERROR).json({
            data: {},
            sucess: false,
            message: "Not able to create airport",
            err: error
        })
    }
}

module.exports = {
    create
}
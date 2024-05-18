const {FlightService} = require('../services/index');
const {ServerError, Success} = require('../utils/error-code');

const flightService = new FlightService();

const create = async(req, res)=> {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(Success.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}          
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerError.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async(req, res)=> {
    try {
        const response = await flightService.getAllFlight(req.query);
        return res.status(Success.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetch the flights',
            err: {}          
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerError.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
}
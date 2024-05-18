const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ){
        // if any params missing
        return res.status(400).json({
            data:{},
            sucess: false,
            message: 'Invalid req body to create a flight',
            err: 'Missing madatory property to create a flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}
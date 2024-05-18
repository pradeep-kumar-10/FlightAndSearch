const AirportRepository = require('./airport-repository');
const CrudRepository = require('./crud-repository');

module.exports = {
    AirplaneRepository: require('./airplane-repository'),
    AirportRepository: require('./airport-repository'),
    CityRepository: require('./city-repository'),
    CrudRepository: require('./crud-repository'),
    FlightRepository: require('./flight-repository')
}
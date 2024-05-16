const { CityService}  = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
    try{
        const responce = await cityService.createCity(req.body);
        return res.status(201).json({
            data: responce,
            sucess: true,
            message: "Sucessfully created a city",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try{
        const responce = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: responce,
            sucess: true,
            message: "Sucessfully deleted a city",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "Not able to delete a city",
            err: error
        })
    }
}

// GET-> /city/:id
const get = async (req, res) => {
    try{
        const responce = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: responce,
            sucess: true,
            message: "Sucessfully fetch a city",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "Not able to fetch a city",
            err: error
        })
    }
}

// GET-> /city
const getAll = async (req, res) => {
    try{
        const responce = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: responce,
            sucess: true,
            message: "Sucessfully fetch all the cities",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "Not able to fetch the cities",
            err: error
        })
    }
}

// PATCH-> /city/:id    data-> req.body
const update = async (req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: "Sucessfully update a city",
            err: {}
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "Not able to update a city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}
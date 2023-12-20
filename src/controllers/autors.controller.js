const { AutorService } = require("../services/autors.service");


const findAllAutor = async(req, res) => {
    try {
        const autors = await AutorService.findAll();

        return res.json(autors)
    } catch (e) {
        return res.status(500).json(e)
    }
}
const createAutor = async(req, res) => {
    try {
        const { name, surname, birthdate, biography} = req.body;

        const autor = await AutorService.create({ name, surname, birthdate, biography})

        return res.status(201).json(autor)
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
}
const findOneAutor = (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
}
const updateAutor = (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
}
const deleteAutor = (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    findAllAutor,
    createAutor,
    findOneAutor,
    updateAutor,
    deleteAutor,
}
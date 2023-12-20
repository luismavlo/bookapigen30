const express = require('express');
const autorController = require('./../controllers/autors.controller')

const router = express.Router();


router.route('/')
    .get(autorController.findAllAutor)
    .post(autorController.createAutor)

router.route('/:id')
    .get(autorController.findOneAutor)
    .patch(autorController.updateAutor)
    .delete(autorController.deleteAutor)

module.exports = {
    autorsRouter: router
}
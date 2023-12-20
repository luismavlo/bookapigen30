const db = require('./../database/models/index.js')

class AutorService {

    static async findOne(id) {

    }

    static async findAll(){
        return await db.autor.findAll({
            where: {
                status: true
            },
            include: [
                {
                    model: db.book
                }
            ]
        })
    }

    static async create(data) {
        return await db.autor.create(data);
    }

    static async update(autor, data) {

    }

    static async delete(autor) {

    }

}

module.exports = {
    AutorService
}
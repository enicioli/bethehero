const connection = require('./../database/connection')

module.exports = {
    async list(request, response) {
        const ongs = await connection('ong')
        .select('*')
    
        return response.json(ongs)
    },
    async one(request, response) {
        const { id } = request.params
        const ong = await connection('ong')
        .select('*')
        .where({
            id
        })
        .first()
    
        return response.json(ong)
    },
    async create(request, response) {
        const crypto = require('crypto')
        const { name, email, whatsapp, city, uf } = request.body
    
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ong')
        .insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({
            id
        })
    }
}

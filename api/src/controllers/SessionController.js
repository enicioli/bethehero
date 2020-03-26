const connection = require('./../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body

        const ong =  await connection('ong')
        .select('*')
        .where({
            id
        })
        .first()

        if (!ong) {
            return response.json('Not found', 404)
        }

        return response.json({name: ong.name})
    }
}

const connection = require('./../database/connection')

module.exports = {
    async list(request, response) {
        ong_id = request.headers.authorization

        if (!ong_id) {
            return response.json('Unauthorized', 401)
        }

        const incidents = await connection('incident')
        .select('*')
        .where({
            ong_id
        })
    
        return response.json(incidents)
    },
    async one(request, response) {
        const ong_id = request.headers.authorization
        const { id } = request.params

        if (!ong_id) {
            return response.json('Unauthorized', 401)
        }

        const incident = await connection('incident')
        .select('*')
        .where({
            id,
            ong_id
        })
        .first()

        if (!incident) {
            return response.json('Not found', 404)
        }
    
        return response.json(incident)
    },
    async create(request, response) {
        const ong_id = request.headers.authorization
        const { title, description, value } = request.body

        if (!ong_id) {
            return response.json('Unauthorized', 401)
        }
    
        const [id] = await connection('incident')
        .insert({
            ong_id,
            title,
            description,
            value
        })
    
        return response.json({
            id
        })
    },
    async delete(request, response) {
        const ong_id = request.headers.authorization
        const { id } = request.params

        if (!ong_id) {
            return response.json('Unauthorized', 401)
        }

        const deleted = await connection('incident')
        .where({
            id,
            ong_id
        })
        .delete()

        if (!deleted) {
            return response.json('Not found', 404)
        }
    
        return response.json('OK')
    }
}

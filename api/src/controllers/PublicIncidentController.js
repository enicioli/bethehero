const connection = require('./../database/connection')

module.exports = {
    async list(request, response) {
        const incidents = await connection('incident')
        .join('ong', 'ong.id', '=', 'incident.ong_id')
        .select([
            'incident.*',
            'ong.name',
            'ong.email',
            'ong.whatsapp',
            'ong.city',
            'ong.uf'
        ])
        .where(request.query)
    
        return response.json(incidents)
    },
    async one(request, response) {
        const { id } = request.params

        const incident = await connection('incident')
        .join('ong', 'ong.id', '=', 'incident.ong_id')
        .select([
            'incident.*',
            'ong.name',
            'ong.email',
            'ong.whatsapp',
            'ong.city',
            'ong.uf'
        ])
        .where({
            'incident.id': id
        })
        .first()

        if (!incident) {
            return response.json('Not found', 404)
        }
    
        return response.json(incident)
    }
}

const express = require('express')
const routes = express.Router()

const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const PubicIncidentController = require('./controllers/PublicIncidentController')

routes.post('/login', SessionController.create)

routes.post('/ong', OngController.create)
routes.get('/ong', OngController.list)
routes.get('/ong/:id', OngController.one)

routes.post('/incident', IncidentController.create)
routes.get('/incident', IncidentController.list)
routes.get('/incident/:id', IncidentController.one)
routes.delete('/incident/:id', IncidentController.delete)

routes.get('/public-incident', PubicIncidentController.list)
routes.get('/public-incident/:id', PubicIncidentController.one)

module.exports = routes
